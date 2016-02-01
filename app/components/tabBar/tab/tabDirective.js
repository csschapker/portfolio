app.directive('tab', [
    function() {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            templateUrl: 'app/components/tabBar/tab/tabView.html'
            //template: '<a class="mdl-tabs__tab" ui-sref-active="is-active"><div ng-transclude></div></a>'
        }
    }
]);