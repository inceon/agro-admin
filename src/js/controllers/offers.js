(function () {
    'use strict';

    angular.module('app')
        .controller('OffersCtrl', ['$scope', 'app', OffersCtrl]);

    function OffersCtrl($scope, app) {

        $scope.$emit('changeTitle', 'Заявки');
        var vm = this;

        vm.deleteOffer = deleteOffer;
        updateList();

        function updateList() {
            app.getOffers()
                .then(function (res) {
                    vm.offers = res;
                    angular.forEach(vm.offers, function (item) {
                        if (item.type === 'buy') {
                            item.type = 'Купить';
                        } else {
                            item.type = 'Продать';
                        }

                        app.getComments(item.objectId)
                            .then(function (res) {
                                item.comments = res;
                            });

                        app.getFiles(item.objectId)
                            .then(function (res) {
                                item.files = res;
                            });

                        app.getUser(item.user)
                            .then(function (res) {
                                item.user = res[0];
                            });

                        app.getCategory(item.category)
                            .then(function (res) {
                                item.category = res[0].name;
                            });

                        app.getSubCategory(item.subcategory)
                            .then(function (res) {
                                item.subcategory = res[0].name;
                            });
                    })
                })
                .then(function () {
                    console.log(vm.offers);
                });
        }

        function deleteOffer(offer) {
            if (confirm("Удалить эту запись?")) {
                app.deleteOffer(offer)
                    .then(function () {
                        updateList();
                    });
            }
        }

    }
}());
