angular.module('app.login', [

])

.config(function($stateProvider) {
  $stateProvider
    .state('app.login', {
      url: 'login',
      templateUrl: 'app/login/login.html',
      controller: 'LoginController'
    });
})
.run(function() {

})
.controller('LoginController', function($scope, AuthFactory, $state) {
  $scope.signin = function() {
    AuthFactory.login()
      .then(function(profile) {
        $state.go('app.main.orders');
      }).catch(function(err) {
        console.log(err);
      });
  };
  $scope.signin();
});