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
.controller('OrdersController', function($scope) {
  $scope.data = {
    "orders": [
      {
        "code": "A1S2D3",
        "user": {
          "name": "Harvey Sheen",
          "img": ""
        },
        "drinks": [
          {"name": "white russian", "price": "13"}
        ],
        "total": "13",
        "assignedTo": ""
      },
      {
        "code": "F4G5H6",
        "user": {
          "name": "Lex Steele",
          "img": ""
        },
        "drinks": [
          {"name": "red bull vodka", "price": "8"},
          {"name": "coke and rum", "price": "7"}
        ],
        "total": "15"
      },
       {
        "code": "F4G5H6",
        "user": {
          "name": "Lex Steele",
          "img": ""
        },
        "drinks": [
          {"name": "red bull vodka", "price": "8"},
          {"name": "coke and rum", "price": "7"}
        ],
        "total": "15"
      },
      {
        "code": "F4G5H6",
        "user": {
          "name": "Lex Steele",
          "img": ""
        },
        "drinks": [
          {"name": "red bull vodka", "price": "8"},
          {"name": "coke and rum", "price": "7"}
        ],
        "total": "15"
      }, {
        "code": "F4G5H6",
        "user": {
          "name": "Lex Steele",
          "img": ""
        },
        "drinks": [
          {"name": "red bull vodka", "price": "8"},
          {"name": "coke and rum", "price": "7"}
        ],
        "total": "15"
      }, {
        "code": "F4G5H6",
        "user": {
          "name": "Lex Steele",
          "img": ""
        },
        "drinks": [
          {"name": "red bull vodka", "price": "8"},
          {"name": "coke and rum", "price": "7"}
        ],
        "total": "15"
      }, {
        "code": "F4G5H6",
        "user": {
          "name": "Lex Steele",
          "img": ""
        },
        "drinks": [
          {"name": "red bull vodka", "price": "8"},
          {"name": "coke and rum", "price": "7"}
        ],
        "total": "15"
      }, {
        "code": "F4G5H6",
        "user": {
          "name": "Lex Steele",
          "img": ""
        },
        "drinks": [
          {"name": "red bull vodka", "price": "8"},
          {"name": "coke and rum", "price": "7"}
        ],
        "total": "15"
      }, {
        "code": "F4G5H6",
        "user": {
          "name": "Lex Steele",
          "img": ""
        },
        "drinks": [
          {"name": "red bull vodka", "price": "8"},
          {"name": "coke and rum", "price": "7"}
        ],
        "total": "15"
      },
      //{
      //   "code": "F4G5H6",
      //   "user": {
      //     "name": "Lex Steele",
      //     "img": ""
      //   },
      //   "drinks": [
      //     {"name": "red bull vodka", "price": "8"},
      //     {"name": "coke and rum", "price": "7"}
      //   ],
      //   "total": "15"
      // }, {
      //   "code": "F4G5H6",
      //   "user": {
      //     "name": "Lex Steele",
      //     "img": ""
      //   },
      //   "drinks": [
      //     {"name": "red bull vodka", "price": "8"},
      //     {"name": "coke and rum", "price": "7"}
      //   ],
      //   "total": "15"
      // }, {
      //   "code": "F4G5H6",
      //   "user": {
      //     "name": "Lex Steele",
      //     "img": ""
      //   },
      //   "drinks": [
      //     {"name": "red bull vodka", "price": "8"},
      //     {"name": "coke and rum", "price": "7"}
      //   ],
      //   "total": "15"
      // }, {
      //   "code": "F4G5H6",
      //   "user": {
      //     "name": "Lex Steele",
      //     "img": ""
      //   },
      //   "drinks": [
      //     {"name": "red bull vodka", "price": "8"},
      //     {"name": "coke and rum", "price": "7"}
      //   ],
      //   "total": "15"
      // }, {
      //   "code": "F4G5H6",
      //   "user": {
      //     "name": "Lex Steele",
      //     "img": ""
      //   },
      //   "drinks": [
      //     {"name": "red bull vodka", "price": "8"},
      //     {"name": "coke and rum", "price": "7"}
      //   ],
      //   "total": "15"
      // }, {
      //   "code": "F4G5H6",
      //   "user": {
      //     "name": "Lex Steele",
      //     "img": ""
      //   },
      //   "drinks": [
      //     {"name": "red bull vodka", "price": "8"},
      //     {"name": "coke and rum", "price": "7"}
      //   ],
      //   "total": "15"
      // }, {
      //   "code": "F4G5H6",
      //   "user": {
      //     "name": "Lex Steele",
      //     "img": ""
      //   },
      //   "drinks": [
      //     {"name": "red bull vodka", "price": "8"},
      //     {"name": "coke and rum", "price": "7"}
      //   ],
      //   "total": "15"
      // }, {
      //   "code": "F4G5H6",
      //   "user": {
      //     "name": "Lex Steele",
      //     "img": ""
      //   },
      //   "drinks": [
      //     {"name": "red bull vodka", "price": "8"},
      //     {"name": "coke and rum", "price": "7"}
      //   ],
      //   "total": "15"
      // }, {
      //   "code": "F4G5H6",
      //   "user": {
      //     "name": "Lex Steele",
      //     "img": ""
      //   },
      //   "drinks": [
      //     {"name": "red bull vodka", "price": "8"},
      //     {"name": "coke and rum", "price": "7"}
      //   ],
      //   "total": "15"
      // }, {
      //   "code": "F4G5H6",
      //   "user": {
      //     "name": "Lex Steele",
      //     "img": ""
      //   },
      //   "drinks": [
      //     {"name": "red bull vodka", "price": "8"},
      //     {"name": "coke and rum", "price": "7"}
      //   ],
      //   "total": "15"
      // }, {
      //   "code": "F4G5H6",
      //   "user": {
      //     "name": "Lex Steele",
      //     "img": ""
      //   },
      //   "drinks": [
      //     {"name": "red bull vodka", "price": "8"},
      //     {"name": "coke and rum", "price": "7"}
      //   ],
      //   "total": "15"
      // }, {
      //   "code": "F4G5H6",
      //   "user": {
      //     "name": "Lex Steele",
      //     "img": ""
      //   },
      //   "drinks": [
      //     {"name": "red bull vodka", "price": "8"},
      //     {"name": "coke and rum", "price": "7"}
      //   ],
      //   "total": "15"
      // }, {
      //   "code": "F4G5H6",
      //   "user": {
      //     "name": "Lex Steele",
      //     "img": ""
      //   },
      //   "drinks": [
      //     {"name": "red bull vodka", "price": "8"},
      //     {"name": "coke and rum", "price": "7"}
      //   ],
      //   "total": "15"
      // },
      // {
      //   "code": "F4G5H6",
      //   "user": {
      //     "name": "Mr. NeckBeard",
      //     "img": ""
      //   },
      //   "drinks": [
      //     {"name": "red bull vodka", "price": "8"},
      //     {"name": "coke and rum", "price": "7"}
      //   ],
      //   "total": "15"
      // },
      // {
      //   "code": "F4G5H6",
      //   "user": {
      //     "name": "Mr. NeckBeard",
      //     "img": ""
      //   },
      //   "drinks": [
      //     {"name": "red bull vodka", "price": "8"},
      //     {"name": "coke and rum", "price": "7"}
      //   ],
      //   "total": "15"
      // },{
      //   "code": "F4G5H6",
      //   "user": {
      //     "name": "Mr. NeckBeard",
      //     "img": ""
      //   },
      //   "drinks": [
      //     {"name": "red bull vodka", "price": "8"},
      //     {"name": "coke and rum", "price": "7"}
      //   ],
      //   "total": "15"
      // },{
      //   "code": "F4G5H6",
      //   "user": {
      //     "name": "Mr. NeckBeard",
      //     "img": ""
      //   },
      //   "drinks": [
      //     {"name": "red bull vodka", "price": "8"},
      //     {"name": "coke and rum", "price": "7"}
      //   ],
      //   "total": "15"
      // },
      ]
  };
});