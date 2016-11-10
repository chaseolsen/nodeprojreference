angular.module('app').service('mainSvc', function($http){

  this.getMeASandwich = function(){
    return $http({
      method: 'GET',
      url: 'http://localhost:5000/sandwich'
    }).then(function(response){
      console.log(response);
      return response;
    });
  };

  this.makeNewSandwich = function(henry) {
    console.log(henry);
    return $http({
      method: 'POST',
      url: 'http://localhost:5000/sandwich',
      data: henry

    }).then(function(response){
      return response;
    });
  };

});
