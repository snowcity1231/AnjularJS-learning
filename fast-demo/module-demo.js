/**
 * Created by Administrator on 2017/4/10.
 */
var myModule = angular.module("HelloAngular", []);

myModule.controller("helloAngular", ['$scope',
    function HelloAngular($scope) {
        $scope.greeting = {
            text : 'Hello'
        }
    }
]);
