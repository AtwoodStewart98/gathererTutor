angular.module("deckbrew", []).config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    "self",
    "https://api.deckbrew.com/mtg/cards"
  ]);
});
