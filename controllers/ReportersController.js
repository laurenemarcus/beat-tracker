beatAssignment.controller("ReportersCtrl", function ReportersCtrl($scope, $stateParams, BeatsFactory, UtilitiesFactory) {
  $scope.beat = UtilitiesFactory.findById(BeatsFactory.beats, $stateParams.beatId)
  $scope.addReporter = function() {
    $scope.beat.reporters.push({ reporterName: $scope.reporterName, id: $scope.beat.reporters.length + 1, reporterYears: $scope.reporterYears, reporterBirthday: $scope.reporterBirthday });
    $scope.reporterName = null;
    $scope.reporterYears = null;
    $scope.reporterBirthday = null;
  }
  $scope.reporter = UtilitiesFactory.findById($scope.beat.reporters, $stateParams.reporterId)

});
