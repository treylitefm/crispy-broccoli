(function() {
    angular.module('app').factory('QuestionFactory', ['$http', function($http) {
        var questions = []

        function QuestionFactory() {
            this.createQuestion = function(question, callback) {
                $http.post('/questions', question).then(function(data) {
                    if (!data.data.errors) {
                        questions = data.data
                    }
                    callback(data.data)
                })
            }
            this.createAnswer = function(questionId, answer, callback) {
                $http.post('/questions/'+questionId+'/answers', answer).then(function(data) {
                    if (!data.data.errors) {
                        questions = data.data
                    }
                    callback(data.data)
                })
            }
            this.getAllQuestions = function(callback) {
                $http.get('/questions/').then(function(data) {
                    if (!data.data.errors) {
                        questions = data.data
                        callback(questions)
                    }
                })
            }
            this.getQuestion = function(id, callback) {
                $http.get('/questions/'+id).then(function(data) {
                    if (!data.data.errors) {
                        callback(data.data)
                    }
                })
            }
            this.likeAnswer = function(qid, aid, callback) {
                $http.post('/questions/'+qid+'/answers/'+aid+'/like').then(function(data) {
                    callback(data.data)
                })
            }
        }

        return new QuestionFactory()
    }])
})()
