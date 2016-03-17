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
            thumb: 'scholarship/scholarship-login.png'
        };

        var pokemon = {
            name: 'Pokemon DB Clone',
            types: [
                'Web'
            ],
            description: 'Ahhh a description.',
            role: 'I did things. Theses are the really cool things I did. Well they were kinda cool.',
            images: [
                'pokemon/pokemonDB-home.png',
                'pokemon/pokemonDB-dex.png',
                'pokemon/pokemonDB-dex2.png',
                'pokemon/pokemonDB-dex3.png',
                'pokemon/pokemonDB-trainers.png',
                'pokemon/pokemonDB-badges.png',
                'pokemon/pokemonDB-search.png'
            ],
            thumb: 'pokemon/pokemonDB-home.png'
        };

        var ipr = {
            name: 'Indiana Public Radio',
            types: [
                'iOS'
            ],
            description: '...',
            role: '...',
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
            thumb: 'ipr/ipr-streaminfo.png'
        };

        var bsuMap = {
            name: 'BSU Campus Map',
            types: [
                'Android'
            ],
            description: '...',
            role: '...',
            images: [
                'bsumap/bsumap-home.png',
                'bsumap/bsumap-bus.png',
                'bsumap/bsumap-map.png',
                'bsumap/bsumap-search.png',
                'bsumap/bsumap-buildingoverview.png',
                'bsumap/bsumap-directionmap.png',
                'bsumap/bsumap-directions.png',
                'bsumap/bsumap-building.png',
                'bsumap/bsumap-officeoptions.png',
                'bsumap/bsumap-office.png',
                'bsumap/bsumap-diningoptions.png',
                'bsumap/bsumap-placeinfo.png'
            ],
            thumb: 'bsumap/bsumap-home.png'
        };


        projects.push(scholarship);
        projects.push(bsuMap);
        projects.push(ipr);
        projects.push(pokemon);

        return {
            getProjects: function() { return projects; }
        };

    }
]);