(function () {
    'use strict';

    angular.module('app')
        .controller('ServicesCtrl', ['$scope', 'app', ServicesCtrl]);

    function ServicesCtrl($scope, app) {

        $scope.$emit('changeTitle', 'Сервисы');
        var vm = this;

        vm.saveInfo = saveInfo;
        vm.deleteService = deleteService;
        vm.deleteComment = deleteComment;
        updateList();

        function updateList() {
            app.getServices()
                .then(function (res) {
                    vm.services = res;
                    angular.forEach(vm.services, function (item) {
                        app.getComments(item.objectId)
                            .then(function (res) {
                                item.comments = res;
                            });
                    });
                });
        }

        function saveInfo(service) {
            if (service.objectId) {
                app.saveServiceInfo(service)
                    .then(function () {
                        updateList();
                    });
            } else {
                app.addService(service)
                    .then(function () {
                        updateList();
                    });
            }
            service.edit = false;
        }

        function deleteService(service) {
            if (confirm("Удалить эту запись?")) {
                app.deleteService(service)
                    .then(function () {
                        updateList();
                    });
            }
        }

        function deleteComment(comment) {
            if (confirm("Удалить этот комментарий?")) {
                app.deleteComment(comment)
                    .then(function () {
                        updateList();
                    });
            }
        }
    }
}());
