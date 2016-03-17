app.service('Api', [
    '$http',
    function($http) {

        var baseUrl = 'http://localhost:8888/portfolio-backend/';

        this.sendPersonalMessage = function(data, onSuccess, onError) {
            var url = baseUrl + 'personal-message';
            $http.post(url, data).then(onSuccess, onError);
        };

    }
]);