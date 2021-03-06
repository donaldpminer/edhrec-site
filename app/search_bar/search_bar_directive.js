app.directive("searchBar", function() {
  return {
    restrict: "E",
    templateUrl: "app/search_bar/search_bar.html",
    controller: function($scope, $location, $http, settings) {
      $scope.sampleCommander = settings.SAMPLE_COMMANDER;
      $scope.sampleDeckUrl = settings.SAMPLE_DECK_URL;
      
      $scope.search = function() {
        var query = $("#query").val();
        if (query.trim().length > 0) {
          $location.path("/recommendations").search({ "q": query });
        }
      };
      
      $http.get("public/commanders.txt").then(function(result) {
        $("#query").autocomplete({
          source: result.data.split("\n"),
          select: function(event, ui) {
            $("#query").val(ui.item.value);
            $("#search_button").click();
          }
        });  
      });
      
      $("#query").focus();
    }
  }
});
