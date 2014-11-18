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

});