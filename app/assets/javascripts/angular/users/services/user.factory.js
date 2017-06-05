(function (app) {
  'use strict';

  angular.module("users").factory('User',['$resource', function($resource){

    var url = app.urlEndpoint + 'users/:userid';
    return $resource(
      url,
      {
        userid: '@userid'
      },
      {
        index: {
          method: "GET",
          params: {
            userid: '@userid'
          },
          isArray: true
        },
        show: {
          method: "GET",
          params: {
            userid: '@userid'
          },
          isArray: false
        },
        create: {
          method: "POST",
          params: {
            userid: '@userid'
          },
          isArray: false
        },
        update: {
          method: "PUT",
          params: {
            userid: '@userid'
          },
          isArray: false
        },
        delete: {
          method: "DELETE",
          params: {
            userid: '@userid'
          },
          isArray: false
        }
      }
    );

  }])
}(ApplicationConfiguration));
