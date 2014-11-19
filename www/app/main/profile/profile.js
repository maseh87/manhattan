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
  var item = {
    face: '/img/list/60.jpeg',
    what: 'Brunch this weekend?',
    who: 'Min Li Chan',
    notes: "I'll be in your neighborhood doing errands."
  };
  $scope.todos = [];
  for (var i = 0; i < 4; i++) {
    $scope.todos.push({
      face: '/img/list/60.jpeg',
      what: "Brunch this weekend?",
      who: "Min Li Chan",
      notes: "I'll be in your neighborhood doing errands."
    });
  }
});