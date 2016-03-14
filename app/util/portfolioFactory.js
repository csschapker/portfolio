app.factory('Portfolio', [
    function() {

        var projects = [];

        projects.push({
            name: 'Digital Corps Scholarship',
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
        });

        return {
            getProjects: function() { return projects; }
        };

    }
]);