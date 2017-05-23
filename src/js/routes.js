(function () {
    'use strict';

    angular
        .module('app')
        .config(['$stateProvider', '$urlRouterProvider', '$httpProvider', config]);

    function config($stateProvider, $urlRouterProvider, $httpProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/');
        delete $httpProvider.defaults.headers.common['X-Requested-With'];

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
            })
            .state('app.categories', {
                url: '/categories',
                templateUrl: 'templates/categories.html',
                controller: 'CategoriesCtrl',
                controllerAs: 'vm'
            })
            .state('app.suggestion', {
                url: '/suggestion',
                templateUrl: 'templates/suggestion.html',
                controller: 'SuggestionCtrl',
                controllerAs: 'vm'
            })
            .state('app.services', {
                url: '/services',
                templateUrl: 'templates/services.html',
                controller: 'ServicesCtrl',
                controllerAs: 'vm'
            });
    }
}());
