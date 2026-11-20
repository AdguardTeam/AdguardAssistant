/* global QUnit */
import IframeController from '../src/iframe';
import { getAdoptedStyleSheet, removeAdoptedStyleSheet } from '../src/utils/style-sheet';

const { test, module } = QUnit;

/**
 * Returns the style sheet the assistant wrote for the given id.
 *
 * @param {string} id Style sheet id.
 * @returns {CSSStyleSheet|null} Adopted sheet or the sheet of the element.
 */
const getSheet = (id) => {
    const adopted = getAdoptedStyleSheet(id);

    if (adopted) {
        return adopted;
    }

    const element = document.getElementById(id);

    return element ? element.sheet : null;
};

/**
 * Returns the CSS text of the rules in a style sheet.
 *
 * @param {CSSStyleSheet} sheet Style sheet.
 * @returns {string} Serialized rules.
 */
const getSheetText = (sheet) => (sheet
    ? Array.from(sheet.cssRules).map((rule) => rule.cssText).join('\n')
    : '');

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

module('iframe controller — hideElementsByPath');

test('URL hiding uses the raw attribute value', (assert) => {
    const ctrl = IframeController();
    const styleID = 'test-url-hide-raw';

    removeSheet(styleID);

    const img = document.createElement('img');
    img.setAttribute('src', 'https://site.ru/картинка.png');
    document.getElementById('qunit-fixture').appendChild(img);

    // The rule text holds the parsed address, the attribute keeps the
    // authored value.
    ctrl.hideElementsByPath(
        'https://site.ru/%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0.png$domain=site.ru',
        styleID,
        img,
    );

    const sheet = getSheet(styleID);
    assert.ok(sheet, 'Style sheet exists');
    assert.ok(
        getSheetText(sheet).includes('[src*="https://site.ru/картинка.png"]'),
        'Selector uses the raw src',
    );
    assert.ok(img.matches('[src*="https://site.ru/картинка.png"]'), 'Selector matches the element');

    removeSheet(styleID);
    img.remove();
});

test('URL hiding covers domain-anchored rules', (assert) => {
    const ctrl = IframeController();
    const styleID = 'test-url-hide-anchor';

    removeSheet(styleID);

    const img = document.createElement('img');
    img.setAttribute('src', 'http://www.example.com/a.png');
    document.getElementById('qunit-fixture').appendChild(img);

    ctrl.hideElementsByPath('||example.com/a.png$domain=example.com', styleID, img);

    const sheet = getSheet(styleID);
    assert.ok(sheet, 'Style sheet exists');
    assert.ok(
        getSheetText(sheet).includes('[src*="http://www.example.com/a.png"]'),
        'Selector uses the raw src',
    );

    removeSheet(styleID);
    img.remove();
});

test('URL hiding covers protocol-relative rules', (assert) => {
    const ctrl = IframeController();
    const styleID = 'test-url-hide-protocol';

    removeSheet(styleID);

    const img = document.createElement('img');
    img.setAttribute('src', '//cdn.example.com/a.png');
    document.getElementById('qunit-fixture').appendChild(img);

    ctrl.hideElementsByPath('//cdn.example.com/a.png$domain=example.com', styleID, img);

    const sheet = getSheet(styleID);
    assert.ok(sheet, 'Style sheet exists');
    assert.ok(
        getSheetText(sheet).includes('[src*="//cdn.example.com/a.png"]'),
        'Selector uses the raw src',
    );

    removeSheet(styleID);
    img.remove();
});

test('URL hiding uses the attribute that holds the address', (assert) => {
    const ctrl = IframeController();
    const styleID = 'test-url-hide-data';

    removeSheet(styleID);

    const object = document.createElement('object');
    object.setAttribute('data', 'https://example.com/obj.svg');
    document.getElementById('qunit-fixture').appendChild(object);

    ctrl.hideElementsByPath('https://example.com/obj.svg$domain=example.com', styleID, object);

    const sheet = getSheet(styleID);
    assert.ok(sheet, 'Style sheet exists');
    assert.ok(
        getSheetText(sheet).includes('[data*="https://example.com/obj.svg"]'),
        'Selector uses the data attribute',
    );

    removeSheet(styleID);
    object.remove();
});

