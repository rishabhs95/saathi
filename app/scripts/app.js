'use strict';

/**
 * @ngdoc overview
 * @name mytodoApp
 * @description
 * # mytodoApp
 *
 * Main module of the application.
 */
angular
    .module('mytodoApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.sortable',
        'LocalStorageModule',
        'ngMaterial'
    ])
    .config(['localStorageServiceProvider', function(localStorageServiceProvider) {
        localStorageServiceProvider.setPrefix('ls');
    }])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/hire', {
                templateUrl: 'views/hire.html',
                controller: 'HireCtrl'
            })
            .when('/ngo', {
                templateUrl: 'views/ngo.html',
                controller: 'NgoCtrl',
            })
            .when('/ngoprof', {
                templateUrl: 'views/ngoprof.html',
                controller: 'NgoCtrl',
            })
            .when('/worker', {
                templateUrl: 'views/worker.html',
                controller: 'WorkerCtrl',
            })
            .when('/workerprof', {
                templateUrl: 'views/workerprof.html',
                controller: 'WorkerCtrl',
            })
            .otherwise({
                redirectTo: '/'
            });
    });
