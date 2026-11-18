/* global QUnit */
import adguardRulesConstructor from '../src/adguard-rules-constructor';
import protectedApi from '../src/protectedApi';
import { isTrustedEvent } from '../src/utils/common-utils';
import IframeController from '../src/iframe';
import IframeControllerMobile from '../src/iframe.mobile';
import ioc from '../src/ioc';

const { test, module } = QUnit;

/**
 * Builds a rule text for the given URL attribute value.
 *
 * @param {string} urlMask Value of the `src` or `data` attribute.
 * @param {Object} [overrides] Rule options to override.
 * @returns {string} Rule text.
 */
const buildRule = (urlMask, overrides) => {
    const element = document.createElement('img');
    document.getElementById('qunit-fixture').appendChild(element);

    const rule = adguardRulesConstructor.constructRuleText(element, {
        urlMask,
        ruleType: 'URL',
        isBlockOneDomain: false,
        url: 'https://page.example/some/page',
        cssSelectorType: 'STRICT_FULL',
        ...overrides,
    });

    element.remove();

    return rule;
};

module('rule text validation');

test('accepts the rules that the element picker builds', (assert) => {
    const rules = [
        'example.com##.banner',
        '##div.ad',
        'example.com,example.org##.banner',
        '~example.com##.banner',
        'example.com#?#div:has(> .ad)',
        '||example.com/banner.png',
        '||example.com/banner.png$domain=example.com',
        'https://example.com/banner.png$domain=example.com',
        '//cdn.example.com/banner.png$domain=example.com',
        '||example.com^$important',
        '||example.com^$removeparam=utm_source',
    ];

    rules.forEach((rule) => {
        assert.ok(adguardRulesConstructor.isValidRuleText(rule), `Accepts ${rule}`);
    });
});

test('rejects rules of other types and several rules in one field', (assert) => {
    const rules = [
        '',
        '   ',
        '#%#window.__pwned=1;//$domain=example.com',
        'example.com#%#window.__pwned=1;//',
        'example.com#$#body{display:none!important}',
        'example.com#@#.banner',
        '@@||example.com^',
        'example.com##.banner\n#%#window.__pwned=1;//',
        'example.com##.banner\r\n@@||example.com^',
        'example.com$$script[tag-content="pwned"]',
        '0.0.0.0 example.com',
        '! comment',
        '[Adblock Plus 2.0]',
        'plain text',
    ];

    rules.forEach((rule) => {
        assert.notOk(adguardRulesConstructor.isValidRuleText(rule), `Rejects ${rule}`);
    });

    assert.notOk(adguardRulesConstructor.isValidRuleText(null), 'Rejects null');
    assert.notOk(adguardRulesConstructor.isValidRuleText(undefined), 'Rejects undefined');
});

module('URL block rules');

test('builds a rule from the parsed address', (assert) => {
    assert.strictEqual(
        buildRule('https://example.com/a.png'),
        'https://example.com/a.png$domain=page.example',
        'Keeps the https address and adds the page scope',
    );

    assert.strictEqual(
        buildRule('http://www.example.com/a.png'),
        '||example.com/a.png$domain=page.example',
        'Uses the domain anchor for an http address',
    );

    assert.strictEqual(
        buildRule('//cdn.example.com/a.png'),
        '//cdn.example.com/a.png$domain=page.example',
        'Keeps a protocol-relative address',
    );

    assert.strictEqual(
        buildRule('https://example.com/a.png?x=1#fragment'),
        'https://example.com/a.png?x=1$domain=page.example',
        'Drops the fragment',
    );

    assert.strictEqual(
        buildRule('https://example.com/a.png', { isBlockOneDomain: true }),
        'https://example.com/a.png',
        'Adds no scope for the current site only',
    );
});

test('does not build a URL rule from page-controlled rule syntax', (assert) => {
    const values = [
        '#%#window.__pwned=1;//',
        'example.com#%#window.__pwned=1;//',
        'https://example.com/a$b.png',
        'https://example.com/a.png$domain=evil.example',
        'data:image/png;base64,AAAA',
        '/relative/a.png',
        'ftp://example.com/a.png',
    ];

    values.forEach((value) => {
        const rule = buildRule(value);

        assert.notOk(rule.includes('#%#'), `No scriptlet mark for ${value}`);
        assert.notOk(rule.includes('$domain=evil.example'), `No injected scope for ${value}`);
        assert.ok(adguardRulesConstructor.isValidRuleText(rule), `Fallback rule is valid for ${value}`);
    });
});

