describe("#DOM Tests", function() {
    beforeEach(function(done) {
        this.timeout(300); // environment setup
        setTimeout(done, 250);
    });

    it("Adguard is in the DOM", function() {
        var adguardEl = document.getElementsByClassName('adguard-alert')[0];
        expect(adguardEl).to.not.equal(null);
        expect(adguardEl).to.not.equal(undefined);
    });

    it("Adguard is a child of the body", function() {
        var adguardEl = document.getElementsByClassName('adguard-alert')[0];
        expect(adguardEl.parentElement).to.equal(document.body);
    });

});

describe("Adguard iframe", function() {

    var ev = document.createEvent("MouseEvent");
    var clickElement = function(el, event) {
        ev.initMouseEvent(
            event,
            true /* bubble */ , true /* cancelable */ ,
            window, null,
            0, 0, 0, 0, /* coordinates */
            false, false, false, false, /* modifier keys */
            0 /*left*/ , null
        );
        el.dispatchEvent(ev);
    };

    before(function() {
        var button = document.getElementsByClassName('adguard-alert')[0];
        clickElement(button, 'mousedown');
        clickElement(button, 'mouseup');
    });

    it("Click on button - opening adguard iframe", function() {
        var adguardEl = document.getElementById('adguard-assistant-dialog');
        expect(adguardEl.parentElement).to.equal(document.body);
    });

});
