(function () {
    'use strict';

    angular.module('displayMask', ['ngMask'])
        .filter('mask', Mask);

    Mask.$inject = ['MaskService'];
    function Mask(MaskService) {
        var value = null;
        
        MaskFilter.$stateful = true;
        
        function MaskFilter(input, mask) {
            var maskService = MaskService.create();
            
            if (!angular.isObject(mask)) {
                mask = { mask: mask };
            }

            if (!value) {
                maskService.generateRegex(mask).then(function() {
                    value = maskService.getViewValue(input).withDivisors();
                });
            }

            return value;
        };
        
        
        return MaskFilter;
    }
})();
