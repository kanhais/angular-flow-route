var app = angular.module('workflow');
app.controller('loginPageController', function ($scope) {
    $scope.resetFormFields = function () {
        $scope.userName = '';
        $scope.passwordField = '';
        $scope.rememberMe = true;
    }
    $scope.resetFormFields();
});