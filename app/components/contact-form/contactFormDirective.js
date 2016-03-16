app.directive('contactForm', [
    'Api',
    function(Api) {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'app/components/contact-form/contactFormView.html',
            link: function(scope, element, attrs) {
                scope.submitted = false;
                scope.badName = true;
                scope.badEmail = true;
                scope.badMessage = true;

                scope.data = {};

                scope.submitForm = function() {
                    scope.submitted = true;
                    if (formIsValid()) { sendMessage(); }
                };

                function checkName() {
                    scope.badName = (!scope.data.name || !scope.data.name.length);
                }

                function checkEmail() {
                    var regex = /^(([^<>()[]\.,;:s@"]+(.[^<>()[]\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/igm;
                    var emailIsValid = regex.test(scope.data.email);
                    scope.badEmail = (!scope.data.email || !scope.data.email.length || !emailIsValid);
                }

                function checkMessage() {
                    scope.badMessage = (!scope.data.message || !scope.data.message.length);
                }

                function formIsValid() {
                    checkName();
                    checkEmail();
                    checkMessage();
                    return (!scope.badName && !scope.badEmail && !scope.badMessage);
                }

                function sendMessage() {
                    Api.sendPersonalMessage(scope.data,
                    function(response) {
                        scope.data = {};
                        scope.submitted = false;
                        console.log(response);
                    },
                    function(response) {
                        console.log(response);
                    });
                }
            }
        };
    }
]);