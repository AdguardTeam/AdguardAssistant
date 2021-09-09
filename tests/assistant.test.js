/* global QUnit */
import '../src/index'; // import assistant into tests

const { test, module } = QUnit;

module('Assistant main');

test('Should be true', (assert) => {
    assert.ok(true, 'assistant didn\'t cause errors on the page');
});