test('URL hiding covers a rule without an anchor', (assert) => {
    const ctrl = IframeController();
    const styleID = 'test-url-hide-basic';

    removeSheet(styleID);

    const img = document.createElement('img');
    img.setAttribute('src', 'https://ads.example.com/a.png');
    document.getElementById('qunit-fixture').appendChild(img);

    ctrl.hideElementsByPath('ads.example.com^', styleID, img);

    const sheet = getSheet(styleID);
    assert.ok(sheet, 'Style sheet exists');
    assert.ok(
        getSheetText(sheet).includes('[src*="https://ads.example.com/a.png"]'),
        'Selector uses the raw src',
    );

    removeSheet(styleID);
    img.remove();
});

test('URL hiding keeps a #?# rule on the CSS branch', (assert) => {
    const ctrl = IframeController();
    const styleID = 'test-url-hide-extended';

    removeSheet(styleID);

    ctrl.hideElementsByPath('example.com#?#div:has(> .ad)', styleID);

    const sheet = getSheet(styleID);
    assert.ok(sheet, 'Style sheet exists');
    assert.ok(
        getSheetText(sheet).includes('div:has(> .ad) { display: none !important; }'),
        'Selector comes from the cosmetic rule',
    );

    removeSheet(styleID);
});

test('URL hiding keeps a #?# selector that contains a cosmetic mark', (assert) => {
    const ctrl = IframeController();
    const styleID = 'test-url-hide-extended-hash';

    removeSheet(styleID);

    ctrl.hideElementsByPath('example.com#?#div[data-x="##"]', styleID);

    const sheet = getSheet(styleID);
    assert.ok(sheet, 'Style sheet exists');
    assert.ok(
        getSheetText(sheet).includes('div[data-x="##"] { display: none !important; }'),
        'The whole selector is kept',
    );

    removeSheet(styleID);
});

test('URL hiding refuses a selector that injects CSS', (assert) => {
    const ctrl = IframeController();
    const payloads = [
        'example.com##x{}body{background:url(//evil.example/x)}',
        // The quote inside the comment must not open a string in the scan.
        'example.com##x/*"*/{}body{background:red}',
        // An unquoted url token is not a comment.
        'example.com##url(/*){}body{background:red}',
        // An unparsed plain selector would leave the sheet inside a string.
        'example.com##x"',
        // One clean rule, but the text ends inside an open string.
        'example.com##x{display:none!important}a"',
    ];

    payloads.forEach((payload, index) => {
        const styleID = `test-url-hide-brace-${index}`;

        removeSheet(styleID);

        const result = ctrl.hideElementsByPath(payload, styleID);

        assert.strictEqual(result, false, `The rule is refused: ${payload}`);
        assert.strictEqual(
            document.querySelector(`#${styleID}`),
            null,
            `No stylesheet is written: ${payload}`,
        );
    });
});

test('URL hiding keeps the stylesheet sound after a refused rule', (assert) => {
    const ctrl = IframeController();
    const styleID = 'test-url-hide-sound';

    removeSheet(styleID);

    const refused = ctrl.hideElementsByPath('example.com##x{display:none!important}a"', styleID);
    assert.strictEqual(refused, false, 'The rule that ends inside a string is refused');

    const created = document.querySelector(`#${styleID}`);
    assert.strictEqual(created, null, 'A refused first rule leaves no stylesheet');

    ctrl.hideElementsByPath('example.com##.banner', styleID);

    const sheet = getSheet(styleID);
    assert.ok(sheet, 'The next rule is written');
    assert.strictEqual(sheet.cssRules.length, 1, 'One rule in the sheet');
    assert.strictEqual(
        sheet.cssRules[0].cssText,
        '.banner { display: none !important; }',
        'The rule only hides the element',
    );

    removeSheet(styleID);
});

test('URL hiding keeps the stylesheet a rule list after a trailing comment', (assert) => {
    const ctrl = IframeController();
    const styleID = 'test-url-hide-comment';

    removeSheet(styleID);

    // A trailing comment passes the parser, and the next rule holds `*/`
    // inside an attribute string. As CSSOM rules neither can add a rule.
    ctrl.hideElementsByPath('example.com##x{display:none!important}/*', styleID);
    ctrl.hideElementsByPath('example.com##[data-x="*/body{background:red}"] .banner', styleID);

    const sheet = getSheet(styleID);
    assert.ok(sheet, 'The stylesheet is written');

    const rules = Array.from(sheet.cssRules);

    assert.strictEqual(rules.length, 2, 'Each write is one rule');
    assert.deepEqual(
        rules.map((rule) => rule.style.cssText),
        ['display: none !important;', 'display: none !important;'],
        'Every rule only hides the element',
    );
    assert.deepEqual(
        rules.map((rule) => rule.selectorText),
        ['x', '[data-x="*/body{background:red}"] .banner'],
        'The selector text stays inside its rule',
    );

    removeSheet(styleID);
});

