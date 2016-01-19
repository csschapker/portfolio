app.config(function($stateProvider, $urlRouterProvider) {

    var statesDir = "app/states/";

    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state("home", {
            url: "/",
            templateUrl: statesDir + "home/home.view.html",
            controller: "HomeController"
        })

        .state("portfolio", {
            url: "/portfolio",
            templateUrl: statesDir + "portfolio/portfolio.view.html",
            controller: "PortfolioController",
            pageTitle: "CSS - Portfolio"
        })

        .state("resume", {
            url: "/resume",
            templateUrl: statesDir + "resume/resume.view.html",
            controller: "ResumeController",
            pageTitle: "CSS - Resume"
        })

});