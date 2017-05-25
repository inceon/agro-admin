(function () {
    'use strict';

    angular.module('app')
        .controller('UploadCtrl', ['$scope', 'app', UploadCtrl]);

    function UploadCtrl($scope, app) {

        $scope.$emit('changeTitle', 'Загрузка файлов');
        var vm = this;

        vm.upload = upload;
        vm.data = {
            file: null
        };
        vm.link = null;

        function upload() {
            app.uploadFile(vm.data.file)
                .then(function (res) {
                    console.log(res);
                    vm.link = res.url;
                });
        }

    }
}());
