(function (app) {
  'use strict';

  app.registerModule('users');
  app.registerModule('users.routes', ['ui.router', 'core.routes']);
}(ApplicationConfiguration));
