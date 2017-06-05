// (function () {
//   'use strict';
//
//   angular
//     .module('core')
//     .run(routeFilter);
//
//   routeFilter.$inject = ['$rootScope', '$state', 'Auth'];
//
//   function routeFilter($rootScope, $state, Auth) {
//     $rootScope.$on('$stateChangeStart', stateChangeStart);
//     $rootScope.$on('$stateChangeSuccess', stateChangeSuccess);
//
//     function stateChangeStart(event, toState, toParams, fromState, fromParams) {
//       // Check authentication before changing state
//       console.log("stateChangeStart")
//       console.log(toState)
//       if (toState.data && toState.data.roles && toState.data.roles.length > 0) {
//       // if (true) {
//         var allowed = false;
//
//         // for (var i = 0, roles = toState.data.roles; i < roles.length; i++) {
//         //   if ((roles[i] === 'guest') || (Auth.user && Auth.user.roles !== undefined && Auth.user.roles.indexOf(roles[i]) !== -1)) {
//         //     allowed = true;
//         //     break;
//         //   }
//         // }
//
//         if (!allowed) {
//           event.preventDefault();
//           console.log("test auth")
//           Auth.currentUser().then(function(user) {
//             $state.transitionTo('forbidden');
//           }, function(error) {
//             console.log("test auth failed")
//             // $state.go('authentication.signin')
//             // $state.go('authentication.signin').then(function () {
//             //   // Record previous state
//             //   storePreviousState(toState, toParams);
//             // });
//           });
//           // if (Auth.user !== null && typeof Auth.user === 'object') {
//           //   $state.transitionTo('forbidden');
//           // } else {
//           //   $state.go('authentication.signin').then(function () {
//           //     // Record previous state
//           //     storePreviousState(toState, toParams);
//           //   });
//           // }
//         }
//       }
//     }
//
//     function stateChangeSuccess(event, toState, toParams, fromState, fromParams) {
//       // Record previous state
//       storePreviousState(fromState, fromParams);
//     }
//
//     // Store previous state
//     function storePreviousState(state, params) {
//       // only store this state if it shouldn't be ignored
//       if (!state.data || !state.data.ignoreState) {
//         $state.previous = {
//           state: state,
//           params: params,
//           href: $state.href(state, params)
//         };
//       }
//     }
//   }
// }());
