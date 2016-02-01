app.directive('tabBar', [
    function() {
        return {
            restrict: 'E',
            transclude: true,
            template: '<div class="mdl-tabs mdl-js-tabs mdl-js-ripple-effect"><div ng-transclude class="mdl-tabs__tab-bar"></div></div>',
            replace: true
        };
    }
]);