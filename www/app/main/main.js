angular.module('app.main', [
  'app.main.profile',
  'app.main.drinks',
  'app.main.settings'
])

.config(function($stateProvider) {
  $stateProvider
    .state('app.main', {
      templateUrl: 'app/main/main.html',
      url: 'main',
      abstract: true,
      controller: 'MainController'
    });
})
.controller('MainController', function($scope, $mdSidenav) {
  $scope.toggleLeft = function() {
    $mdSidenav('left').toggle();
  };
});