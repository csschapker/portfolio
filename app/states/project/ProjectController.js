app.controller('ProjectController', [
    '$scope', '$state', '$stateParams', 'Portfolio',
    function ($scope, $state, $stateParams, Portfolio) {

        var projects = Portfolio.getProjects();
        var projectIndex = $stateParams.index - 1;
        var project = projects[projectIndex];

        if (!project) {
            $state.go('portfolio');
        }

        $scope.project = project;
    }
]);