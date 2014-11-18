angular.module('app.main.profile', [])

.config(function($stateProvider) {
  $stateProvider
    .state('app.main.profile', {
      url: '/profile',
      views: {
        'right-view': {
          templateUrl: 'app/main/profile/profile.html',
          controller: 'ProfileController'
        }
      }
    });
})
.controller('ProfileController', function($scope) {

});