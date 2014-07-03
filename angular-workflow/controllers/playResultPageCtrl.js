var app = angular.module('workflow');
app.controller('playResultPageController', function ($scope) {
    $scope.tableData = {
        headers: ['Column 1', 'Column 2', 'Column 3', 'Column 4', 'Column 5'],
        rows: [
            [25, 30, 35, 40, 45],
            [30, 35, 40, 45, 50],
            [55, 60, 65, 75, 80],
            [85, 90, 95, 100, 105],
            [110, 115, 120, 125, 130]
        ]
    };
});