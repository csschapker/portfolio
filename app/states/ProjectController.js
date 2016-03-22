app.controller('ProjectController', [
    '$scope', '$state', '$stateParams', 'Portfolio', '$document',
    function ($scope, $state, $stateParams, Portfolio, $document) {

        projects = Portfolio.getProjects();
        projectIndex = $stateParams.index - 1;
        $scope.project = projects[projectIndex];
        $scope.previousProject = null;
        $scope.nextProject = null;

        if (projectIndex > 0) {
            var previousIndex = projectIndex - 1;
            $scope.previousProject = projects[previousIndex];
            $scope.previousProject.stateParams = {index: previousIndex + 1};
        }

        if (projectIndex < projects.length - 1) {
            var nextIndex = projectIndex + 1;
            $scope.nextProject = projects[nextIndex];
            $scope.nextProject.stateParams = {index: nextIndex + 1};
        }

        if (!$scope.project) {
            $state.go('portfolio');
        }

        $document.scrollTop(0);
    }
]);