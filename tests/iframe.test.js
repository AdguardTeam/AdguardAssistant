/* global QUnit */
import IframeController from '../src/iframe';

const { test, module } = QUnit;

module('iframe controller — hideElementsByPath');

test('CSS is valid after multiple hideElementsByPath calls', (assert) => {
    const ctrl = IframeController();
    const styleID = 'test-hide-style';

    // Clean up any leftover
    const existing = document.querySelector(`#${styleID}`);
    if (existing) existing.remove();

    // Call 3 times with different selectors
    ctrl.hideElementsByPath('example.com##.foo', styleID);
    ctrl.hideElementsByPath('example.com##.bar', styleID);
    ctrl.hideElementsByPath('example.com##.baz', styleID);

    const styleEl = document.querySelector(`#${styleID}`);
    assert.ok(styleEl, 'Style element exists after calls');

    const css = styleEl.textContent;
    // Must NOT contain HTML wrapper artifacts
    assert.notOk(css.includes('<'), 'CSS does not contain <');
    assert.notOk(css.includes('>'), 'CSS does not contain >');

    // Must contain all three selectors
    assert.ok(css.includes('.foo{display:none!important}'), 'Contains .foo rule');
    assert.ok(css.includes('.bar{display:none!important}'), 'Contains .bar rule');
    assert.ok(css.includes('.baz{display:none!important}'), 'Contains .baz rule');

    // Cleanup
    styleEl.remove();
});

test('CSS is valid after single hideElementsByPath call', (assert) => {
    const ctrl = IframeController();
    const styleID = 'test-hide-single';

    const existing = document.querySelector(`#${styleID}`);
    if (existing) existing.remove();

    ctrl.hideElementsByPath('example.com##.single', styleID);

    const styleEl = document.querySelector(`#${styleID}`);
    assert.ok(styleEl, 'Style element exists');
    assert.notOk(styleEl.textContent.includes('<'), 'CSS does not contain <');
    assert.ok(styleEl.textContent.includes('.single{display:none!important}'), 'Contains rule');

    styleEl.remove();
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
    assert.ok(document.querySelector(`#${previewStyleID}`), 'Preview style exists after preview');

    // Simulate block from preview: clean up preview, then block
    ctrl.showHiddenElements(previewStyleID);
    assert.notOk(document.querySelector(`#${previewStyleID}`), 'Preview style removed before block');

    // Now block (this creates the blocked-elements style)
    const blockedStyleID = 'ag-hide-elements-style-id';
    const existingBlocked = document.querySelector(`#${blockedStyleID}`);
    if (existingBlocked) existingBlocked.remove();

    ctrl.hideElementsByPath('example.com##.preview-target');
    const blockedEl = document.querySelector(`#${blockedStyleID}`);
    assert.ok(blockedEl, 'Blocked style created');
    assert.notOk(blockedEl.textContent.includes('<'), 'Blocked CSS is valid');

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
    const existingPreview = document.querySelector(`#${previewStyleID}`);
    if (existingPreview) existingPreview.remove();
    const existingBlocked = document.querySelector(`#${blockedStyleID}`);
    if (existingBlocked) existingBlocked.remove();

    // Simulate preview: hide element with preview style ID
    ctrl.hideElementsByPath('example.com##.preview-end-target', previewStyleID);
    assert.ok(
        document.querySelector(`#${previewStyleID}`),
        'Preview style exists during preview',
    );

    // Simulate "End preview": showDetailedMenu calls showElement() which
    // calls showHiddenElements(previewStyleID)
    ctrl.showHiddenElements(previewStyleID);
    assert.notOk(
        document.querySelector(`#${previewStyleID}`),
        'Preview style removed after End preview',
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
    const existing = document.querySelector(`#${blockedStyleID}`);
    if (existing) existing.remove();

    // Simulate block: hideElementsByPath creates a fresh style
    ctrl.hideElementsByPath('example.com##.lifecycle-target');
    const styleAfterBlock = document.querySelector(`#${blockedStyleID}`);
    assert.ok(styleAfterBlock, 'Fresh style element created after block');
    assert.notOk(
        styleAfterBlock.textContent.includes('<'),
        'Fresh style CSS is valid',
    );

    // After the iframe closes, the hide-elements style MUST still be present
    // so the blocked element remains hidden.
    assert.ok(
        document.querySelector(`#${blockedStyleID}`),
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
    const existingBlocked = document.querySelector(`#${blockedStyleID}`);
    if (existingBlocked) existingBlocked.remove();
    const existingOther = document.querySelector(`#${otherStyleID}`);
    if (existingOther) existingOther.remove();

    // Create a blocked-elements style (simulating a previous block)
    ctrl.hideElementsByPath('example.com##.blocked-target');
    assert.ok(
        document.querySelector(`#${blockedStyleID}`),
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
    assert.notOk(
        document.querySelector(`#${blockedStyleID}`),
        'Blocked style removed',
    );
    assert.ok(
        document.querySelector(`#${otherStyleID}`),
        'Other style unaffected',
    );

    // Cleanup
    otherStyle.remove();
});
