// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//


//= require jquery

//= require angular/angular
//= require angular-rails-templates
//= require angular-ui-router/release/angular-ui-router
//= require angular-animate/angular-animate
//= require angular-sanitize/angular-sanitize
//= require AngularDevise/lib/devise
//= require angular-resource/angular-resource

//= require bootstrap-sprockets
// = require angular-bootstrap/ui-bootstrap-tpls.min

//= require config.js
//= require main.js

//= require ./angular/core/core.module
//= require ./angular/users/users.module
//= require_tree ./angular
//= require_tree .

//= stub_glob ./angular/**/*.test.js
