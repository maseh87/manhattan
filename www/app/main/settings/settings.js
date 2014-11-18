angular.module('app.main.settings', [])

.config(function($stateProvider) {
  $stateProvider
    .state('app.main.settings', {
      url: '/settings',
      views: {
        'right-view': {
          templateUrl: 'app/main/settings/settings.html',
          controller: 'SettingsController'
        }
      }
    });
})
.controller('SettingsController', function($scope) {

});