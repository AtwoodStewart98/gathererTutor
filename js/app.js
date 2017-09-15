angular
  .module("deckbrew", ["ui.router"])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state("home", {
        url: "/",
        templateUrl: "../views/selectors.html"
      })
      .state("tutor", {
        url: "/search-results/:name",
        templateUrl: "../views/search-results.html",
        controller: "searchCtrl"
      })
      .state("card", {
        url: "/search-results/card/:cardname",
        templateUrl: "../views/card-display.html",
        controller: "cardCtrl"
      })
      .state("library", {
        url: "/my-libraries",
        templateUrl: "../views/library.html",
        controller: "libraryCtrl"
      });
    $urlRouterProvider.otherwise("/");
  })
  .config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
      "self",
      "https://api.deckbrew.com/mtg/cards"
    ]);
  });
