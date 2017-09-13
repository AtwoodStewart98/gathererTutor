angular
  .module("deckbrew")
  .controller("deckbrewCtrl", function($scope, deckbrewSrvc, $http) {
    $scope.gathererInfo = deckbrewSrvc.gathererInfo().then(resp => {
      $scope.cards = resp.data;
    });
  });
