angular
  .module("deckbrew")
  .controller("cardCtrl", function($scope, deckbrewSrvc, librarySrvc, $state) {
    deckbrewSrvc.gathererInfo($state.params.cardname).then(function(res) {
      $scope.gathererInfo = res;
    });
    $scope.addToLibrary = function(name) {
      console.log(name);
      librarySrvc.addToLibrary(name);
      $state.go("library");
    };
  });
