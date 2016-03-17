app.directive('imageSlider', [
    '$document',
    function($document) {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'app/components/image-slider/imageSliderView.html',
            scope: {
                images: '='
            },
            link: function(scope, element, attrs) {
                scope.active = 0;

                scope.setActive = function(index) {
                    scope.active = index;
                    $document.scrollToElement(element);
                };

                scope.isActive = function(index) {
                    return scope.active === index;
                };

                scope.back = function() {
                    var newIndex = (scope.active > 0) ? --scope.active : scope.images.length - 1;
                    scope.setActive(newIndex);
                };

                scope.next = function() {
                    var newIndex = (scope.active < scope.images.length - 1) ? ++scope.active : 0;
                    scope.setActive(newIndex);
                };
            }
        };
    }
]);