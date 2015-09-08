'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'angularFileUpload',
  'myApp.uploadPage',
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/upload-page', {
      templateUrl: 'views/upload-page.view.html',
      controller: 'UploadPageCtrl',
    }).otherwise({redirectTo: '/'});
}]);
