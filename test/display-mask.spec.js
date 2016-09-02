describe("DisplayMask", function () {
    "use strict";

    beforeEach(module("displayMask"));

    describe("Should be format display", function () {
        it('Should format text', inject(function ($filter) {
            var text = '01234567890';
            var result = $filter('mask')(text, '999.999.999-99');

            expect(result).toBe('012.345.678-90');
        }));
        
        it('Should format text', inject(function ($filter) {
            var text = '01234567890';
            var result = $filter('mask')(text, undefined);

            expect(result).toBe('01234567890');
        }));
    });
});