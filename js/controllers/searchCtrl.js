angular
  .module("deckbrew")
  .controller("searchCtrl", function($scope, deckbrewSrvc, $stateParams) {
    console.log($stateParams);
    deckbrewSrvc.gathererInfo().then(function(res) {
      $scope.gathererInfo = res.data.filter(function(searchParams) {
        return searchParams.name
          .toLowerCase()
          .includes($stateParams.name.toLowerCase());
      });
      console.log($scope.gathererInfo);
    });
  });
