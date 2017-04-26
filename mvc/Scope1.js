/**
 * Created by Administrator on 2017/4/26.
 */
function GreenController($scope, $rootScope) {
    $scope.name = 'World';
    $rootScope.department = 'Angular';
}

function ListController($scope) {
    $scope.names = ['Apple', 'Book', 'Cat'];
}
