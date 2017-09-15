angular.module("deckbrew").service("librarySrvc", function() {
  this.library = [];
  this.addToLibrary = function(name) {
    console.log(name);
    this.library.push(name);
    console.log(this.library);
  };
});
