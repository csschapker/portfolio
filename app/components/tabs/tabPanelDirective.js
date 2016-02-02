app.directive('tabPanel', [
    function() {
        return {
            restrict: 'E',
            replace: true,
            template: '<div class="mdl-tabs__panel is-active"></div>'
        }
    }
]);