angular
  .module("deckbrew")
  .controller("searchCtrl", function($scope, deckbrewSrvc, $stateParams) {
    deckbrewSrvc.gathererInfo($stateParams.name).then(function(res) {
      $scope.gathererInfo = res;
    });
  });
