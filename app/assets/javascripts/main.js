angular.module("gastronome", ['ngResource', 'ui.bootstrap', 'templates', 'Devise', 'ui.router'])
.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

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
    });

  $urlRouterProvider.otherwise('home');
}])
