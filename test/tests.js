describe("DOM Tests", function () {

    var adguardEl = document.getElementsByClassName('adguard-alert')[0];
    
    it("Adguard is in the DOM", function () {
        expect(adguardEl).to.not.equal(null);
    });

    it("Adguard is a child of the body", function () {
        expect(adguardEl.parentElement).to.equal(document.body);
    });
});
