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
        var adguardEl = document.getElementById('adguard-assistant-dialog');
        expect(adguardEl).to.not.equal(null);
        expect(adguardEl).to.not.equal(undefined);
    });

    it("Adguard is a child of the body", function() {
        var adguardEl = document.getElementById('adguard-assistant-dialog');
        expect(adguardEl).to.not.equal(null);
        expect(adguardEl).to.not.equal(undefined);
        expect(adguardEl.parentElement).to.equal(document.documentElement);
    });
});
