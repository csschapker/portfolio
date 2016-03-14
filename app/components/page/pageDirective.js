app.directive('page', [
    function() {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            template: '<div ng-cloak class="page mdl-tabs mdl-js-tabs mdl-js-ripple-effect" ng-transclude></div>',
            controller: 'AppController'
        };
    }
]);