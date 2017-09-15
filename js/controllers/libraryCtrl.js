angular
  .module("deckbrew")
  .controller("libraryCtrl", function(
    $scope,
    deckbrewSrvc,
    $stateParams,
    librarySrvc
  ) {
    $scope.library = librarySrvc.library;
    deckbrewSrvc.gathererInfo($stateParams.name).then(function(res) {
      $scope.gathererInfo = res;
    });
  });
