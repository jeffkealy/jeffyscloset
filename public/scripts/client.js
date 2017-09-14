/*jshint esversion: 6 */
const app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/templates/home.html',
        controller: 'HomeController',
        controllerAs: 'home'
      })
      .otherwise({
        redirectTo: 'home'
      });
  });
