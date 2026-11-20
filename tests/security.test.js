/* global QUnit */
import adguardRulesConstructor from '../src/adguard-rules-constructor';
import protectedApi from '../src/protectedApi';
import { isTrustedEvent } from '../src/utils/common-utils';
import IframeController from '../src/iframe';
import IframeControllerMobile from '../src/iframe.mobile';
import button from '../src/button';
import SliderMenuController from '../src/controllers/sliderMenuController';
import SliderMenuControllerMobile from '../src/controllers/sliderMenuControllerMobile';
import BlockPreviewController from '../src/controllers/blockPreviewController';
import { HTML } from '../src/inline-resources';
import selector from '../src/adguard-selector';
import gm from '../src/gm';
import settings from '../src/settings';
import { getAdoptedStyleSheet, removeAdoptedStyleSheet } from '../src/utils/style-sheet';
import ioc from '../src/ioc';
import { adguardAssistantMini as miniAssistant } from '../src/main';
import { adguardAssistantMini as embeddedMiniAssistant } from '../src/embedded';

const { test, module } = QUnit;

/**
 * Removes the style sheet and the element the assistant wrote for the id.
 *
 * @param {string} id Style sheet id.
 */
const removeSheet = (id) => {
    removeAdoptedStyleSheet(id);

    const element = document.getElementById(id);

    if (element) {
        element.remove();
    }
};

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
        'example.com##div[data-code="{x}"]',
        'example.com##a\\{b',
        'example.com##div[data-a="/*"]',
        'example.com#?#div:has-text(ad)',
        'example.com#?#div[data-x="{x}"]:has-text(y)',
        '||example.com/banner.png',
        '||example.com/banner.png$domain=example.com',
        'https://example.com/banner.png$domain=example.com',
        '//cdn.example.com/banner.png$domain=example.com',
        '||example.com^$important',
        '||example.com^$removeparam=utm_source',
        '||cdn.example.com/photo.jpg?w={width}',
    ];

    rules.forEach((rule) => {
        assert.ok(adguardRulesConstructor.isValidRuleText(rule), `Accepts ${rule}`);
    });
});

