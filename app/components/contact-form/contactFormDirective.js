app.directive('contactForm', [
    'Api', 'Notification',
    function(Api, Notification) {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'app/components/contact-form/contactFormView.html',
            link: function(scope, element, attrs) {
                scope.data = {};

                scope.submitForm = function() {
                    scope.submitted = true;

                    if (formIsValid()) {
                        sendMessage();
                    } else {
                        Notification.error('Make sure you fill out all of the fields to send a message!');
                    }
                };

                function checkName() {
                    return (scope.data.name && scope.data.name.length);
                }

                function checkEmail() {
                    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    return regex.test(scope.data.email);
                }

                function checkMessage() {
                    return (scope.data.message && scope.data.message.length);
                }

                function formIsValid() {
                    var nameIsValid = checkName();
                    var emailIsValid = checkEmail();
                    var messageIsValid = checkMessage();
                    return (nameIsValid && emailIsValid && messageIsValid);
                }

                function sendMessage() {
                    Api.sendPersonalMessage(scope.data,
                    function() {
                        scope.data = {};
                        scope.submitted = false;
                        Notification.primary('Message sent! Thanks!');
                    },
                    function() {
                        Notification.error('Oh no, Your message could not be sent! Try again later or try following my links to contact me.');
                    });
                }
            }
        };
    }
]);