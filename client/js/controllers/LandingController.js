(function() {
    angular.module('app').controller('LandingController', ['$scope', '$location', 'UserFactory', 'QuestionFactory', function($scope, $location, UserFactory, QuestionFactory) {
        $scope.user = {}
        $scope.questions = []

        function landing() {
            QuestionFactory.getAllQuestions(function(data) {
                $scope.questions = data
            })
        }

        function getUser() {
            UserFactory.getUser(function(data) {
                if (data) {
                    $scope.user = data
                } else {
                    $location.url('/index')
                }
            })
        }

        landing()
        getUser()
    }])
})()
