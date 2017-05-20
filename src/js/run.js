(function () {
    'use strict';

    angular
        .module('app')
        .run(['$state', run]);

    function run($state) {
        $state.go('login');
    }
}());
