app.run([
    '$rootScope', '$state', '$timeout',
    function($rootScope, $state, $timeout) {
        $rootScope.$on('$viewContentLoaded', function() {
            $timeout(function() {
                componentHandler.upgradeAllRegistered();
            });
        });



        $rootScope.$on('$stateChangeStart', function (event, toState, params) {
            var title = toState.pageTitle;
            if (!title) {
                title = 'C. Scott Schapker';
            }
            document.title = title;

            var redirect = toState.redirectTo;
            if (redirect) {
                event.preventDefault();
                $state.go(redirect);
            }
        });
    }
]);