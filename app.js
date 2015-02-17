(function(){
  var app = angular.module('logsRadio', []);
  app.controller('LogsController', function($scope, $http){

    $scope.logs = [];

    $http.get('cq.json').
    success(function(data) {
      console.log(data);
      $scope.logs = data;
    }).
    error(function(data) {
      console.log("Error when getting the json");
    });
  });

})();
