app.factory('Portfolio', [
    function() {

        var projects = [];

        var scholarship = {
            name: 'Digital Corps Scholarship',
            types: [
                'Web'
            ],
            description: 'The Ball State Digital Corps began offering a scholarship to incoming freshman in order to work for the Digital Corps and kickstart their professional portfolio. The scholarship was created to filter applicants based on skill and personality. The application is a survey future students to ensure cultural and academic compatibility. We created a website for potential candidates to use to apply for the scholarship. Our team achieved success using a PHP backend built on the Slim framework, tying into our MySQL database and a frontend driven by AngularJS, Sass and Gulp.',
            role: 'I did things. Theses are the really cool things I did. Well they were kinda cool.',
            technologies: [
                'AngularJS',
                'PHP',
                '...'
            ],
            images: [
                'scholarship/scholarship-register.png',
                'scholarship/scholarship-login.png',
                'scholarship/scholarship-forgot.png',
                'scholarship/scholarship-home.png',
                'scholarship/scholarship-about.png',
                'scholarship/scholarship-nerdy-questions.png',
                'scholarship/scholarship-nerdy-results.png',
                'scholarship/scholarship-professional-goals.png',
                'scholarship/scholarship-awesomeness.png',
                'scholarship/scholarship-resume.png',
                'scholarship/scholarship-review.png'
            ],
            thumb: 'scholarship/scholarship-thumb.png'
        };

        var pokemon = {
            name: 'Pokemon DB Clone',
            types: [
                'Web'
            ],
            description: 'Ahhh a description.',
            role: 'I did things. Theses are the really cool things I did. Well they were kinda cool.',
            technologies: [
                'AngularJS',
                'PHP',
                '...'
            ],
            images: [
                'pokemon/pokemonDB-home.png',
                'pokemon/pokemonDB-dex.png',
                'pokemon/pokemonDB-dex2.png',
                'pokemon/pokemonDB-dex3.png',
                'pokemon/pokemonDB-trainers.png',
                'pokemon/pokemonDB-badges.png',
                'pokemon/pokemonDB-search.png'
            ],
            thumb: 'pokemon/pokemonDB-thumb.png'
        };

        var ipr = {
            name: 'Indiana Public Radio',
            types: [
                'iOS'
            ],
            description: '...',
            role: '...',
            technologies: [
                'Objective-C',
                'Xcode',
                '...'
            ],
            images: [
                'ipr/ipr-loading.png',
                'ipr/ipr-stream.png',
                'ipr/ipr-streaminfo.png',
                'ipr/ipr-menu.png',
                'ipr/ipr-upcoming.png',
                'ipr/ipr-news.png',
                'ipr/ipr-localshows.png',
                'ipr/ipr-localshow.png',
                'ipr/ipr-community.png',
                'ipr/ipr-about.png',
                'ipr/ipr-settings.png'
            ],
            thumb: 'ipr/ipr-thumb.png'
        };

        var bsuMap = {
            name: 'BSU Campus Map',
            types: [
                'Android'
            ],
            description: '...',
            role: '...',
            technologies: [
                'Java',
                'Android Studio',
                '...'
            ],
            images: [
                'bsumap/bsumap-homepage.png',
                'bsumap/bsumap-buspage.png',
                'bsumap/bsumap-mappage.png',
                'bsumap/bsumap-searchlist.png',
                'bsumap/bsumap-buildingmap.png',
                'bsumap/bsumap-directionsmap.png',
                'bsumap/bsumap-directionslist.png',
                'bsumap/bsumap-buildingpage.png',
                'bsumap/bsumap-officelist.png',
                'bsumap/bsumap-officeinfo.png',
                'bsumap/bsumap-dininglist.png',
                'bsumap/bsumap-dininginfo.png'
            ],
            thumb: 'bsumap/bsumap-thumb.png'
        };

        var careerCenter = {
            name: 'Career Center Kiosk',
            types: [
                'Web'
            ],
            description: '...',
            role: '...',
            technologies: [
                'AngularJS',
                'Sass',
                '...'
            ],
            images: [
                'careercenter/careercenter-loading.png',
                'careercenter/careercenter-home.png',
                'careercenter/careercenter-home2.png',
                'careercenter/careercenter-browse.png',
                'careercenter/careercenter-survey.png',
                'careercenter/careercenter-results.png',
                'careercenter/careercenter-contact.png',
                'careercenter/careercenter-end.png'
            ],
            thumb: 'careercenter/careercenter-thumb.png'
        };

        var perryville = {
            name: 'Perryville Battlefield',
            types: [
                'Android',
                'iOS'
            ],
            description: '...',
            role: '...',
            technologies: [
                'Java',
                'Objective-C'
            ],
            images: [
                'perryville/perryville-ios-splash.png',
                'perryville/perryville-android-mappage.png',
                'perryville/perryville-ios-optionslist.png',
                'perryville/perryville-ios-welcome.png',
                'perryville/perryville-ios-troops.png',
                'perryville/perryville-android-troopspage.png',
                'perryville/perryville-ios-stoplist.png',
                'perryville/perryville-ios-stopscreen.png',
                'perryville/perryville-ios-site.png',
                'perryville/perryville-ios-gallery.png',
                'perryville/perryville-ios-quote.png',
                'perryville/perryville-android-quotepage.png',
                'perryville/perryville-ios-credits.png'
            ],
            thumb: 'perryville/perryville-thumb.png'
        };

        var simulator = {
            name: 'Soccer Camp Simulator',
            types: [
                'Web'
            ],
            description: '...',
            role: '...',
            technologies: [
                'AngularJS',
                '...'
            ],
            images: [
                'simulator/simulator-home.png',
                'simulator/simulator-intro.png',
                'simulator/simulator-questions.png',
                'simulator/simulator-order.png'
            ],
            thumb: 'simulator/simulator-thumb.png'
        };


        projects.push(scholarship);
        projects.push(bsuMap);
        projects.push(ipr);
        projects.push(pokemon);
        projects.push(careerCenter);
        projects.push(perryville);
        projects.push(simulator);

        return {
            getProjects: function() { return angular.copy(projects); }
        };

    }
]);