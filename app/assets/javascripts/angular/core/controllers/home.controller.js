(function () {
  'use strict';

  angular.module('core')
  .controller('HomeCtrl', ['$state', '$scope', '$rootScope', 'Auth', 'currentUser', function($state, $scope, $rootScope, Auth, currentUser) {

    var homeCtrl = this;
    homeCtrl.currentUser = currentUser;

    homeCtrl.currentState = $state.current;
    homeCtrl.rootStateName = homeCtrl.currentState.name.split(".").slice(0,2).join(".");
    $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
		  homeCtrl.rootStateName = toState.name;
	  });

    homeCtrl.signOut = signOut;

    homeCtrl.tabs = [
      { title:'Home', url:'home.welcome' },
      { title:'Users', url:'home.users' },
      // { title:'Products', view_url:'home.products'}
    ];

    function signOut() {
      Auth.logout().then(function(user) {
        $state.go('authentication.signin');
      }, function(error) {
      });
    }

  }]);

}());
