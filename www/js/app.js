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


.controller('ListController', ['$scope', '$http', '$state',
    function($scope, $http, $state){
      $http.get('js/data.json').success(function(data){
        $scope.runs = data;
        $scope.whichrun = $state.params.aId;






        

        $scope.doRefresh = function(){
        $http.get('js/data.json').success(function(data){
        $scope.runs = data;
        $scope.$broadcast('scroll.refreshComplete');  
        });

        }
        
        
        });

  }]);



// var phonecatApp = angular.module('phonecatApp', [
//   'ngRoute',
//   'phonecatControllers',
//   'phonecatAnimations',
//   'phonecatServices'
// ]);

// phonecatApp.config(['$routeProvider',
//   function($routeProvider) {
//     $routeProvider.
//       when('/datas', {
//         templateUrl: './templates/list.html',
//         controller: 'PhoneListCtrl'
//       }).
//       when('/data/:phoneId', {
//         templateUrl: './templates/detail.html',
//         controller: 'PhoneDetailCtrl'
//       }).
//       otherwise({
//         redirectTo: '/datas'
//       });
//   }]);