test('ignores unsafe URL values of the selected element', (assert) => {
    const element = document.createElement('img');
    element.setAttribute('src', '#%#window.__pwned=1;//');

    assert.strictEqual(adguardRulesConstructor.getUrlBlockAttribute(element), null, 'Unsafe src is ignored');
    assert.notOk(adguardRulesConstructor.haveUrlBlockParameter(element), 'No URL option for an unsafe src');

    element.setAttribute('data', 'https://example.com/a.png');

    assert.strictEqual(
        adguardRulesConstructor.getUrlBlockAttribute(element),
        'https://example.com/a.png',
        'Safe data attribute is used',
    );
    assert.ok(adguardRulesConstructor.haveUrlBlockParameter(element), 'URL option is available');
});

module('CSS rules');

test('accepts the CSS rule that the element picker builds', (assert) => {
    const element = document.createElement('div');
    element.setAttribute('id', 'banner');
    element.className = 'ad banner';
    document.getElementById('qunit-fixture').appendChild(element);

    const rule = adguardRulesConstructor.constructRuleText(element, {
        ruleType: 'CSS',
        cssSelectorType: 'STRICT_FULL',
        isBlockOneDomain: false,
        url: 'https://page.example/some/page',
    });

    element.remove();

    assert.strictEqual(rule.indexOf('page.example##'), 0, `Rule has the page scope: ${rule}`);
    assert.ok(adguardRulesConstructor.isValidRuleText(rule), 'Rule is valid');
});

test('does not let element attributes change the rule syntax', (assert) => {
    const element = document.createElement('div');
    element.className = 'banner$domain=evil.example';
    document.getElementById('qunit-fixture').appendChild(element);

    const rule = adguardRulesConstructor.constructRuleText(element, {
        ruleType: 'CSS',
        cssSelectorType: 'STRICT',
        isBlockOneDomain: true,
        url: 'https://page.example/some/page',
    });

    element.remove();

    assert.notOk(rule.includes('$domain=evil.example'), `Scope is escaped in ${rule}`);
    assert.ok(adguardRulesConstructor.isValidRuleText(rule), 'Rule is valid');
});

module('user action checks');

test('accepts only trusted events', (assert) => {
    assert.ok(isTrustedEvent({ isTrusted: true }), 'Trusted event is a user action');
    assert.notOk(isTrustedEvent({ isTrusted: false }), 'Dispatched event is not a user action');
    assert.notOk(isTrustedEvent({}), 'Event without the flag is not a user action');
    assert.notOk(isTrustedEvent(undefined), 'Missing event is not a user action');
});

module('assistant UI isolation');

test('supports a closed shadow root', (assert) => {
    assert.ok(protectedApi.checkShadowDomSupport(), 'Shadow DOM is used in all supported browsers');
    assert.ok(protectedApi.attachClosedShadowRoot(document.createElement('div')), 'Shadow root is attached');
});

test('the desktop dialog is not exposed in the page DOM', (assert) => {
    const done = assert.async();
    const ctrl = IframeController();

    ioc.register('iframeController', ctrl);
    ctrl.showSelectorMenu();

    window.setTimeout(() => {
        assert.strictEqual(document.querySelector('iframe'), null, 'No iframe in the page DOM');
        assert.strictEqual(
            document.getElementById('adguard-assistant-dialog'),
            null,
            'No dialog element in the page DOM',
        );
        ctrl.removeIframe();
        done();
    }, 500);
});

test('the mobile dialog is not exposed in the page DOM', (assert) => {
    const done = assert.async();
    const ctrl = IframeControllerMobile();

    ctrl.showSelectorMenu();

    window.setTimeout(() => {
        assert.strictEqual(document.querySelector('iframe'), null, 'No iframe in the page DOM');

        const dialogHost = document.querySelector('[data-adguard-assistant-dialog]');
        assert.ok(dialogHost, 'Dialog host is in the page DOM');
        assert.strictEqual(dialogHost.shadowRoot, null, 'Shadow root is closed');

        ctrl.removeIframe();
        assert.strictEqual(
            document.querySelector('[data-adguard-assistant-dialog]'),
            null,
            'Dialog host is removed',
        );
        done();
    }, 500);
});
