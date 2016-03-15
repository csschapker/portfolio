app.directive('contactForm', [
    function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'app/components/contact-form/contactFormView.html',
            link: function(scope, element, attrs) {

            }
        };
    }
]);