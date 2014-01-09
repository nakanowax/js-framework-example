var app = angular.module('page', ['ngRoute', 'ngAnimate']);

app.config(function($routeProvider, $locationProvider) {

  $routeProvider.when('/page1', {
    templateUrl: './page1.html'
  });

  $routeProvider.when('/page2', {
    templateUrl: './page2.html'
  });
});


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

    $scope.getDataFromPost = function() {
        var url = 'http://localhost:9292/';
        var params = { method: 'getUserData' };
        var config = { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }};
        $http.post(url, params, config).success(function(response) {
            $scope.people = response.data;
        });

        /*  こっちでも出来るけど上記が簡単そう
        $http({
            method: 'POST',
            url: url,
            headers: config,
            data: params
        }).success(function(response){
            $scope.people = response.data;
        });
        */

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
