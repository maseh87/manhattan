angular.module('app.main', [])

.config(function($stateProvider) {
  $stateProvider
    .state('app.main', {
      templateUrl: 'app/main/main.html',
      url: 'main'
    });
});