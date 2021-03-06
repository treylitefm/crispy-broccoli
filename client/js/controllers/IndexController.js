(function() {
    angular.module('app').controller('IndexController', ['$scope', '$location', 'UserFactory', function($scope, $location, UserFactory) {
        $scope.user = {}
        $scope.errors = []

        $scope.register = function() {
            UserFactory.create($scope.user, function(data) {
                if (data.errors) {
                    $scope.errors = data.data.errors
                } else {
                    $location.url('/')
                }
            })
        }
    }])
})()
