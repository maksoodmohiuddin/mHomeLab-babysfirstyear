// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in menu.controllers.js
angular.module('mHomeLab', ['ionic', 'mHomeLab.controllers', 'mHomeLab.services'])

.constant('config', {
    appName: 'BabysFirstYear',
    dataMode: 0,
    dataUrl: 'http://maksoodmohiuddin.com/test'
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'app/menu/menu.template.html',
    controller: 'MenuCtrl'
  })
  .state('app.welcome', {
      url: '/welcome',
      views: {
        'menuContent': {
          templateUrl: 'app/welcome/welcome.template.html'
        }
      }
    })
    .state('app.add', {
        url: '/add',
        views: {
            'menuContent': {
                templateUrl: 'app/menu/add.template.html'
            }
        }
    })
    .state('app.photocards', {
      url: '/photocards',
      views: {
        'menuContent': {
          templateUrl: 'app/photos/photocards.template.html',
          controller: 'PhotoCardsCtrl'
        }
      }
    })

  .state('app.photocard', {
    url: '/photocards/:photocardId',
    views: {
      'menuContent': {
        templateUrl: 'app/photos/photocard.template.html',
        controller: 'PhotoCardCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/welcome');
});
