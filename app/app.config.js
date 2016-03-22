app.config([
    '$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        var templates = 'templates/states/';

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: templates + 'homeView.html',
                controller: 'HomeController'
            })

            .state('portfolio', {
                url: '/portfolio',
                template: '<main ui-view></main>',
                pageTitle: 'CSS - Portfolio',
                redirectTo: 'portfolio.collection'
            })

            .state('portfolio.collection', {
                url: '/collection',
                templateUrl: templates + 'portfolioCollectionView.html',
                controller: 'PortfolioCollectionController',
                pageTitle: 'CSS - Portfolio'
            })

            .state('portfolio.project', {
                url: '/project/:index',
                templateUrl: templates + 'portfolioProjectView.html',
                controller: 'PortfolioProjectController',
                pageTitle: 'CSS - Portfolio'
            })

            .state('resume', {
                url: '/resume',
                templateUrl: templates + 'resumeView.html',
                controller: 'ResumeController',
                pageTitle: 'CSS - Resume'
            });
    }
]);