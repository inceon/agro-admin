(function () {
    angular
        .module('app', [
            'ui.bootstrap',
            'ui.router',
            'ngStorage',
            'ngSanitize',
            'ngCookies',
            'ngAnimate',
            'ngAria',
            'toastr'
        ])
        .constant('back4app', {
            appId: 'fPfi2t7V7TqDfJzdUpa220ZsiWbx7FGJbgoR6Mdz',
            token: 'smwDVqORGP1zeMPeLzlfjOP61dWbbQmK4fPER6HA'
        });
}());
