describe("#DOM Tests", function() {
    beforeEach(function(done) {
        this.timeout(3000); // A very long environment setup.
        setTimeout(done, 2500);
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
