angular
  .module("deckbrew")
  .controller("cardCtrl", function($scope, deckbrewSrvc, $stateParams) {
    deckbrewSrvc.gathererInfo($stateParams.cardname).then(function(res) {
      $scope.gathererInfo = res;
      console.log(res);
    });
  });
