// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])


.run(function($ionicPlatform) {
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
})

//Adding users*************

 // kick off the platform web client
// Ionic.io();


// // this will give you a fresh user or the previously saved 'current user'
// var user = Ionic.User.current();

// // if the user doesn't have an id, you'll need to give it one.
// if (!user.id) {
//   user.id = Ionic.User.anonymousId();
//   // user.id = 'your-custom-user-id';
// }

// //persist the user
// user.save();


//Push************

// var push = new Ionic.Push({
//   "debug": true,
//   "onNotification": function(notification) {
//     var payload = notification.payload;
//     console.log(notification, payload);
//   },
//   "onRegister": function(data) {
//     console.log(data.token);
//   },
//   "pluginConfig": {
//     "ios": {
//       "badge": true,
//       "sound": true
//      },
//      "android": {
//        "iconColor": "#343434"
//      }
//   } 
// });


//Adding states**************

.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
     .state('tabs',{
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html'
     })

     .state('tabs.home', {
      url: '/home',
      views: {
        'home-tab' : {
          templateUrl: 'templates/home.html'
          
        }
      }
     })

     .state('tabs.list', {
      url: '/list',
      views: {
        'list-tab' : {
          templateUrl: 'templates/list.html',
          controller: 'ListController'
        }
      }
     })

     


     
     .state('tabs.detail', {
      url: '/list/:aId',
      views: {
        'list-tab' : {
          templateUrl: 'templates/detail.html',
          controller: 'ListController'
        }
      }
     })

     

    $urlRouterProvider.otherwise('/tab/home');  
})


//Contollers*********************


.controller('ListController', ['$scope', '$http', '$state', 
    function($scope, $http, $state){
      $http.get('datas/data.json').success(function(data){
        $scope.runs = data.runs;
        $scope.whichrun = $state.params.aId;






        

        $scope.doRefresh = function(){
        $http.get('datas/data.json').success(function(data){
        $scope.runs = data.runs;
        $scope.$broadcast('scroll.refreshComplete');  
        });

        }
        
        
        });

  }]);


// Adding Buttons************

// .controller('DashCtrl', function($scope) {
  
//   var deploy = new Ionic.Deploy();
  
//   // Update app code with new release from Ionic Deploy
//   $scope.doUpdate = function() {
//     deploy.update().then(function(res) {
//       console.log('Ionic Deploy: Update Success! ', res);
//     }, function(err) {
//       console.log('Ionic Deploy: Update error! ', err);
//     }, function(prog) {
//       console.log('Ionic Deploy: Progress... ', prog);
//     });
//   };

//   // Check Ionic Deploy for new code
//   $scope.checkForUpdates = function() {
//     console.log('Ionic Deploy: Checking for updates');
//     deploy.check().then(function(hasUpdate) {
//       console.log('Ionic Deploy: Update available: ' + hasUpdate);
//       $scope.hasUpdate = hasUpdate;
//     }, function(err) {
//       console.error('Ionic Deploy: Unable to check for updates', err);
//     });
//   }
// })

// <button class="button button-primary button-block " ng-click="checkForUpdates()">
//   Check for updates
// </button>
// <button class="button button-stable button-block button-pulse" ng-if="hasUpdate" ng-click="doUpdate()">
//   download update
// </button>


