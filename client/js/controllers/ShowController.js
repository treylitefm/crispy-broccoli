(function() {
    angular.module('app').controller('ShowController', ['$scope', 'UserFactory', 'QuestionFactory', '$location', '$routeParams', function($scope, UserFactory, QuestionFactory, $location, $routeParams) {
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

        function getQuestion() {
            QuestionFactory.getQuestion($routeParams.id, function(data) {
                $scope.question = data
            })
        }

        $scope.like = function(answerId) {
            QuestionFactory.likeAnswer($routeParams.id, answerId, function(data) {
                if (data.errors) {
                    $scope.errors = data.errors
                } else {
                    $scope.question = data
                }
            })
        }

        getUser()
        getQuestion()
    }])
})()
