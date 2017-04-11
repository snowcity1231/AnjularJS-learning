/**
 * Created by Administrator on 2017/4/10.
 */
var myModule = angular.module("myModule", []);
myModule.directive("hello", function () {
    return {
        restrict : 'E',
        template : '<div>Hi Angular</div>',
        replace : true
    }
});