var App = angular.module('App', ['ui.bootstrap']);

App.controller('AngularTest', function($scope, $http, $filter) {
    $scope.showTable = false;
    $http.get('test.json')
        .then(function(res){
            $scope.jsonData = res.data;
            $scope.allJsonData = res.data;
            $scope.showTable = true;
        });

    $scope.filterData = function (type) {
        if(type != 'all')
            $scope.jsonData = $filter('filter')($scope.allJsonData, type);
        else
            $scope.jsonData = $scope.allJsonData;
    }
});