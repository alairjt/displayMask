describe('user input', function () {
    beforeEach(function () {
        browser.get('demo/index.html');
    });

    it('should don\'t have format text with undefined input mask', function () {
        var pageTitle = element(by.id('span-result'));

        expect(pageTitle.getText()).toBe('01234567890');
    });

    it('should format text with input mask', function () {
        var maskInput = element(by.id('input-mask'));

        maskInput.sendKeys('999.999.999-99');

        var pageTitle = element(by.id('span-result'));

        expect(pageTitle.getText()).toBe('012.345.678-90');
    });

    it('should format text with input mask - 2', function () {
        var maskInput = element(by.id('input-mask'));

        maskInput.sendKeys('(999) 999-999-99');

        var pageTitle = element(by.id('span-result'));

        expect(pageTitle.getText()).toBe('(012) 345-678-90');
    });

    it('should format text with input mask - 3', function () {
        var maskInput = element(by.id('input-mask'));

        maskInput.sendKeys('(999) 999/999/99');

        var pageTitle = element(by.id('span-result'));

        expect(pageTitle.getText()).toBe('(012) 345/678/90');
    });
});