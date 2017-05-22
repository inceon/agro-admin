(function () {
    'use strict';

    angular.module('app')
        .controller('CategoriesCtrl', ['$scope', 'app', CategoriesCtrl]);

    function CategoriesCtrl($scope, app) {

        $scope.$emit('changeTitle', 'Категории');
        var vm = this;
        vm.addCategory = addCategory;
        vm.updateList = updateList;
        vm.saveInfo = saveInfo;
        vm.deleteCategory = deleteCategory;

        // vm.categories = [{
        //     name: 'Item 1',
        //     subcategories: [{
        //         name: 'Item 1.1',
        //     },{
        //         name: 'Item 1.2',
        //     },{
        //         name: 'Item 1.3',
        //     }]
        // }, {
        //     name: 'Item 2',
        //     subcategories: [{
        //         name: 'Item 2.1',
        //     },{
        //         name: 'Item 2.2',
        //     },{
        //         name: 'Item 2.3',
        //     }]
        // }, {
        //     name: 'Item 3',
        //     subcategories: [{
        //         name: 'Item 3.1',
        //     },{
        //         name: 'Item 3.2',
        //     },{
        //         name: 'Item 3.3',
        //     }]
        // },{
        //     name: 'Item 4',
        //     subcategories: [{
        //         name: 'Item 4.1',
        //     },{
        //         name: 'Item 4.2',
        //     },{
        //         name: 'Item .3',
        //     }]
        // }];

        vm.newCategory = {
            name: '',
            edit: true,
            subcategories: []
        };

        updateList();

        function addCategory() {
            vm.categories.push(vm.newCategory);
        }

        function updateList() {
            app.getCategories()
                .then(function (res) {
                    vm.categories = res;
                    angular.forEach(vm.categories, function (category) {
                        app.getSubCategories(category.objectId)
                            .then(function (res) {
                                category.subcategories = res;
                            })
                    })
                });
        }

        function saveInfo(type, item) {
            if (type == 'category') {
                if (item.objectId) {
                    app.saveCategoryInfo(item)
                        .then(function () {
                            updateList();
                        });
                } else {
                    app.addCategory(item)
                        .then(function () {
                            updateList();
                        });
                }
            } else {
                if (item.objectId) {
                    app.saveSubCategoryInfo(item)
                        .then(function () {
                            updateList();
                        });
                } else {
                    app.addSubCategory(item)
                        .then(function () {
                            updateList();
                        });
                }
            }
            item.edit = false;
        }

        function deleteCategory(category) {
            if (confirm("Удалить эту запись?")) {
                app.deleteCategory(category)
                    .then(function () {
                        updateList();
                    });
            }
        }

    }
}());
