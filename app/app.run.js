app.run([
    "$rootScope", "$state",
    function($rootScope, $state) {
        $rootScope.$on("$stateChangeStart", function (event, toState, params) {
            var title = toState.pageTitle;
            if (!title) {
                title = "C. Scott Schapker";
            }
            document.title = title;
        });
    }
]);