angular.module('app.main.drinks', [])

.config(function($stateProvider) {
  $stateProvider
    .state('app.main.drinks', {
      url: '/drinks',
      views: {
        'right-view': {
          templateUrl: 'app/main/drinks/drinks.html',
          controller: 'DrinksController'
        }
      }
    });
})
.controller('DrinksController', function($scope) {

});