test('accepts basic URL patterns that the user types by hand', (assert) => {
    const rules = [
        'ads.example.com^',
        '/banner/ad.png',
        'example.com',
        '[::1]##div',
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
        'example.com##+js(set-constant, foo, true)',
        '##+js(nowoif)',
        'example.com##^script:has-text(ad)',
        'example.com##body:style(color: red)',
        'example.com#$?#div { color: red }',
        'example.com##x{}body{background:url(//evil.example/x)}',
        'example.com##x/*"*/{}body{background:red}',
        // An unquoted url token is not a comment, so the parser decides.
        'example.com##url(/*){}body{background:red}',
        // One clean rule, but the text ends inside an open string.
        'example.com##x{display:none!important}a"',
        // A single parsed rule that also declares a background.
        'example.com##body{background:red;{display:none!important}',
        // Unparsed extended CSS that carries rule syntax.
        'example.com#?#div:has-text(x){}html:has-text(y){background:red}',
        'example.com#?#div:has-text(x) { color: red }',
        'example.com##a\\\\{b',
        'example.com#@$?#div { color: red }',
        'example.com$@$script[tag-content="x"]',
        '@@||example.com^',
        'example.com##.banner\n#%#window.__pwned=1;//',
        'example.com##.banner\r\n@@||example.com^',
        'example.com$$script[tag-content="pwned"]',
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

    assert.strictEqual(
        buildRule('https://cdn.example.com/photo.jpg?w={width}'),
        'https://cdn.example.com/photo.jpg?w={width}$domain=page.example',
        'Keeps a brace in the query, the attribute selector escapes it',
    );
});

test('does not build a URL rule from page-controlled rule syntax', (assert) => {
    const values = [
        '#%#window.__pwned=1;//',
        'example.com#%#window.__pwned=1;//',
        'https://example.com/a$b.png',
        'https://example.com/a.png$domain=evil.example',
        'https://cdn.example/*',
        'https://cdn.example/x?a=^b',
        'data:image/png;base64,AAAA',
        '/relative/a.png',
        'ftp://example.com/a.png',
    ];

    values.forEach((value) => {
        const rule = buildRule(value);

        assert.notOk(rule.includes('#%#'), `No scriptlet mark for ${value}`);
        assert.notOk(rule.includes('$domain=evil.example'), `No injected scope for ${value}`);
        assert.ok(rule.includes('##'), `The picker falls back to a cosmetic rule for ${value}`);
        assert.ok(adguardRulesConstructor.isValidRuleText(rule), `Fallback rule is valid for ${value}`);
    });
});

test('falls back to a cosmetic rule when the address cannot pass the gate', (assert) => {
    // The parsed address is usable, but the built rule holds a sequence that
    // the gate rejects, so the picker must not show a dead URL rule.
    const rule = buildRule('https://example.com/x:style(y)');

    assert.ok(rule.includes('##'), 'Falls back to a cosmetic rule');
    assert.ok(adguardRulesConstructor.isValidRuleText(rule), 'The shown rule is valid');
});

test('ignores unsafe URL values of the selected element', (assert) => {
    const element = document.createElement('img');
    element.setAttribute('src', '#%#window.__pwned=1;//');

    assert.strictEqual(adguardRulesConstructor.getUrlBlockAttribute(element), null, 'Unsafe src is ignored');
    assert.notOk(adguardRulesConstructor.haveUrlBlockParameter(element), 'No URL option for an unsafe src');

    // The first attribute with a value decides the address, so a relative or
    // unsafe `src` must not fall through to a page-chosen `data` value.
    element.setAttribute('data', 'https://example.com/a.png');

    assert.strictEqual(
        adguardRulesConstructor.getUrlBlockAttribute(element),
        null,
        'A page-chosen data value is not used while src exists',
    );
    assert.notOk(adguardRulesConstructor.haveUrlBlockParameter(element), 'No URL option for an unsafe src');
});

test('uses the data attribute when src is absent', (assert) => {
    const element = document.createElement('object');
    element.setAttribute('data', 'https://example.com/obj.svg');

    assert.strictEqual(
        adguardRulesConstructor.getUrlBlockAttributeName(element),
        'data',
        'data is the address of an object',
    );
    assert.strictEqual(
        adguardRulesConstructor.getUrlBlockAttribute(element),
        'https://example.com/obj.svg',
        'The data value is used',
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

    const host = document.createElement('div');
    const root = protectedApi.attachClosedShadowRoot(host);

    assert.ok(root, 'Shadow root is attached');
    assert.strictEqual(root.mode, 'closed', 'Shadow root is closed');
    assert.strictEqual(host.shadowRoot, null, 'The page cannot read the shadow root');
});

test('the desktop dialog is not exposed in the page DOM', (assert) => {
    const done = assert.async();
    const ctrl = IframeController();
    let dialogShown = false;

    ctrl.onShowMenuItem.attach(() => {
        dialogShown = true;
    });

    ioc.register('iframeController', ctrl);
    ctrl.showSelectorMenu();

    window.setTimeout(() => {
        assert.ok(dialogShown, 'The dialog was rendered');
        assert.strictEqual(document.querySelector('iframe'), null, 'No iframe in the page DOM');
        assert.strictEqual(
            document.getElementById('adguard-assistant-dialog'),
            null,
            'No dialog element in the page DOM',
        );
        const openRoots = Array.from(document.querySelectorAll('*'))
            .filter((element) => element.shadowRoot);
        assert.strictEqual(openRoots.length, 0, 'No open shadow root in the page DOM');
        assert.ok(
            getAdoptedStyleSheet('adg-styles-selector'),
            'The picker styles are adopted',
        );
        assert.strictEqual(
            document.getElementById('adg-styles-selector'),
            null,
            'No picker style element in the page DOM',
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

test('page CSS cannot hide the mobile dialog host', (assert) => {
    const done = assert.async();
    const style = document.createElement('style');
    // A transform makes the host the containing block of the fixed dialog.
    style.textContent = 'div:empty { display: none; }'
        + ' div { transform: translateZ(0); visibility: hidden;'
        + ' clip-path: inset(50%); content-visibility: hidden;'
        + ' translate: 10px 20px; scale: 2; rotate: 45deg;'
        + ' offset-path: path("M0,0 L10,10"); backdrop-filter: blur(2px); zoom: 2; }';
    document.head.appendChild(style);

    const ctrl = IframeControllerMobile();
    ctrl.showSelectorMenu();

    window.setTimeout(() => {
        const dialogHost = document.querySelector('[data-adguard-assistant-dialog]');
        assert.ok(dialogHost, 'Dialog host is in the page DOM');
        const hostStyle = window.getComputedStyle(dialogHost);
        assert.strictEqual(hostStyle.display, 'block', 'Page CSS does not hide the host');
        assert.strictEqual(hostStyle.visibility, 'visible', 'Page CSS does not hide the host content');
        assert.strictEqual(hostStyle.transform, 'none', 'Page CSS does not move the host');
        assert.strictEqual(hostStyle.clipPath, 'none', 'Page CSS does not clip the host');
        assert.strictEqual(
            hostStyle.contentVisibility,
            'visible',
            'Page CSS does not skip the host',
        );
        assert.strictEqual(hostStyle.translate, 'none', 'Page CSS does not translate the host');
        assert.strictEqual(hostStyle.scale, 'none', 'Page CSS does not scale the host');
        assert.strictEqual(hostStyle.rotate, 'none', 'Page CSS does not rotate the host');
        assert.strictEqual(hostStyle.offsetPath, 'none', 'Page CSS does not offset the host');
        assert.strictEqual(
            hostStyle.backdropFilter,
            'none',
            'Page CSS does not filter the host backdrop',
        );
        assert.strictEqual(hostStyle.zoom, '1', 'Page CSS does not zoom the host');

        ctrl.removeIframe();
        style.remove();
        done();
    }, 500);
});

test('the mobile selector styles are adopted without a page element', (assert) => {
    const done = assert.async();
    removeSheet('adg-styles-selector');
    settings.setAdguardSettings({ nonce: 'test-mobile-nonce' });

    const ctrl = IframeControllerMobile();
    ctrl.showSelectorMenu();

    window.setTimeout(() => {
        const sheet = getAdoptedStyleSheet('adg-styles-selector');

        assert.ok(sheet, 'The selector styles are adopted');
        assert.ok(sheet && sheet.cssRules.length > 0, 'The selector styles have rules');
        assert.strictEqual(
            document.getElementById('adg-styles-selector'),
            null,
            'No selector style element in the page DOM',
        );
        assert.deepEqual(
            Array.from(document.querySelectorAll('[nonce]')).map((element) => element.tagName),
            [],
            'No page element carries the nonce',
        );

        ctrl.removeIframe();
        removeAdoptedStyleSheet('adg-styles-selector');
        settings.setAdguardSettings(null);
        done();
    }, 500);
});

test('the picker falls back to a nonced style element without constructed sheets', (assert) => {
    const done = assert.async();
    const originalConstructor = window.CSSStyleSheet;

    removeSheet('adg-styles-selector');
    settings.setAdguardSettings({ nonce: 'test-fallback-nonce' });

    // A browser without constructed style sheets, the branch older Safari
    // takes.
    window.CSSStyleSheet = undefined;

    const ctrl = IframeControllerMobile();
    ctrl.showSelectorMenu();

    window.setTimeout(() => {
        const element = document.getElementById('adg-styles-selector');
        const ruleCount = element && element.sheet ? element.sheet.cssRules.length : 0;

        assert.ok(element, 'A picker style element is written');
        assert.strictEqual(
            element ? element.getAttribute('nonce') : null,
            'test-fallback-nonce',
            'The element carries the nonce',
        );
        assert.strictEqual(ruleCount > 0, true, 'The picker styles are in the element sheet');
        assert.strictEqual(
            getAdoptedStyleSheet('adg-styles-selector'),
            null,
            'No picker sheet is adopted',
        );

        ctrl.removeIframe();
        window.CSSStyleSheet = originalConstructor;
        settings.setAdguardSettings(null);
        removeSheet('adg-styles-selector');
        done();
    }, 500);
});

test('the assistant button is not exposed in the page DOM', (assert) => {
    const done = assert.async();
    const ctrl = IframeController();
    ioc.register('iframeController', ctrl);

    // The button needs the loaded settings. The test page has no userscript
    // storage, so the load resolves to the default settings.
    const originalGetValue = window.GM_getValue;
    window.GM_getValue = () => null;

    settings.loadSettings(() => {
        button.show();

        const host = document.querySelector('[data-adguard-assistant-button]');

        assert.ok(host, 'Button host is in the page DOM');
        assert.strictEqual(host.shadowRoot, null, 'Shadow root is closed');
        assert.strictEqual(document.querySelector('.adguard-alert'), null, 'No button in the page DOM');

        button.remove();
        window.GM_getValue = originalGetValue;
        done();
    });
});

module('rule save funnel');

test('blockElement saves only a valid rule', (assert) => {
    const ctrl = IframeController();
    const originalAddRule = gm.ADG_addRule;
    let saved = null;

    // The userscript build takes the gm branch, so the second argument of
    // blockElement is not called in the tests. Stub the gm method instead.
    gm.ADG_addRule = (rule) => {
        saved = rule;
    };

    try {
        ctrl.blockElement('#%#window.__pwned=1;//$domain=example.com', () => {});
        assert.strictEqual(saved, null, 'No rule is saved');

        ctrl.blockElement('example.com##.banner', () => {});
        assert.strictEqual(saved, 'example.com##.banner', 'A valid rule reaches the extension');
    } finally {
        gm.ADG_addRule = originalAddRule;
    }
});

/**
 * Creates an iframe with a dialog view, so a controller handler can receive a
 * click from the test.
 *
 * @param {string} view HTML of the dialog view.
 * @returns {Promise<HTMLIFrameElement>} Loaded iframe with the view.
 */
const createDialogFrame = (view) => new Promise((resolve) => {
    const frame = document.createElement('iframe');
    // The selector replaces visible iframes with placeholders, so the dialog
    // frame must carry the ignored class, as it does in the assistant.
    frame.className = selector.ignoreClassName();

    // The load listener must be attached before the iframe is inserted,
    // otherwise the event for the initial document is missed.
    frame.addEventListener('load', () => {
        frame.contentDocument.body.appendChild(protectedApi.createElement(view));
        resolve(frame);
    });

    document.body.appendChild(frame);
});

/**
 * Builds an iframe controller stub that records a saved rule.
 *
 * @param {Object} saved Sink for the saved rule.
 * @returns {Object} Iframe controller stub.
 */
const createIframeStub = (saved) => ({
    blockElement(rule) {
        // eslint-disable-next-line no-param-reassign
        saved.rule = rule;
    },
    showBlockPreview(element, rule) {
        // eslint-disable-next-line no-param-reassign
        saved.preview = rule;
    },
    hideElementsByPath() {},
    resizeIframe() {},
    resizeSliderMenuToAdvanced() {},
    resizeSliderMenuToNormal() {},
    showSelectorMenu() {},
    removeIframe() {},
});

/**
 * Creates a page element for the dialog.
 *
 * @returns {Element} Element in the test fixture.
 */
const createSelectedElement = () => {
    const element = document.createElement('div');
    element.className = 'banner';
    document.getElementById('qunit-fixture').appendChild(element);

    return element;
};

/*
 * A QUnit test cannot produce a trusted click: `Event.isTrusted` is set by the
 * browser and cannot be changed from script, and `element.click()` or
 * `dispatchEvent()` always produce an untrusted event. These tests therefore
 * cover the rejection path. A test of the trusted path needs a real pointer
 * action from Puppeteer (`page.mouse.click`), which the runner does not drive
 * yet, so it stays a separate task.
 */
module('untrusted clicks');

test('an untrusted click does not save a rule in the slider menu', (assert) => {
    const done = assert.async();

    createDialogFrame(HTML.slider_menu)
        .then((frame) => {
            const element = createSelectedElement();
            const saved = { rule: null };
            const ctrl = SliderMenuController(() => {}, createIframeStub(saved));

            selector.init(() => {});
            ctrl.init(frame, { element });
            frame.contentDocument.getElementById('adg-accept').click();

            assert.strictEqual(saved.rule, null, 'No rule is saved from an untrusted click');

            selector.close();
            element.remove();
            frame.remove();
        })
        .catch((e) => {
            assert.ok(false, String(e && e.stack));
        })
        .then(() => {
            done();
        });
});

test('an untrusted click does not preview a rule in the slider menu', (assert) => {
    const done = assert.async();

    createDialogFrame(HTML.slider_menu)
        .then((frame) => {
            const element = createSelectedElement();
            const saved = { rule: null, preview: null };
            const ctrl = SliderMenuController(() => {}, createIframeStub(saved));

            selector.init(() => {});
            ctrl.init(frame, { element });
            // On the non-isolated fallback the page can write the rule text,
            // and the preview writes it into a nonced stylesheet.
            const ruleInput = frame.contentDocument.getElementById('filter-rule');
            ruleInput.value = 'example.com##x{}body{background:url(//evil.example/x)}';
            frame.contentDocument.getElementById('adg-preview').click();

            assert.strictEqual(saved.preview, null, 'No preview from an untrusted click');

            selector.close();
            element.remove();
            frame.remove();
        })
        .catch((e) => {
            assert.ok(false, String(e && e.stack));
        })
        .then(() => {
            done();
        });
});

test('an untrusted click does not save a rule in the preview', (assert) => {
    const done = assert.async();

    createDialogFrame(HTML.preview)
        .then((frame) => {
            const element = createSelectedElement();
            const saved = { rule: null };
            const ctrl = BlockPreviewController(() => {}, createIframeStub(saved));

            selector.init(() => {});
            ctrl.init(frame, { element, path: 'example.com##.banner', options: {} });
            frame.contentDocument.getElementById('block-element').click();

            assert.strictEqual(saved.rule, null, 'No rule is saved from an untrusted click');

            selector.close();
            element.remove();
            frame.remove();
        })
        .catch((e) => {
            assert.ok(false, String(e && e.stack));
        })
        .then(() => {
            done();
        });
});

test('an untrusted click does not save a rule in the mobile menu', (assert) => {
    const done = assert.async();

    createDialogFrame(HTML.mobile_menu)
        .then((frame) => {
            const element = createSelectedElement();
            const saved = { rule: null };
            const ctrl = SliderMenuControllerMobile((rule) => {
                saved.rule = rule;
            }, createIframeStub(saved));

            selector.init(() => {});
            ctrl.init(frame, { element });
            frame.contentDocument.querySelector('.adg-accept').click();

            assert.strictEqual(saved.rule, null, 'No rule is saved from an untrusted click');

            selector.close();
            element.remove();
            frame.remove();
        })
        .catch((e) => {
            assert.ok(false, String(e && e.stack));
        })
        .then(() => {
            done();
        });
});

module('mini entry settings');

test('a settings object without a nonce yields an empty nonce', (assert) => {
    settings.setAdguardSettings({});
    assert.strictEqual(settings.getStyleNonce(), '', 'No nonce value');

    settings.setAdguardSettings(null);
    assert.strictEqual(settings.getStyleNonce(), '', 'No settings');
});

test('the mini entries pass the embedding settings to the assistant', (assert) => {
    const originalSettings = window.AdguardSettings;
    window.AdguardSettings = { nonce: 'test-mini-nonce' };

    settings.setAdguardSettings(null);
    miniAssistant();
    assert.strictEqual(
        settings.getStyleNonce(),
        'test-mini-nonce',
        'The mini entry sets the settings',
    );

    settings.setAdguardSettings(null);
    embeddedMiniAssistant();
    assert.strictEqual(
        settings.getStyleNonce(),
        'test-mini-nonce',
        'The embedded mini entry sets the settings',
    );

    settings.setAdguardSettings(null);
    window.AdguardSettings = originalSettings;
});
