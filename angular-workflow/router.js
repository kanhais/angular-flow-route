var app = angular.module('workflow');
app.config(function ($routeProvider) {
    //$locationProvider.html5Mode(true);
    $routeProvider.when('/', {
        templateUrl: './partials/splashScreen.html',
        controller: 'homePageController'
    }).when('/login', {
        templateUrl: './partials/logInPage.html',
        controller: 'loginPageController'
    }).when('/signup', {
        templateUrl: './partials/signUpPage.html',
        controller: 'signupPageController'
    }).when('/splashScreen', {
        templateUrl: './partials/splashScreenContinue.html',
        controller: 'homePageController'
    }).when('/statistics', {
        templateUrl: './partials/statistics.html',
        controller: 'statisticsPageController'
    }).when('/play', {
        templateUrl: './partials/play.html',
        controller: 'playPageController'
    }).when('/playResult', {
        templateUrl: './partials/playResult.html',
        controller: 'playResultPageController'
    }).when('/main', {
        templateUrl: './partials/mainPage.html',
        controller: 'mainPageController'
    }).when('/buy', {
        templateUrl: './partials/buyPage.html',
        controller: 'buyPageController'
    }).when('/settings', {
        templateUrl: './partials/settingsPage.html',
        controller: 'settingsPageController'
    }).otherwise({
        redirectTo: '/'
    });
});