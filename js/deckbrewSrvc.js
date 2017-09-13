angular.module("deckbrew").service("deckbrewSrvc", function($http) {
  //this.gathererInfo = deckbrewDir.data;
  this.gathererInfo = function() {
    return $http.get("https://api.deckbrew.com/mtg/cards?page=0");
  };
});
