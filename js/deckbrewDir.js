angular.module("deckbrew").directive("deckbrewDir", function() {
  return {
    templateUrl: "https://api.deckbrew.com/mtg/cards",
    restrict: "EA"
    // scope: {
    //   name: "@",
    //   id: "@",
    //   url: "@",
    //   store_url: "@",
    //   types: "@",
    //   subtypes: "@",
    // }
  };
});
