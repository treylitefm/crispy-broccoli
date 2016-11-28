(function() {
    angular.module('app').controller('AnswerController', ['$scope', 'UserFactory', 'QuestionFactory', '$location', '$routeParams', function($scope, UserFactory, QuestionFactory, $location, $routeParams) {
        $scope.user = {}
        $scope.question = {}
        $scope.answer = {}
        $scope.errors = ''

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

        $scope.cancel = function() {
            $location.url('/')
        }
        $scope.submit = function() {
            $scope.answer.user = $scope.user._id
            QuestionFactory.createAnswer($routeParams.id, $scope.answer, function(data) {
                if (data.errors) {
                    //$scope.errors = data.errors
                    $scope.errors = 'Invalid Answer'
                } else {
                    $location.url('/')
                }
            })
        }

        getUser()
        getQuestion()
    }])
})()
