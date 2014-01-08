
function showView ($scope) {
    $scope.people = [
        { id: 1, name: 'hoge', age: 21 },
        { id: 2, name: 'boo',  age: 31 },
        { id: 3, name: 'bar',  age: 41 }
    ];

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
