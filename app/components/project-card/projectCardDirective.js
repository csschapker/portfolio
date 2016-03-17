app.directive('projectCard', [
    function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'app/components/project-card/projectCardView.html',
            scope: {
                project: '=',
                index: '='
            },
            link: function(scope, element, attrs) {
            }
        };
    }
]);