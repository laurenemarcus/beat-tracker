beatAssignment.controller("ReportersCtrl", function ReportersCtrl($scope, $stateParams, BeatsFactory, UtilitiesFactory) {
  $scope.beat = UtilitiesFactory.findById(BeatsFactory.beats, $stateParams.beatId)
  $scope.addReporter = function() {
    $scope.beat.reporters.push({ reporterName: $scope.reporterName, reporterYears: $scope.reporterYears, reporterBirthday: $scope.reporterBirthday });
    $scope.reporterName = null;
    $scope.reporterYears = null;
    $scope.reporterBirthday = null;
  }
});
