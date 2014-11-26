angular.module('app.main.orders', [
  'app.main.orders.details'
])

.config(function($stateProvider) {
  $stateProvider
    .state('app.main.orders', {
      url: '/orders',
      views: {
        'right-view': {
          templateUrl: 'app/main/orders/orders.html',
          controller: 'OrdersController'
        }
      },
      data: {
        // requiresLogin: true
      }
    })
    .state('app.main.orderDetail', {
      url: '/orders/:id',
      views: {
        'right-view': {
          templateUrl: 'app/main/orders/details/details.html'
        }
      }
    });
})
.controller('OrdersController', function($scope, OrderFactory) {
  $scope.data = OrderFactory.orders;
});