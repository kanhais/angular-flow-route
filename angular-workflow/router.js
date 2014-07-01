var app = angular.module('workflow');
app.config(function($routeProvider) {
    //$locationProvider.html5Mode(true);
    $routeProvider
        .when('/', {
            templateUrl: './partials/splashScreen.html',
            controller: 'homePageController'
        })
        .when('/login', {
            templateUrl: './partials/logInPage.html',
            controller: 'loginPageController'
        })
        .when('/signup', {
            templateUrl: './partials/signUpPage.html',
            controller: 'signupPageController'
        })
        .when('/splashScreen', {
            templateUrl: './partials/splashScreenContinue.html',
            controller: 'homePageController'
        })
		.when('/statistics', {
            templateUrl: './partials/statistics.html',
            controller: 'statisticsPageController'
        })
        .otherwise({ redirectTo: '/' });
});