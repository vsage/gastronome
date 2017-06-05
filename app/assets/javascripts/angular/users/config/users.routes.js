(function () {
  'use strict';

  angular
    .module('users.routes')
    .config(['$stateProvider', function($stateProvider) {

    $stateProvider
    .state('authentication', {
      abstract: true,
      url: '/authentication',
      templateUrl: 'users/views/authentication/authentication.html',
      controller: 'AuthenticationCtrl',
      controllerAs: 'authenticationCtrl'
    })
    .state('authentication.signin', {
      url: '/signin',
      templateUrl: 'users/views/authentication/authentication.signin.html',
      controller: 'AuthenticationCtrl',
      controllerAs: 'authenticationCtrl',
    })
    .state('home.users', {
        url: '/users',
        templateUrl: "users/views/users.html",
        controller: 'UsersCtrl',
        controllerAs: 'usersCtrl'
      })
  }])
}());
