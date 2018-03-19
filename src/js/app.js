angular.module('SpeBolivia', [
  'ngRoute',
  'mobile-angular-ui',
  'SpeBolivia.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});
});