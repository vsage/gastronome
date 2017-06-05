(function () {
  'use strict';

  angular.module('users')
  .controller('AuthenticationCtrl', ['$state', '$scope', '$timeout', '$window', 'Auth', function($state, $scope, $timeout, $window, Auth) {

    var authenticationCtrl = this;

    // #############################################################################
    // ------------------------------------------------------- Exposed to view-model
    // #############################################################################

    authenticationCtrl.credentials = {
      email: "",
      password: ""
    };

    authenticationCtrl.signIn = signIn;
    authenticationCtrl.invalidSignin = false;


    // #############################################################################
    // ---------------------------------------------------------- Private Functions
    // #############################################################################

    function signIn() {
      authenticationCtrl.invalidSignin = false;
      // authenticationCtrl.isWaiting = true;
      Auth.login(authenticationCtrl.credentials).then(function(user) {
        // authenticationCtrl.isWaiting = false;
        $state.go('home.welcome');
      }, function(error) {
        authenticationCtrl.invalidSignin = true;
        // authenticationCtrl.isWaiting = false;
      });
    }

  }]);
}());
