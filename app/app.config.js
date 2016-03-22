app.config([
    '$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        var statesDir = 'app/states/';
        var portfolioDir = 'app/states/portfolio/';

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: statesDir + 'home/homeView.html',
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
                templateUrl: portfolioDir + 'collection/portfolioCollectionView.html',
                controller: 'PortfolioCollectionController',
                pageTitle: 'CSS - Portfolio'
            })

            .state('portfolio.project', {
                url: '/project/:index',
                templateUrl: portfolioDir + 'project/portfolioProjectView.html',
                controller: 'PortfolioProjectController',
                pageTitle: 'CSS - Portfolio'
            })

            .state('resume', {
                url: '/resume',
                templateUrl: statesDir + 'resume/resumeView.html',
                controller: 'ResumeController',
                pageTitle: 'CSS - Resume'
            });
    }
]);