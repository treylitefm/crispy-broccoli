(function() {
    angular.module('app').factory('UserFactory', ['$http', '$cookies', function($http, $cookies) {
        var user = {}

        function UserFactory() {
            this.create = function(user, callback) {
                $http.post('/register', user).then(function(data) {
                    if (!data.data.errors) {
                        $cookies.put('user', data.data._id)
                    }
                    callback(data.data)
                }) 
            }
            this.getUser = function(callback) {
                var cookie = $cookies.get('user')
                if (cookie) {
                    $http.get('/users/'+cookie).then(function(data) {
                        user = data.data
                        callback(user)
                    })
                } else {
                    callback(false)
                }
            }
            this.logout = function(callback) {
                user = {}
                callback(user)
            }
        }

        return new UserFactory()
    }])
})()
