var app = angular.module('app', ['ngRoute', 'ngCookies'])
app.config(function($routeProvider) {
    $routeProvider
        .when('/index', {
            templateUrl: 'client/partials/index.html',
            controller: 'IndexController'
        })
        .when('/', {
            templateUrl: 'client/partials/landing.html',
            controller: 'LandingController'
        })
        .when('/new_question', {
            templateUrl: 'client/partials/new_question.html',
            controller: 'QuestionController'
        })
        .when('/question/:id/new_answer', {
            templateUrl: 'client/partials/new_answer.html',
            controller: 'AnswerController'
        })
        .when('/question/:id', {
            templateUrl: 'client/partials/view_question.html',
            controller: 'ShowController'
        })
})
