angular.module("deckbrew").service("deckbrewSrvc", function($http) {
  this.gathererInfo = function() {
    return $http.get("https://api.deckbrew.com/mtg/cards?page=42");
  };
});
