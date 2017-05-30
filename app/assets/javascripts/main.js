angular.module('gastronome', ['ngResource', 'ui.bootstrap', 'templates', 'Devise', 'ui.router'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'home/_home.html',
      controller: 'MainCtrl'
    })
    .state('producers', {
      url: '/producers/{id}',
      templateUrl: 'producers/_producers.html',
      controller: 'ProducersCtrl'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'auth/_login.html',
      controller: 'AuthCtrl',
      onEnter: ['$state', 'Auth', function($state, Auth) {
        Auth.currentUser().then(function (){
          // $state.go('home');
        })
      }]
    })
    .state('register', {
      url: '/register',
      templateUrl: 'auth/_register.html',
      controller: 'AuthCtrl',
      onEnter: ['$state', 'Auth', function($state, Auth) {
        console.log("here");
        Auth.currentUser().then(function (){
          // $state.go('home');
        })
      }]
    });

  $urlRouterProvider.otherwise('home');
}])
