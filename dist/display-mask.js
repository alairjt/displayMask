/*!
 * displayMask
 * https://github.com/alairjt/displayMask
 * Version: 1.1.1 - 2016-09-02T14:51:28.561Z
 * License: MIT
 */


(function () { 
'use strict';
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

}());