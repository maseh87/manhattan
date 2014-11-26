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
.controller('OrdersController', function($scope, $mdDialog, OrderFactory) {
  $scope.data = OrderFactory.orders;

  $scope.assignTo = function(event) {
    console.log($mdDialog);
    $mdDialog.show({
      templateUrl: 'app/main/orders/dialog.tpl.html',
      targetEvent: event,
      controller: function($scope, OrderFactory) {
        $scope.bartenders = OrderFactory.bartenders;
      }
    });
  };

});





