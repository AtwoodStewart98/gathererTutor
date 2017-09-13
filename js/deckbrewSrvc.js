angular.module("deckbrew").service("deckbrewSrvc", function($http) {
  this.gathererInfo = function(name) {
    return $http
      .get("https://api.deckbrew.com/mtg/cards?name=" + name)
      .then(function(resp) {
        return resp.data;
      });
  };
});
