angular
  .module("deckbrew", ["ui.router"])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state("home", {
        url: "/",
        templateUrl: "../views/selectors.html"
      })
      .state("tutor", {
        url: "/search-results/:id",
        templateUrl: "../views/search-results.html"
      })
      .state("library", {
        url: "/my-libraries",
        templateUrl: "../views/library.html"
      });
  })
  .config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
      "self",
      "https://api.deckbrew.com/mtg/cards"
    ]);
  });
