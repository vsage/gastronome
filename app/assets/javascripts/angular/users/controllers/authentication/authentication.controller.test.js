// 'use strict';
//
// (function () {
//   // Authentication controller Spec
//   describe('AuthenticationCtrl', function () {
//     // Initialize global variables
//     var $scope,
//       Auth,
//       $httpBackend,
//       $controller,
//       authenticationCtrl,
//       $location,
//       $state,
//       $q,
//       deferred,
//       $rootScope;
//     //
//     //
//     // beforeEach(function () {
//     //   jasmine.addMatchers({
//     //     toEqualData: function (util, customEqualityTesters) {
//     //       return {
//     //         compare: function (actual, expected) {
//     //           return {
//     //             pass: angular.equals(actual, expected)
//     //           };
//     //         }
//     //       };
//     //     }
//     //   });
//     // });
//     //
//     // Load the main application module
//     beforeEach(angular.mock.module(ApplicationConfiguration.applicationModuleName));
//     // beforeEach(angular.mock.module('users'));
//
//     beforeEach(angular.mock.inject(function ($injector) {
//       Auth = $injector.get('Auth');
//       $httpBackend = $injector.get('$httpBackend');
//     }));
//
//     beforeEach(inject(function(_$controller_, _$rootScope_,_$location_,_$q_,_$state_){
//       $controller = _$controller_;
//       $rootScope = _$rootScope_;
//       $location = _$location_;
//       $q = _$q_;
//       $state= _$state_
//       $scope = $rootScope.$new();
//       authenticationCtrl = $controller('AuthenticationCtrl', {
//         $scope : $scope,
//         Auth: Auth,
//       });
//
//     }));
//     //
//     // afterEach(function() {
//     //   $httpBackend.verifyNoOutstandingExpectation();
//     //   $httpBackend.verifyNoOutstandingRequest();
//     // });
//
//     describe('authenticationCtrl.signIn successful', function () {
//       beforeEach(function () {
//         spyOn(authenticationCtrl,'signIn').and.callThrough();
//         $httpBackend.when('POST', '/users/sign_in.json').respond(201, {"id":1,"email":"ekidemos@ekimetrics.com"});
//         authenticationCtrl.signIn();
//         $httpBackend.flush();
//       })
//       it('should call authenticationCtrl.signIn', function() {
//         expect(authenticationCtrl.signIn).toHaveBeenCalled();
//       });
//       it('should send post request', function() {
//         $httpBackend.expectPOST('/users/sign_in.json');
//       });
//       it('should not show error', function() {
//         expect(authenticationCtrl.invalidSignin).toBe(false);
//       });
//     });
//     describe('authenticationCtrl.signIn fail', function () {
//       beforeEach(function () {
//         spyOn(authenticationCtrl,'signIn').and.callThrough();
//         $httpBackend.when('POST', '/users/sign_in.json').respond(404, {"error":{}});
//         authenticationCtrl.signIn();
//         $httpBackend.flush();
//       })
//       it('should show error', function() {
//         expect(authenticationCtrl.invalidSignin).toBe(true);
//       });
//     });
//
//
//   });
// }());
