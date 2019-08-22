/* global QUnit */
const { test, module } = QUnit;

module('Assistant main');

test('Adguard is in the DOM', (assert) => {
    assert.timeout(500);
    const adguardEl = document.getElementsByClassName('adguard-alert')[0];
    assert.ok(adguardEl);
});

// it('Adguard is a child of the body', () => {
//     var adguardEl = document.getElementsByClassName('adguard-alert')[0];
//     expect(adguardEl).to.not.equal(null);
//     expect(adguardEl).to.not.equal(undefined);
//     expect(adguardEl.parentElement).to.equal(document.documentElement);
// });


// test('Adguard iframe', () => {
//     before(() => {
//         var button = document.getElementsByClassName('adguard-alert')[0];
//         expect(button).to.not.equal(null);
//         expect(button).to.not.equal(undefined);
//         triggerEvent(button, 'mousedown');
//         triggerEvent(button, 'mouseup');
//     });

//     test('Click on button - opening adguard iframe', (assert) => {
//         var adguardEl = document.getElementById('adguard-assistant-dialog');
//         expect(adguardEl).to.not.equal(null);
//         expect(adguardEl).to.not.equal(undefined);
//         expect(adguardEl.parentElement).to.equal(document.documentElement);
//     });
// });


// test('Adguard touches events', () => {
//     before(() => {
//         var button = document.getElementsByClassName('adguard-alert')[0];
//         expect(button).to.not.equal(null);
//         expect(button).to.not.equal(undefined);
//         triggerEvent(button, 'touchstart');
//         triggerEvent(document, 'touchend');
//     });

//     test('Touch on button - opening adguard iframe', (done) => {
//         var button = document.getElementsByClassName('adguard-alert')[0];
//         setTimeout(function() {
//             var adguardEl = document.getElementById('adguard-assistant-dialog');
//             expect(adguardEl).to.not.equal(null);
//             expect(adguardEl).to.not.equal(undefined);
//             expect(adguardEl.parentElement).to.equal(document.documentElement);
//             done();
//         }, 150);
//     });
// });
