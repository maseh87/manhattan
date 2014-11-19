angular.module('app.main.orders', [])

.config(function($stateProvider) {
  $stateProvider
    .state('app.main.orders', {
      url: '/orders',
      views: {
        'right-view': {
          templateUrl: 'app/main/orders/orders.html',
          controller: 'OrdersController'
        }
      }
    });
})
.controller('OrdersController', function($scope) {
  var item = {
    face: '/img/list/60.jpeg',
    what: 'Brunch this weekend?',
    who: 'Min Li Chan',
    notes: "I'll be in your neighborhood doing errands."
  };
  $scope.todos = [];
  for (var i = 0; i < 3; i++) {
    $scope.todos.push({
      face: '/img/list/60.jpeg',
      what: "Brunch this weekend?",
      who: "Min Li Chan",
      notes: "I'll be in your neighborhood doing errands."
    });
  }
});