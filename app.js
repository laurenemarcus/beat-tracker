var beatAssignment = angular.module('beatAssignment', ['ui.router']);

beatAssignment.config(function($stateProvider) {
  $stateProvider.state('beats', {
    url: "",
    templateUrl: "partials/beats.html",
    controller: "BeatsCtrl"
  });
});
