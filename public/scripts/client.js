/*jshint esversion: 6 */
const app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/templates/home.html',
        controller: 'HomeController',
        controllerAs: 'hc'
      })
      .when('/hoods', {
        templateUrl: 'views/templates/hoods.html',
        controller: 'HoodsController',
        controllerAs: 'hoodsc'
      })
      .otherwise({
        redirectTo: 'home'
      });
  });
