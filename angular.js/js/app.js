
function showView ($scope, $http) {
/*
    $scope.people = [
        { id: 1, name: 'hoge', age: 21 },
        { id: 2, name: 'boo',  age: 31 },
        { id: 3, name: 'bar',  age: 41 }
    ];
*/
    $scope.getData = function() {
        var url = 'http://localhost:9292/get';
        $http.get(url).success(function(data) {
            $scope.people = data.data;
        });
    }

    $scope.inputId = "";
    $scope.inputName = "";
    $scope.inputAge = "";

    $scope.addItem = function (){
        console.log("click!!");
        $scope.people.push({
            id: $scope.inputId,
            name: $scope.inputName,
            age: $scope.inputAge,
        });
    }
}
