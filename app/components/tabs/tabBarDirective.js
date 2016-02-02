app.directive('tabBar', [
    function() {
        return {
            restrict: 'E',
            transclude: true,
            template: '<nav class="mdl-tabs mdl-js-tabs mdl-js-ripple-effect"><div ng-transclude class="mdl-tabs__tab-bar"></div></nav>',
            replace: true
        };
    }
]);