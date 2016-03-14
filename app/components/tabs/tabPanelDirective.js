app.directive('tabPanel', [
    '$state',
    function($state) {
        return {
            restrict: 'E',
            replace: true,
            template: '<main class="mdl-tabs__panel is-active {{$state.current.name}}"></main>',
            link: function(scope, element, attrs) {
                scope.$state = $state;
            }
        };
    }
]);