app.directive('siteFooter', [
    function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'app/components/site-footer/siteFooterView.html'
        };
    }
]);