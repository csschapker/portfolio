app.directive('tab', [
    '$rootScope', '$state',
    function($rootScope, $state) {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            scope: {
                state: '='
            },
            template: '<a class="mdl-tabs__tab"><div ng-transclude></div></a>',
            link: function($scope, $element, $attrs) {
                $rootScope.$on('$stateChangeStart', function(event, toState) {
                    if (toState.name === $scope.state) {
                        $element.addClass('is-active');
                    } else {
                        $element.removeClass('is-active');
                    }
                });

                $element.bind('click', function() {
                    if (!$state.is($scope.state)) {
                        $state.go($scope.state);
                    }
                });
            }
        };
    }
]);