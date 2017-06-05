(function () {
  'use strict';

  angular
    .module('core.routes')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    // $urlRouterProvider.rule(function ($injector, $location) {
    //   var path = $location.path();
    //   var hasTrailingSlash = path.length > 1 && path[path.length - 1] === '/';
    //
    //   if (hasTrailingSlash) {
    //     // if last character is a slash, return the same url without the slash
    //     var newPath = path.substr(0, path.length - 1);
    //     $location.replace().path(newPath);
    //   }
    // });

    // Redirect to 404 when route not found
    // $urlRouterProvider.otherwise(function ($injector, $location) {
    //   $injector.get('$state').transitionTo('not-found', null, {
    //     location: false
    //   });
    // });
    $urlRouterProvider.otherwise(function ($injector, $location) {
      $injector.get('$state').transitionTo('home.welcome');
    });

    $stateProvider

      .state('home', {
        abstract: true,
        templateUrl: "core/views/home.html",
        controller: 'HomeCtrl',
        controllerAs: 'homeCtrl',
        resolve: {
          currentUser: ['$q', '$state', 'Auth', function($q, $state, Auth) {
            var d = $q.defer();
            Auth.currentUser().then(function(user) {
              // return User.show({userid: user.id})
              d.resolve(user);
            })
            .then(function(user) {
              d.resolve(user);
            }, function(error) {
              $state.go('authentication.signin');
            });
            return d.promise;
          }]
        }
      })

      .state('home.welcome', {
        url: '/welcome',
        templateUrl: "core/views/home.welcome.html",
      })

      // .state('not-found', {
      //   url: '/not-found',
      //   templateUrl: '/modules/core/client/views/404.client.view.html',
      //   controller: 'ErrorController',
      //   controllerAs: 'vm',
      //   params: {
      //     message: function($stateParams) {
      //       return $stateParams.message;
      //     }
      //   },
      //   data: {
      //     ignoreState: true,
      //     pageTitle: 'Not Found'
      //   }
      // })
      // .state('bad-request', {
      //   url: '/bad-request',
      //   templateUrl: '/modules/core/client/views/400.client.view.html',
      //   controller: 'ErrorController',
      //   controllerAs: 'vm',
      //   params: {
      //     message: function($stateParams) {
      //       return $stateParams.message;
      //     }
      //   },
      //   data: {
      //     ignoreState: true,
      //     pageTitle: 'Bad Request'
      //   }
      // })
      // .state('forbidden', {
      //   url: '/forbidden',
      //   templateUrl: '/modules/core/client/views/403.client.view.html',
      //   data: {
      //     ignoreState: true,
      //     pageTitle: 'Forbidden'
      //   }
      // });
  }])
}());
