(function() {
    angular.module('app').controller('HeaderController', ['$scope', 'UserFactory', '$location', function($scope, UserFactory, $location) {
        $scope.logout = function() {
            UserFactory.logout(function() {
                $location.url('/index')
            })
        }
    }])
})()
