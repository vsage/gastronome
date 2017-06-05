/**
 * Angular Module that provides a navbar directive
 * Dependencies ui-router
 * Style navbarMenu class
 */
angular.module('Gastronome', [])

  /**
   * The directive that will provide the navbar template
   * It needs a tabs arg Exemple
   * tabs = [
   * { title:'Tab1', url:'home.tab1' },
   * { title:'Tab2', url:'home.tab2' }]
   */
  .directive('navbarMenu', [function() {
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: "navbar-menu/views/navbarMenu.html",
      scope: {
        "tabs": "=",
        "currentState": "=",
      }
    }
  }])