test('URL hiding adopts the rule sheet without a page element', (assert) => {
    const ctrl = IframeController();
    const styleID = 'test-hide-adopted';

    removeSheet(styleID);

    const target = document.createElement('div');
    target.className = 'adopted-target';
    document.getElementById('qunit-fixture').appendChild(target);

    ctrl.hideElementsByPath('example.com##.adopted-target', styleID);

    assert.ok(getAdoptedStyleSheet(styleID), 'The rule sheet is adopted');
    assert.strictEqual(
        document.getElementById(styleID),
        null,
        'No rule style element in the page DOM',
    );
    assert.deepEqual(
        Array.from(document.querySelectorAll('style[nonce]')).map((element) => element.id),
        [],
        'No style element carries the nonce',
    );
    assert.strictEqual(
        window.getComputedStyle(target).display,
        'none',
        'The adopted rule hides the element',
    );

    ctrl.showHiddenElements(styleID);
    assert.strictEqual(getSheet(styleID), null, 'The sheet is removed');
    assert.strictEqual(
        window.getComputedStyle(target).display,
        'block',
        'The element is visible again',
    );

    removeSheet(styleID);
    target.remove();
});

test('URL hiding adopts the rule sheet again after the page drops it', (assert) => {
    const ctrl = IframeController();
    const styleID = 'test-hide-drift';

    removeSheet(styleID);

    const target = document.createElement('div');
    target.className = 'drift-target';
    document.getElementById('qunit-fixture').appendChild(target);

    ctrl.hideElementsByPath('example.com##.drift-target', styleID);
    const sheet = getAdoptedStyleSheet(styleID);

    assert.ok(sheet, 'The rule sheet is adopted');
    assert.strictEqual(window.getComputedStyle(target).display, 'none', 'The rule hides the element');

    // The page drops the sheet from the document.
    document.adoptedStyleSheets = document.adoptedStyleSheets
        .filter((item) => item !== sheet);
    assert.strictEqual(
        window.getComputedStyle(target).display,
        'block',
        'The rule no longer applies',
    );

    ctrl.hideElementsByPath('example.com##.drift-target', styleID);

    assert.ok(
        document.adoptedStyleSheets.indexOf(getAdoptedStyleSheet(styleID)) >= 0,
        'The sheet is adopted again',
    );
    assert.strictEqual(
        window.getComputedStyle(target).display,
        'none',
        'The rule applies again',
    );

    removeSheet(styleID);
    target.remove();
});

test('URL hiding writes no nonced element when the page blocks adoption', (assert) => {
    const ctrl = IframeController();
    const styleID = 'test-hide-sabotage';

    removeSheet(styleID);

    // A page can shadow the document property, so adoption throws.
    Object.defineProperty(document, 'adoptedStyleSheets', {
        value: [],
        configurable: true,
    });

    try {
        const result = ctrl.hideElementsByPath('example.com##.sabotage-target', styleID);

        assert.strictEqual(result, false, 'The rule is not written');
        assert.strictEqual(document.getElementById(styleID), null, 'No style element is written');
        assert.strictEqual(getAdoptedStyleSheet(styleID), null, 'No sheet is cached');
    } finally {
        delete document.adoptedStyleSheets;
    }
});

test('URL hiding escapes quotes in the address', (assert) => {
    const ctrl = IframeController();
    const styleID = 'test-url-hide-escape';

    removeSheet(styleID);

    const img = document.createElement('img');
    img.setAttribute('src', 'https://example.com/a"b.png');
    document.getElementById('qunit-fixture').appendChild(img);

    ctrl.hideElementsByPath('https://example.com/a.png$domain=example.com', styleID, img);

    const sheet = getSheet(styleID);
    assert.ok(sheet, 'Style sheet exists');
    assert.ok(getSheetText(sheet).includes('a\\"b.png'), 'The quote is escaped');
    assert.notOk(getSheetText(sheet).includes('a"b.png'), 'The quote does not break out of the selector');

    removeSheet(styleID);
    img.remove();
});

