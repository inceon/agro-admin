(function () {
    'use strict';

    angular.module('app')
        .controller('UsersCtrl', ['$scope', 'app', UsersCtrl]);

    function UsersCtrl($scope, app) {

        $scope.$emit('changeTitle', 'Пользователи');
        var vm = this;

        vm.users = app.getUsers();
        vm.newUserData = {
            id: -1,
            photo: '',
            name: '',
            surname: '',
            phone: '',
            admin: false,
            edit: true
        };
        vm.saveInfo = saveInfo;
        vm.deleteUser = deleteUser;
        vm.addUser = addUser;

        function saveInfo(user) {
            if (user.id !== -1) {
                app.saveUserInfo(user);
            } else {
                app.addUser(user);
            }
            user.edit = false;
            vm.users = app.getUsers();
        }

        function deleteUser(user) {
            app.deleteUser(user);
            vm.users = vm.users.filter(function (item) {
                return item.id != user.id;
            })
        }

        function addUser() {
            vm.users.push(vm.newUserData);
        }
    }
}());
