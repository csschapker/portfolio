app.directive('navMenu', function() {
    return {
        restrict: 'E',
        transclude: false,
        templateUrl: 'app/components/nav/navView.html',
        replace: true
    };
});