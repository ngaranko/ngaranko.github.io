'use strict';

/* Controllers */

angular.module('coco.controllers', []).
  controller('index', ['$scope', 'Block', '$templateCache',
      function($scope, Block, $templateCache) {
          $scope.clearCache = function() { 
              $templateCache.removeAll();
          }
          $scope.blocks = Block.query();
  }])
  .controller('personal', ['$scope', 'PersonalBlock',
      function($scope, PersonalBlock) {
          $scope.blocks = PersonalBlock.query();

  }])
  .controller('post', ['$scope', '$routeParams', 'Post',
      function($scope, $routeParams, Post) {
          $scope.post = Post.get({postPK: $routeParams.postPK}, function(post) {
          });
  }]);
