var app = angular.module('workflow');
app.controller('buyPageController', function ($scope) {

$scope.tableData = {
        headers: ['Column 1', 'Column 2', 'Column 3', 'Column 4', 'Column 5'],
        rows: [
            ['send', 30, 35, 40, 45],
            ['sd-video', 35, 40, 45, 50],
            ['film', 60, 65, 75, 80],
            ['hdd', 90, 95, 100, 105],
            ['phone', 115, 120, 125, 130]
        ]
    };
});	