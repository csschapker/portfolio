app.directive("navMenu", function() {
    return {
        restrict: "E",
        transclude: false,
        templateUrl: "app/components/nav/nav.view.html",
        replace: true
    };
});