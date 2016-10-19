(function() {
    angular.module('app').controller('QuestionController', ['$scope', 'UserFactory', 'QuestionFactory', '$location', function($scope, UserFactory, QuestionFactory, $location) {
        $scope.user = {}
        $scope.question = {}
        $scope.errors = []

        function getUser() {
            UserFactory.getUser(function(data) {
                if (data) {
                    $scope.user = data
                } else {
                    $location.url('/index')
                }
            })
        }

        $scope.cancel = function() {
            $location.url('/')
        }
        $scope.submit = function() {
            $scope.question.user = $scope.user._id
            QuestionFactory.createQuestion($scope.question, function(data) {
                if (data.errors) {
                    $scope.errors = data.errors
                } else {
                    $location.url('/')
                }
            })
        }

        getUser()
    }])
})()
