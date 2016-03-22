app.controller('PortfolioCollectionController', [
    '$scope', 'Portfolio',
    function($scope, Portfolio) {
        $scope.projects = Portfolio.getProjects();
    }
]);