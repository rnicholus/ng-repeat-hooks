angular.module("garstasio.ngRepeatHooks", [])
	.directive("ngRepeatHooks", [function() {
        return {
            restrict: "A",
            
            link: function(scope, el, attrs) {
                var startExp = attrs.ngRepeatFirst,
                    endExp = attrs.ngRepeatLast;
                                     
                if (scope.$first && startExp) {
                    scope.$eval(startExp);
                }
                else if (scope.$last && endExp) {
                    scope.$eval(endExp);
                }
            }
        };
    }]);