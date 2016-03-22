app.directive('projectCard', [
    function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'templates/directives/projectCardView.html',
            scope: {
                project: '=',
                index: '='
            },
            link: function(scope, element, attrs) {
            }
        };
    }
]);