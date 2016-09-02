angular.module('displayMask', ['ngMask'])
        .filter('mask', Mask);

Mask.$inject = ['MaskService'];
function Mask(MaskService) {
    return MaskFilter;

    function MaskFilter(input, mask) {
        var maskService = MaskService.create();
        input = input || '';

        if (!angular.isObject(mask)) {
            mask = {mask: mask};
        }

        maskService.generateRegex(mask);

        return maskService.getViewValue(input).withDivisors();
    }
}
