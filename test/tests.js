function triggerEvent(node, eventType) {
    var clickEvent = document.createEvent('MouseEvents');
    clickEvent.initEvent(eventType, true, true);
    node.dispatchEvent(clickEvent);
}

describe("#DOM Tests", function() {
    beforeEach(function(done) {
        this.timeout(1000);
        setTimeout(done, 500);
    });

    it("Adguard is in the DOM", function() {
        var adguardEl = document.getElementsByClassName('adguard-alert')[0];
        expect(adguardEl).to.not.equal(null);
        expect(adguardEl).to.not.equal(undefined);
    });

    it("Adguard is a child of the body", function() {
        var adguardEl = document.getElementsByClassName('adguard-alert')[0];
        expect(adguardEl).to.not.equal(null);
        expect(adguardEl).to.not.equal(undefined);
        expect(adguardEl.parentElement).to.equal(document.documentElement);
    });
});

describe("Adguard iframe", function() {
    before(function() {
        var button = document.getElementsByClassName('adguard-alert')[0];
        expect(button).to.not.equal(null);
        expect(button).to.not.equal(undefined);
        triggerEvent(button, 'mousedown');
        triggerEvent(button, 'mouseup');
    });

    it("Click on button - opening adguard iframe", function() {
        var adguardEl = document.getElementById('adguard-assistant-dialog');
        expect(adguardEl).to.not.equal(null);
        expect(adguardEl).to.not.equal(undefined);
        expect(adguardEl.parentElement).to.equal(document.documentElement);
    });
});


describe("Adguard touches events", function() {
    before(function() {
        var button = document.getElementsByClassName('adguard-alert')[0];
        expect(button).to.not.equal(null);
        expect(button).to.not.equal(undefined);
        triggerEvent(button, 'touchstart');
        triggerEvent(document, 'touchend');
    });

    it("Touch on button - opening adguard iframe", function(done) {
        var button = document.getElementsByClassName('adguard-alert')[0];
        setTimeout(function() {
            var adguardEl = document.getElementById('adguard-assistant-dialog');
            expect(adguardEl).to.not.equal(null);
            expect(adguardEl).to.not.equal(undefined);
            expect(adguardEl.parentElement).to.equal(document.documentElement);
            done();
        }, 150);
    });
});
