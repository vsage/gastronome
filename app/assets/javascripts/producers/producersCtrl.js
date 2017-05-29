angular.module("gastronome")
.controller('ProducersCtrl', ['$scope','$stateParams','producers',function($scope, $stateParams, producers){

  $scope.addPost = function(){
    if(!$scope.title || $scope.title === '') { return; }
    $scope.posts.push({title: $scope.title, upvotes: 0});
    $scope.title = '';
  };

}]);
