angular.module('gastronome')
.factory('producers', [function(){
  var o = {
   producers: [{title: 'prod 1', upvotes: 5},
   {title: 'prod 2', upvotes: 2},
   {title: 'prod 3', upvotes: 15},
   {title: 'prod 4', upvotes: 9},
   {title: 'prod 5', upvotes: 4}]
 };
 return o;
}])
