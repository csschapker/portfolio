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

        $scope.currentIndex = 0;

        $scope.setCurrentSlideIndex = function (index) {
            $scope.currentIndex = index;
        };

        $scope.isCurrentSlideIndex = function (index) {
            return $scope.currentIndex === index;
        };

        $scope.prevSlide = function () {
            $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : 0;
        };

        $scope.nextSlide = function () {
            $scope.currentIndex = ($scope.currentIndex < $scope.project.images.length - 1) ? ++$scope.currentIndex : $scope.project.images.length - 1;
        };
    }
]);