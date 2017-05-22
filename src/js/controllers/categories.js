(function () {
    'use strict';

    angular.module('app')
        .controller('CategoriesCtrl', ['$scope', 'app', CategoriesCtrl]);

    function CategoriesCtrl($scope, app) {

        $scope.$emit('changeTitle', 'Категории');
        var vm = this;
        vm.addCategory = addCategory;
        vm.addSubCategory = addSubCategory;
        vm.updateList = updateList;
        vm.saveInfo = saveInfo;
        vm.deleteCategory = deleteCategory;
        vm.deleteSubCategory = deleteSubCategory;

        vm.newCategory = {
            name: '',
            edit: true,
            subcategories: []
        };

        vm.newSubCategory = {
            name: '',
            category: '',
            edit: true
        };

        updateList();

        function addCategory() {
            vm.categories.push(vm.newCategory);
        }

        function addSubCategory(category) {
            vm.newSubCategory.category = category.objectId;
            category.subcategories.push(vm.newSubCategory);
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

        function deleteSubCategory(subcategory) {
            if (confirm("Удалить эту запись?")) {
                app.deleteSubCategory(subcategory)
                    .then(function () {
                        updateList();
                    });
            }
        }

    }
}());
