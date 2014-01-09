
angular.module('page', ['ngRoute', 'ngAnimate'],
  function($routeProvider, $locationProvider) {
      $routeProvider.when('/page1/:pageId', {
        templateUrl: 'page.html',
        controller: Page1
      });
      $routeProvider.when('/page2/:pageId', {
        templateUrl: 'page.html',
        controller: Page2
      });
      $locationProvider.html5Mode(true);
});

function pageView($route, $routeParams, $location){
    this.$route = $route;
    this.$location = $location;
    this.$routeParams = $routeParams;
}

function Page1 ($routeParams) {
    this.pageName = "Page1";
    this.nextPage = "page2";
    this.$routeParams = $routeParams;
}

function Page2 ($routeParams) {
    this.pageName = "Page2";
    this.nextPage = "page1";
    this.$routeParams = $routeParams;
}

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
