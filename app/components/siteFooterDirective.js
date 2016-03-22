app.directive('siteFooter', [
    function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'templates/directives/siteFooterView.html'
        };
    }
]);