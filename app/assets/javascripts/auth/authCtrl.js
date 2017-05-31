angular.module('gastronome')
.controller('AuthCtrl', ['$scope','$state','Auth',function($scope, $state, Auth){
  console.log("here");
  $scope.login = function() {
    Auth.login($scope.user).then(function(){
      $state.go('home');
    });
  };

  $scope.register = function() {
    Auth.register($scope.user).then(function(){
      $state.go('home');
    });
  };

console.log(Auth.isAuthenticated());

}]);
