(function () {
    'use strict';

    angular.module('app')
        .controller('LoginCtrl', ['$scope', '$state', 'user', 'toastr', LoginCtrl]);

    function LoginCtrl($scope, $state, user, toastr) {

        var vm = this;
        vm.login = login;

        vm.data = {
            email: '',
            password: ''
        };

        function login() {
            if (vm.data.email.length < 4) {
                toastr.error('Please enter an email address.');
                return;
            }
            if (vm.data.password.length < 4) {
                toastr.error('Please enter a password.');
                return;
            }

            if (user.login(vm.data)) {
                $state.go('app.users');
            }
            // firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            //     var errorCode = error.code;
            //     var errorMessage = error.message;
            //     toastr.error(errorMessage);
            // });
        }

        // $state.go('app.users');
    }
}());
