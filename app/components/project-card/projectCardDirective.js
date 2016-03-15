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
                scope.thumb = 'url(assets/images/projects/' + scope.project.thumb + ') no-repeat transparent top / cover';
            }
        };
    }
]);