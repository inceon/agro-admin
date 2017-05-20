(function () {
    'use strict';

    angular.module('app')
        .controller('NewsCtrl', ['$scope', 'app', NewsCtrl]);

    function NewsCtrl($scope, app) {

        $scope.$emit('changeTitle', 'Новости');
        var vm = this;

        vm.news = app.getNews();
        vm.newNewsData = {
            id: -1,
            photo: '',
            title: '',
            text: '',
            date: '',
            edit: true
        };
        vm.saveInfo = saveInfo;
        vm.deleteNews = deleteNews;
        vm.addNews = addNews;

        function saveInfo(news) {
            if (news.id !== -1) {
                app.saveNewsInfo(news);
            } else {
                app.addNews(news);
            }
            news.edit = false;
            vm.news = app.getNews();
        }

        function deleteNews(news) {
            app.deleteNews(news);
            vm.news = vm.news.filter(function (item) {
                return item.id != news.id;
            })
        }

        function addNews() {
            vm.news.push(vm.newNewsData);
        }
    }
}());
