(function () {
    'use strict';

    angular
        .module('app')
        .config(['$stateProvider', '$urlRouterProvider', config]);

    function config($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/');

        // Application routes
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl',
                controllerAs: 'vm'
            })
            .state('app', {
                templateUrl: 'templates/left_menu.html',
                controller: 'LeftMenuCtrl',
                controllerAs: 'vm',
                abstract: true
            })
            .state('app.users', {
                url: '/users',
                templateUrl: 'templates/users.html',
                controller: 'UsersCtrl',
                controllerAs: 'vm'
            })
            .state('app.news', {
                url: '/news',
                templateUrl: 'templates/news.html',
                controller: 'NewsCtrl',
                controllerAs: 'vm'
            });
    }
}());
