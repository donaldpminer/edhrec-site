angular.module('pageView', []).run(function($rootScope, $window, $location) {
  $rootScope.$on('$viewContentLoaded', function() {
    $window.ga('send', 'pageview', { page: $location.path() });
  });
})

var app = angular.module("app", ["ngRoute", "pageView"]);

app.config(function($provide) {
  $provide.decorator("$exceptionHandler", function($delegate, eventService) {
    return function(exception, cause) {
      $delegate(exception, cause);
      eventService.incrementExceptionCount(exception.name, exception.message);
    };
  });
});

app.config(function ($routeProvider) {
  $routeProvider
      .when("/", {
        controller: "HomeController",
        templateUrl: "app/home/home.html"
      })
      .when("/recommendations", {
        controller: "RecommendationsController",
        templateUrl: "app/recommendations/recommendations.html"
      })
      .otherwise({ redirectTo: "/" });
});
