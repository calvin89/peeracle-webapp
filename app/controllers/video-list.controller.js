'use strict';

angular

.module('myApp.videoList', ['akoenig.deckgrid'])

.controller('VideoListCtrl', ['$scope', '$http', '$log', function($scope, $http, $log) {
$http.get('http://localhost:3000/v1/listFile').
  then(function(response) {
    // this callback will be called asynchronously
    // when the response is available
    $scope.videos = response.data;
  }, function(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
}]);