app.controller('PortfolioController', [
    '$scope', 'Portfolio',
    function($scope, Portfolio) {
        $scope.projects = Portfolio.getProjects();
    }
]);