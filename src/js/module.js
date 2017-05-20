(function () {
    angular
        .module('app', [
            'ui.bootstrap',
            'ui.router',
            'ngCookies',
            'ngAnimate',
            'ngAria',
            'toastr'
        ])
        .constant('firebase', firebase);
}());