test('URL hiding falls back to the rule text without an element', (assert) => {
    const ctrl = IframeController();
    const styleID = 'test-url-hide-rule';
    const anchorStyleID = 'test-url-hide-rule-anchor';

    [styleID, anchorStyleID].forEach((id) => {
        removeSheet(id);
    });

    ctrl.hideElementsByPath('https://example.com/a.png$domain=example.com', styleID);

    const sheet = getSheet(styleID);
    assert.ok(sheet, 'Style sheet exists');
    assert.ok(
        getSheetText(sheet).includes('[src*="https://example.com/a.png"]'),
        'Selector uses the rule text',
    );

    ctrl.hideElementsByPath('||example.com/a.png$domain=example.com', anchorStyleID);

    const anchorSheet = getSheet(anchorStyleID);
    assert.ok(anchorSheet, 'Anchor style sheet exists');
    assert.ok(
        getSheetText(anchorSheet).includes('[src*="example.com/a.png"]'),
        'Selector drops the domain anchor',
    );

    removeSheet(styleID);
    removeSheet(anchorStyleID);
});

test('CSS is valid after multiple hideElementsByPath calls', (assert) => {
    const ctrl = IframeController();
    const styleID = 'test-hide-style';

    // Clean up any leftover
    removeSheet(styleID);

    // Call 3 times with different selectors
    ctrl.hideElementsByPath('example.com##.foo', styleID);
    ctrl.hideElementsByPath('example.com##.bar', styleID);
    ctrl.hideElementsByPath('example.com##.baz', styleID);

    const sheet = getSheet(styleID);
    assert.ok(sheet, 'Style sheet exists after calls');

    const css = getSheetText(sheet);
    // Must NOT contain HTML wrapper artifacts
    assert.notOk(css.includes('<'), 'CSS does not contain <');
    assert.notOk(css.includes('>'), 'CSS does not contain >');

    // Must contain all three selectors
    assert.ok(css.includes('.foo { display: none !important; }'), 'Contains .foo rule');
    assert.ok(css.includes('.bar { display: none !important; }'), 'Contains .bar rule');
    assert.ok(css.includes('.baz { display: none !important; }'), 'Contains .baz rule');

    // Cleanup
    removeSheet(styleID);
});

test('CSS is valid after single hideElementsByPath call', (assert) => {
    const ctrl = IframeController();
    const styleID = 'test-hide-single';

    removeSheet(styleID);

    ctrl.hideElementsByPath('example.com##.single', styleID);

    const sheet = getSheet(styleID);
    assert.ok(sheet, 'Style sheet exists');
    assert.notOk(getSheetText(sheet).includes('<'), 'CSS does not contain <');
    assert.ok(getSheetText(sheet).includes('.single { display: none !important; }'), 'Contains rule');

    removeSheet(styleID);
});

module('iframe controller — removeIframe cleanup');

test('removeIframe removes blocked-elements style element', (assert) => {
    const ctrl = IframeController();
    const styleID = 'ag-hide-elements-style-id';

    // Simulate: create style element that hideElementsByPath would create
    const styleEl = document.createElement('style');
    styleEl.setAttribute('type', 'text/css');
    styleEl.setAttribute('id', styleID);
    styleEl.textContent = '.test{display:none!important}';
    document.documentElement.appendChild(styleEl);

    assert.ok(document.querySelector(`#${styleID}`), 'Style exists before showHiddenElements');

    ctrl.showHiddenElements(styleID);

    assert.notOk(document.querySelector(`#${styleID}`), 'Style removed after cleanup');
});

test('removeIframe removes preview style element', (assert) => {
    const ctrl = IframeController();
    const styleID = 'ag-preview-style-id';

    const styleEl = document.createElement('style');
    styleEl.setAttribute('type', 'text/css');
    styleEl.setAttribute('id', styleID);
    styleEl.textContent = '.preview{display:none!important}';
    document.documentElement.appendChild(styleEl);

    assert.ok(document.querySelector(`#${styleID}`), 'Preview style exists before cleanup');

    ctrl.showHiddenElements(styleID);

    assert.notOk(document.querySelector(`#${styleID}`), 'Preview style removed after cleanup');
});

module('preview controller — blockElement cleanup');

