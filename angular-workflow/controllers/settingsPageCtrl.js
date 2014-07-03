var app = angular.module('workflow');
app.controller('settingsPageController', function ($scope) {
    $scope.buttonValue = 'On';
	$scope.toggleList = function(){
	  if($scope.buttonValue === 'On'){
	     $scope.buttonValue = 'Off';
	  }else{
   	     $scope.buttonValue = 'On';
	  }	 
	};
    $scope.listGroupdata = ['list 1', 'list 2', 'list 3', 'list 4', 'list 5'];	
});