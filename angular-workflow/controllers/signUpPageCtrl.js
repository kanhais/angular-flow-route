var app = angular.module('workflow');
app.controller('signupPageController', function ($scope) {
   $scope.resetFormFields = function () {
        $scope.name = '';
        $scope.userName = '';
        $scope.passwordField = '';
		$scope.confirmPasswordField = '';
        $scope.contactMe = true;
    }
   $scope.resetFormFields();
});