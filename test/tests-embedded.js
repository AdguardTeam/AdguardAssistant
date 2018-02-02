describe("#DOM Tests", function() {
    beforeEach(function(done) {
        this.timeout(1000);
        setTimeout(done, 500);
    });

    before(function() {
        adguardAssistant.start(function(rules) {
            console.log(rules);
        });
    });

    it("Adguard is in the DOM", function() {
        var adguardEl = document.querySelector('.sg_border');
        expect(adguardEl).to.not.equal(null);
        expect(adguardEl).to.not.equal(undefined);
    });
});
