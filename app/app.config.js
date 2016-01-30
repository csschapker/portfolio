app.config(function($stateProvider, $urlRouterProvider) {

    var statesDir = "app/states/";

    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state("home", {
            url: "/",
            templateUrl: statesDir + "home/homeView.html",
            controller: "HomeController"
        })

        .state("portfolio", {
            url: "/portfolio",
            templateUrl: statesDir + "portfolio/portfolioView.html",
            controller: "PortfolioController",
            pageTitle: "CSS - Portfolio"
        })

        .state("resume", {
            url: "/resume",
            templateUrl: statesDir + "resume/resumeView.html",
            controller: "ResumeController",
            pageTitle: "CSS - Resume"
        })

});