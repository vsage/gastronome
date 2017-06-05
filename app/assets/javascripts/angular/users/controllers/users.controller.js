(function () {
  'use strict';

  angular.module('users').controller('UsersCtrl', ['$scope', '$state', '$timeout', 'User', 'ekiSpinner', function($scope, $state, $timeout, User, ekiSpinner) {

    var usersCtrl = this;

    activate();

    /**
     * @name activate
     * @desc loads all users
     * @memberOf users
     */
    function activate() {
      ekiSpinner.showSpinner();
      User.index(function(data) {
        usersCtrl.users = data
        console.log(usersCtrl.users);
        ekiSpinner.hideSpinner();
      });
    }

  }]);

}());
