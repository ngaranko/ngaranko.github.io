'use strict';


// Declare app level module which depends on filters, and services
angular.module('coco', [
    'ngRoute',
    'ngSanitize',
    'coco.filters',
    'coco.services',
    'coco.directives',
    'coco.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: '/static/templates/index.html', controller: 'index'});
  $routeProvider.when('/personal/', {templateUrl: '/static/templates/index.html', controller: 'personal'});
  $routeProvider.when('/posts/:postPK', {templateUrl: '/static/templates/post.html', controller: 'post'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
