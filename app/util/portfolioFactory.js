app.factory('Portfolio', [
    function() {

        var projects = [];

        var scholarship = {
            name: 'Digital Corps Scholarship',
            types: [
                'Web'
            ],
            description: 'The Digital Corps started offering a scholarship for incoming Ball State freshmen in 2016, and an application was needed. This internal project was started to build a website to receive responses from applicants and for staff to view applications in order to select a winner for the scholarship. The project also required a front end that projected the atmosphere and direction of the Digital Corps and a backend to help retrieve and store information user information and activity. The system’s database was built from scratch, storing things like user responses from the application, application reviews by staff members, questions/prompts for the application and user credentials.',
            role: 'My work on the application was mostly on the front end. I translated much of what you see from our designer’s concept to the appropriate HTML and CSS to match the design language. Using AngularJS and the popular AngularUI Router frameworks, I built the flow of the application. I think it’s necessary to mention that most of my work on the front end was at a high level, building the views and setting up the majority of the styles in a way that allowed for others to add the more detailed stuff later. Additionally, I created our initial Gulp tasks to allow us to use Sass and to just speed up development a little. On the back end, my work was limited to mostly changing a couple of endpoints for HTTP requests and altering a few lines of PHP logic for those requests.',
            technologies: [
                'HTML', 'AngularJS', 'AngularUI Router', 'Gulp', 'Sass', 'PHP', 'Slim', 'MySQL', 'PHPStorm', 'phpMyAdmin'
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
            name: 'Pokémon DB Clone',
            types: [
                'Web'
            ],
            description: 'In a database design class at Ball State in 2015, my professor asked us to pick an application that we would want to build throughout the semester and would required a database. So naturally, my group went with Pokémon; we came to this decision not just because we’re cool, but because we knew there is already as much information available about Pokémon as we could want to we wouldn’t have to worry about coming up with mock data. The final product we ended up with is a simple website using AngularJS and PHP that allows users to browse through different information about the original Pokémon.',
            role: 'For this assignment, unlike most of my other projects, I spent most of my time working on the back end and almost none on the front end. The database itself was the focus of the course, so my group and I spent most of our time working on the and decided to use MySQL because of how popular it is. I built out most of the backend and decided to use PHP and the Slim framework because it allowed me to jump quickly into building HTTP request endpoints.',
            technologies: [
                'HTML', 'AngularJS', 'ngRoute', 'PHP', 'Slim', 'MySQL', 'PHPStorm', 'phpMyAdmin', 'MySQLWorkbench'
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
            description: 'Indiana Public Radio at Ball State asked the Digital Corps to build some mobile applications for the station. The basic idea for these applications was to simply recreate the IPR website in a native application form for Android and iOS. The applications feature a live stream of the station so users can easily listen from their devices. Users can also set notifications for shows so they can get a reminder to tune in. Additionally, the applications provide news stories with audio clips that are posted on the IPR website and access to some recorded shows and segments. Check out the IPR app <a title="View on App Store" target="_blank" href="https://appsto.re/us/8UHl7.i">here</a> (designed for iPhone).',
            role: 'This project was the first time I really took on an iOS project without much significant help. That being said, I learned most of my iOS development skills while creating this application. I set up a media player for the IPR live stream and integrated it with other media players for underwriter messages, news clips and recorded shows. I built local notifications for users to get alerts about shows they wanted to listen to. Finally, I created settings to switch the station stream between low and high quality, to automatically stop the stream after a certain number of minutes and to allow the user to choose whether or not to start the stream automatically.',
            technologies: [
                'Objective-C', 'iOS', 'Xcode'
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
            description: 'Ball State University has a fairly large campus and it’s easy to lost, especially if you’re unfamiliar with the area. Well a few years ago, the Digital Corps launched a mobile application for iOS and Android to help make getting around Ball State easier. The BSU Campus Map showed all of the buildings on campus and some information about each one. Well by the summer of 2015 the applications were very outdated, sometimes struggling to run as the systems they were designed on were being dropped. So we started a project to redesign the applications and revamp the system as whole with more accurate and more useful information. The apps now show the entities closest to the user’s location and more detailed information about each building. When a user views a building, they can get directions to it and find out what offices, dining areas and labs are in it. Users can also the normal hours of operation for most places on campus. There are also indicators of what is in a building and where restrooms are located. Additionally, users can find parking lots and meters, landmarks and ATMs. You can view the Android app <a title="View on Play Store" target="_blank" href="https://play.google.com/store/apps/details?id=edu.bsu.campusmap">here</a>.',
            role: 'This project is one my favorites from my time at the Digital Corps because it’s used daily by many students around Ball State’s campus, and I have used it often myself. I really enjoyed working on the Android application because it has a smooth interface that looks clean and crisp. We built all of the views in the application from scratch and used some interesting Android libraries for material design. Overall, I spent most of my time working on interactions with map, such as showing and hiding the appropriate markers at the appropriate times and getting the proper animations out of the map. I also worked a lot on with search bar and getting it act correctly with suggested searches based on all of the entities on campus and search terms that we provided.',
            technologies: [
                'Java', 'Android', 'Gradle', 'Android Studio'
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
            description: 'The Ball State Career Center wanted a kiosk-type application that allowed students to look at information about careers, find careers they might enjoy and connect with the Career Center. The system we built uses data from the O*NET occupation database and allows users to take a couple routes for finding job information. First, they can browse through a simple list of occupations, sorting by salary or name, and save any they might find interesting. Another option the user has is to answer a short survey, picking two of their values or personality types that they find most important. The results of the survey are used to present the user with a list of careers that they might be interested in and can also save for later. The last part of the application allows users to enter an email address to receive the information about careers they saved and additional information from the Career Center.',
            role: 'Most of my work on the kiosk application was on the front end. I used Gulp to automate some tasks for me and Sass for styling. I built most of the application with AngularJS and AngularUI Router so I could easily handle all of the logic for each state separately. Additionally, I added Angular Material to this project to add some subtle animation and aesthetics. My work on the back end, which was built with CakePHP, was limited to creating the email template and functionality.',
            technologies: [
                'HTML', 'AngularJS', 'AngularUI Router', 'Angular Material', 'Gulp', 'Sass', 'PHP', 'CakePHP', 'MySQL', 'PHPStorm'
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
            description: 'A Sports Law instructor at Ball State came to the Digital Corps with an idea for an interactive assignment for her students in the summer of 2016. This turned into one of the most interesting and fun projects I have worked on. The idea was to make a web-based assignment that didn’t just make students answer questions (although they still get to, of course), but made them pull from their knowledge and apply it to the real world. The solution was to ask the students to plan for a simulated youth soccer camp to see if, given a certain budget, they would hire the appropriate amount of staff as well as equipment. The students would need to pick out the items and personnel they needed and distribute them among the different fields of the soccer camp. After doing so, they would be presented a few prompts about things that could potentially go wrong and answer how they would respond to those situations.',
            role: 'With this project, my work has been evenly distributed between the front end and back end. On the front end, I set up the site as an AngularJS application and successfully integrated jQuery and jQueryUI with it. I made a few Gulp tasks so we could get going with Sass, and I added AngularUI Router to control the flow of the application. Additionally, I built out a drag-and-drop system, merging jQuery with AngularJS (which was not an easy task), to be used to distribute items between fields. My back-end work has been fairly basic. I created a simple tables in our MySQL database and a small PHP backend with the Slim framework.',
            technologies: [
                'HTML', 'AngularJS', 'AngularUI Router', 'jQuery', 'jQueryUI', 'Gulp', 'Sass', 'PHP', 'Slim', 'MySQL', 'PHPStorm', 'phpMyAdmin'
            ],
            images: [
                'simulator/simulator-home.png',
                'simulator/simulator-intro.png',
                'simulator/simulator-questions.png',
                'simulator/simulator-order.png'
            ],
            thumb: 'simulator/simulator-thumb.png',
            inProgress: true
        };


        projects.push(scholarship);
        projects.push(bsuMap);
        projects.push(ipr);
        projects.push(pokemon);
        projects.push(careerCenter);
        //projects.push(perryville);
        projects.push(simulator);

        return {
            getProjects: function() { return angular.copy(projects); }
        };

    }
]);