var app = angular.module('workflow');

app.controller('mainController', function($scope, constants, $location){
console.log('in main controller');
     $scope.redirectToPage = function(selectedOption){
	 console.log(selectedOption);
         $location.path(constants.locationUrl[selectedOption]);
    }
});
	
app.controller('homePageController', function($scope, constants, $location){

    
});

app.controller('loginPageController', function($scope, constants, $location){
	$scope.resetFormFields = function(){
	 $scope.userName ='';
	 $scope.passwordField = '';
	 $scope.rememberMe = true;
	} 
    $scope.resetFormFields();
});

app.controller('statisticsPageController', function($scope, constants, $location){
    $scope.tableData = 
     {headers : ['Column 1','Column 2','Column 3', 'Column 4', 'Column 5'],
	 rows : [[25, 30, 35, 40 ,45],
	          [30, 35, 40, 45, 50],
			  [ 55, 60 ,65, 75, 80],
			  [ 85, 90, 95, 100, 105],
			  [ 110, 115, 120, 125, 130]]};
});
