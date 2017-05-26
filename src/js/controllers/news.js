(function () {
    'use strict';

    angular.module('app')
        .controller('NewsCtrl', ['$scope', 'app', NewsCtrl]);

    function NewsCtrl($scope, app) {

        $scope.$emit('changeTitle', 'Новости');
        var vm = this;


        vm.newNewsData = {
            photo: '',
            title: '',
            text: '',
            edit: true
        };
        vm.saveInfo = saveInfo;
        vm.deleteNews = deleteNews;
        vm.addNews = addNews;
        updateList();

        function updateList() {
            app.getNews()
                .then(function (res) {
                    vm.news = res;
                });
        }

        function saveInfo(news) {
            app.uploadFile(vm.data.file)
                .then(function (res) {
                    news.photo = res.url;
                    if (news.objectId) {
                        app.saveNewsInfo(news)
                            .then(function () {
                                updateList();
                            });
                    } else {
                        app.addNews(news)
                            .then(function () {
                                updateList();
                            });
                    }
                });
            news.edit = false;
        }

        function deleteNews(news) {
            if (confirm("Удалить эту запись?")) {
                app.deleteNews(news)
                    .then(function () {
                        updateList();
                    });
            }
        }

        function addNews() {
            vm.news.push(vm.newNewsData);
        }
    }
}());
