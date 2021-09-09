/* global QUnit */
import { adguardAssistant } from '../src/index'; // import assistant into tests

const { test, module } = QUnit;

module('Assistant main');

test('Should be true', (assert) => {
    const assistant = adguardAssistant();
    assistant.start(null, (...args) => { console.log(args); });
    assert.ok(true, 'assistant didn\'t cause errors on the page');
});
