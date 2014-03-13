'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
/*angular.module('coco.services', []).
  value('version', '0.1');*/

var services = angular.module('coco.services', ['ngResource']);

services.factory('Post', ['$resource',
  function($resource){
    return $resource('api/posts/:postPK.json', {}, {
      query: {method:'GET', params:{postPK:''}, isArray:true, cache: false}
    });
  }]);

services.factory('Block', ['$resource',
  function($resource){
    return $resource('api/blocks/:blockPK.json?13327', {}, {
      query: {method:'GET', params:{blockPK:''}, isArray:true}
    });
}]);

services.factory('PersonalBlock', ['$resource',
  function($resource){
    return $resource('api/personal/:blockPK.json', {}, {
      query: {method:'GET', params:{blockPK:''}, isArray:true}
    });
}]);

services.value("version", "0.2");
