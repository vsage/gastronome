/**
 * Angular Module that provides a spinner directive, that can also be
 * used to display error messages or ask for confirmation
 *
 */
angular.module("eki-spinner", [])
  /**
   * The factory that will be exposed to the user.
   * It provides 2 functions:
   *  - showSpinner --> Show the spinner, asking for confirmation if necessary
   *  - hideSpinner --> Hide spinner and execute a callback if necessary
   */
  .factory('ekiSpinner', ['$rootScope', function($rootScope) {

    // Variable isVisible is used to memorize current state
    var isVisible = false;

    $rootScope.$on('eki-spinner:visible', function(e, trueOrFalse) {
      isVisible = trueOrFalse;
    })

    return {
      /**
       * {Function} that will make the spinner visible
       *
       * @param {Object} params An object that can contain 2 keys:
       *  - {Object} message An object with a key title and a key content. As
       * soon as message is not null, the confirmation message will be shown,
       * with 2 possibilities: confirm or abort.
       *  - {Function} callback A function that will be executed after the user
       * confirms the message.
       * @returns {Nothing}
       */
      showSpinner: function(params) {
        if (!isVisible) {
          $rootScope.$broadcast('eki-spinner:show', params)
        }
      },
      /**
       * {Function} that will make the spinner invisible
       *
       * @param {Object} params An object that can contain 2 keys:
       *  - {Object} message An object with a key title and a key content. As
       * soon as message is not null, the error message will be shown,
       * with only one possibility: OK, to clear the message.
       *  - {Function} callback A function that will be executed after the user
       * validates the error message.
       * @returns {Nothing}
       */
      hideSpinner: function(params) {
        if (isVisible) {
          $rootScope.$broadcast('eki-spinner:hide', params)
        }
      }
    }

  }])
  /**
   * The directive that will provide the spinner template and handle all the
   * events triggered in order to show or hide the spinner.
   *
   */
  .directive('mySpinner', ['$timeout', function($timeout) {
    return {
      restrict: 'EA',
      replace: true,
      template: '<div class="dark-background animate-if" ng-show="showMe">' +
          '<div class="sk-cube-grid">' +
            '<div class="sk-cube sk-cube1"></div>' +
            '<div class="sk-cube sk-cube2"></div>' +
            '<div class="sk-cube sk-cube3"></div>' +
            '<div class="sk-cube sk-cube4"></div>' +
            '<div class="sk-cube sk-cube5"></div>' +
            '<div class="sk-cube sk-cube6"></div>' +
            '<div class="sk-cube sk-cube7"></div>' +
            '<div class="sk-cube sk-cube8"></div>' +
            '<div class="sk-cube sk-cube9"></div>' +
            '<div class="spinner-message">' +
              '<div class="spinner-message-title">' +
                '<h4 ng-bind-html="options.message.title"></h4>' +
              '</div>' +
              '<div class="spinner-message-content">' +
                '<p ng-bind-html="options.message.content"></p>' +
              '</div>' +
              '<div class="spinner-message-button">' +
                '<button class="btn btn-default spinner-hide" ng-click="hide()"><i class="fa fa-check" aria-hidden="true"></i></button>' +
                '<button class="btn btn-default spinner-validate" ng-click="validate()"><i class="fa fa-check" aria-hidden="true"></i></button>' +
                '<button class="btn btn-default spinner-abort" ng-click="abort()"><i class="fa fa-close" aria-hidden="true"></i></button>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>',
      scope: {},
      link: function(scope, element, attrs) {

        initializeOptions()
        hideSpinner()

        // Listening to show events
        scope.$on('eki-spinner:show', function(e, params) {
          scope.options = params || {}
          if (params && params.message) {
            setPositionToMessageWithTwoButtons();
            scope.options.callback = params.callback || function() {
              initializeOptions()
              hideSpinner()
            }
          }
          else {
            setPositionToWait()
          }
          showSpinner()
        })

        // Listening to hide events
        scope.$on('eki-spinner:hide', function(e, params) {
          scope.options = params || {}
          setPositionToWait()
          if (params && params.message) {
            transitionFromWaitingToMessage()
          } else {
            hideSpinner()
          }
        })

        /**
         * {Function} that will be called when clicking the OK button on an error
         * message (before hiding the spinner)
         *
         */
        scope.hide = function() {
          hideSpinner()
          if (scope.options.callback) {
            typeof scope.options.callback === 'function' && scope.options.callback();
          }
          initializeOptions();
        }

        /**
         * {Function} that will be called when clicking on the OK button on a
         * confirmation message (before showing the spinner)
         *
         */
        scope.validate = function() {
          transitionFromMessageToWaiting()
          if (typeof scope.options.callback === 'function') {
            $timeout(function() {
              scope.options.callback()
              initializeOptions()
            }, 1500)
          }
        }

        /**
         * {Function} that will be called when clicking on the abort button on a
         * confirmation message (before showing the spinner)
         *
         */
        scope.abort = function() {
          initializeOptions()
          hideSpinner()
        }


        function initializeOptions() {
          scope.options = {}
        }

        function hideSpinner() {
          scope.showMe = false;
          scope.$emit('eki-spinner:visible', false)
        }

        function showSpinner() {
          scope.showMe = true;
          scope.$emit('eki-spinner:visible', true)
        }

        /**
         * {Function} that transitions the spinner from spinning to displaying an
         * error message
         *
         */
        function transitionFromWaitingToMessage() {
          $(".sk-cube-grid").addClass("in")
          $timeout(function() {
            $(".sk-cube-grid").removeClass("in")
            $(".sk-cube-grid").addClass("fixed")
          }, 1000)
        }

        /**
         * {Function} that transitions the spinner from displaying a
         * confirmation message to spinning
         *
         */
        function transitionFromMessageToWaiting() {
          $(".sk-cube-grid").addClass("out")
          $timeout(function() {
            $(".sk-cube-grid").removeClass("out")
            $(".sk-cube-grid").removeClass("fixed")
          }, 1000)
        }

        function setPositionToWait() {
          $(".sk-cube-grid").removeClass("fixed validation")
        }

        function setPositionToMessageWithTwoButtons() {
          $(".sk-cube-grid").addClass("fixed validation")
        }
      }
    }
  }])
