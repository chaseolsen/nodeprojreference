angular.module('app').controller('mainCtrl', function($scope, mainSvc){ // <---- Inject $scope and the service name!

  $scope.getMeASandwich = function(){
    mainSvc.getMeASandwich().then(function(response){
      $scope.sammich = response.data;
    });
  };

  $scope.makeNewSandwich = function(maxSandwich){
    var sandwichData = {
      sandwich: maxSandwich,
    };
    mainSvc.makeNewSandwich(sandwichData).then(function(response){
      $scope.allSammiches = response.data;
    });
  };

});
