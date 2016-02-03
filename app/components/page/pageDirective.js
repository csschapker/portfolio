app.directive('page', [
    function() {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            template: '<main class="mdl-tabs mdl-js-tabs mdl-js-ripple-effect" ng-transclude></main>',
            controller: 'AppController'
        };
    }
]);