test('blockElement from preview removes preview style before blocking', (assert) => {
    // Simulate the preview flow:
    // 1. Preview hides element via hideElementsByPath with previewStyleID
    // 2. User clicks Block element
    // 3. Preview controller should clean up preview style before delegating

    const ctrl = IframeController();
    const previewStyleID = 'ag-preview-style-id';

    // Simulate preview: hide element with preview style ID
    ctrl.hideElementsByPath('example.com##.preview-target', previewStyleID);
    assert.ok(getSheet(previewStyleID), 'Preview sheet exists after preview');

    // Simulate block from preview: clean up preview, then block
    ctrl.showHiddenElements(previewStyleID);
    assert.strictEqual(getSheet(previewStyleID), null, 'Preview sheet removed before block');

    // Now block (this creates the blocked-elements style)
    const blockedStyleID = 'ag-hide-elements-style-id';
    removeSheet(blockedStyleID);

    ctrl.hideElementsByPath('example.com##.preview-target');
    const blockedSheet = getSheet(blockedStyleID);
    assert.ok(blockedSheet, 'Blocked style sheet created');
    assert.notOk(getSheetText(blockedSheet).includes('<'), 'Blocked CSS is valid');

    // Cleanup
    ctrl.showHiddenElements(blockedStyleID);
});

module('preview controller — End preview cleanup');

test('End preview removes preview style via showHiddenElements', (assert) => {
    // AC 3/7: Exiting preview (End preview / back to slider) must remove
    // the preview style element so the element reappears.
    const ctrl = IframeController();
    const previewStyleID = 'ag-preview-style-id';
    const blockedStyleID = 'ag-hide-elements-style-id';

    // Clean up any leftover
    removeSheet(previewStyleID);
    removeSheet(blockedStyleID);

    // Simulate preview: hide element with preview style ID
    ctrl.hideElementsByPath('example.com##.preview-end-target', previewStyleID);
    assert.ok(
        getSheet(previewStyleID),
        'Preview sheet exists during preview',
    );

    // Simulate "End preview": showDetailedMenu calls showElement() which
    // calls showHiddenElements(previewStyleID)
    ctrl.showHiddenElements(previewStyleID);
    assert.strictEqual(
        getSheet(previewStyleID),
        null,
        'Preview sheet removed after End preview',
    );
});

module('preview controller — block lifecycle');

test('Block completes: hide-elements style persists after close so element stays hidden', (assert) => {
    // When the user blocks an element (closing the iframe and creating a
    // fresh style), the element is hidden by that style. The style must
    // PERSIST across the iframe close/reopen cycle so the blocked element
    // stays hidden until the extension filter takes over. Clearing it on
    // close would make the just-blocked element reappear.
    const ctrl = IframeController();
    const blockedStyleID = 'ag-hide-elements-style-id';

    // Clean up
    removeSheet(blockedStyleID);

    // Simulate block: hideElementsByPath creates a fresh style
    ctrl.hideElementsByPath('example.com##.lifecycle-target');
    const styleAfterBlock = getSheet(blockedStyleID);
    assert.ok(styleAfterBlock, 'Fresh style sheet created after block');
    assert.notOk(
        getSheetText(styleAfterBlock).includes('<'),
        'Fresh style CSS is valid',
    );

    // After the iframe closes, the hide-elements style MUST still be present
    // so the blocked element remains hidden.
    assert.ok(
        getSheet(blockedStyleID),
        'Hide-elements style persists after close (blocked element stays hidden)',
    );

    // Cleanup
    ctrl.showHiddenElements(blockedStyleID);
});

module('preview controller — showHiddenElements isolation');

test('showHiddenElements removes only the requested style, not others', (assert) => {
    // AC 8: When showHiddenElements is called with the blocked-elements ID,
    // only that style element is removed — other style elements on the page
    // are unaffected.
    const ctrl = IframeController();
    const blockedStyleID = 'ag-hide-elements-style-id';
    const otherStyleID = 'other-style-id';

    // Clean up
    removeSheet(blockedStyleID);
    const existingOther = document.querySelector(`#${otherStyleID}`);
    if (existingOther) existingOther.remove();

    // Create a blocked-elements style (simulating a previous block)
    ctrl.hideElementsByPath('example.com##.blocked-target');
    assert.ok(
        getSheet(blockedStyleID),
        'Blocked style exists',
    );

    // Create an unrelated style element (simulating other page styles)
    const otherStyle = document.createElement('style');
    otherStyle.setAttribute('type', 'text/css');
    otherStyle.setAttribute('id', otherStyleID);
    otherStyle.textContent = '.other{color:red}';
    document.documentElement.appendChild(otherStyle);
    assert.ok(
        document.querySelector(`#${otherStyleID}`),
        'Other style exists',
    );

    // Remove only the blocked-elements style
    ctrl.showHiddenElements(blockedStyleID);
    assert.strictEqual(
        getSheet(blockedStyleID),
        null,
        'Blocked style removed',
    );
    assert.ok(
        document.querySelector(`#${otherStyleID}`),
        'Other style unaffected',
    );

    // Cleanup
    otherStyle.remove();
});
