// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', [
  'ionic',
  'app.main',
  'app.services',
  'app.login',
  'ui.router',
  'ngMaterial',
  'auth0',
  'angular-storage',
  'angular-jwt',
  'app.auth'
])

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider, authProvider) {
  $stateProvider
    .state('app', {
      url: '/',
      template: '<ion-nav-view></ion-nav-view>',
      abstract: true
    });

  authProvider.init({
    domain: 'sipdrink.auth0.com',
    clientID: 'mYLZ1owVTysjstR9o6PvdHT7Kqvj5Qa9',
    loginState: 'app.login'
  });

  $ionicConfigProvider.views.transition('android').maxCache(0);
  $urlRouterProvider.otherwise('/main/orders');
})
.run(function($ionicPlatform, auth, store, $state, jwtHelper) {
  auth.hookEvents();
  if (!auth.isAuthenticated) {
   var token = store.get('token');
   if (token) {
     if (!jwtHelper.isTokenExpired(token)) {
       auth.authenticate(store.get('profile'), token);
     } else {
       // Either show Login page or use the refresh token to get a new idToken

       $state.go('app.login');
     }
   }
 }
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});