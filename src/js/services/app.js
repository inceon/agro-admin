(function () {
    angular
        .module('app')
        .service('app', ['$q', 'http', 'toastr', function ($q, http, toastr) {
            var vm = this;

            var users = [
                {
                    id: 1,
                    photo: 'https://i10.fotocdn.net/s21/19/public_pin_l/57/2526689298.jpg',
                    name: 'Test',
                    surname: 'Tititii',
                    phone: '+380956666666',
                    admin: false
                },
                {
                    id: 2,
                    photo: 'https://i10.fotocdn.net/s21/19/public_pin_l/57/2526689298.jpg',
                    name: 'Test',
                    surname: 'Tititii',
                    phone: '+380956666666',
                    admin: false
                },
                {
                    id: 3,
                    photo: 'https://i10.fotocdn.net/s21/19/public_pin_l/57/2526689298.jpg',
                    name: 'Test',
                    surname: 'Tititii',
                    phone: '+380956666666',
                    admin: true
                },
                {
                    id: 4,
                    photo: 'https://i10.fotocdn.net/s21/19/public_pin_l/57/2526689298.jpg',
                    name: 'Test',
                    surname: 'Tititii',
                    phone: '+380956666666',
                    admin: true
                },
                {
                    id: 5,
                    photo: 'https://i10.fotocdn.net/s21/19/public_pin_l/57/2526689298.jpg',
                    name: 'Test',
                    surname: 'Tititii',
                    phone: '+380956666666',
                    admin: false
                },
            ];
            var news = [
                {
                    id: 1,
                    time: new Date(),
                    photo: 'https://i10.fotocdn.net/s21/19/public_pin_l/57/2526689298.jpg',
                    title: 'Lorem ipsum dolor sit amet',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium aliquam blanditiis enim est quam quas rerum sequi suscipit voluptate?',
                },
                {
                    id: 2,
                    time: new Date(),
                    photo: 'https://i10.fotocdn.net/s21/19/public_pin_l/57/2526689298.jpg',
                    title: 'Lorem ipsum dolor sit amet',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium aliquam blanditiis enim est quam quas rerum sequi suscipit voluptate?',
                },
                {
                    id: 3,
                    time: new Date(),
                    photo: 'https://i10.fotocdn.net/s21/19/public_pin_l/57/2526689298.jpg',
                    title: 'Lorem ipsum dolor sit amet',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium aliquam blanditiis enim est quam quas rerum sequi suscipit voluptate?',
                },
                {
                    id: 4,
                    time: new Date(),
                    photo: 'https://i10.fotocdn.net/s21/19/public_pin_l/57/2526689298.jpg',
                    title: 'Lorem ipsum dolor sit amet',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium aliquam blanditiis enim est quam quas rerum sequi suscipit voluptate?',
                },
                {
                    id: 5,
                    time: new Date(),
                    photo: 'https://i10.fotocdn.net/s21/19/public_pin_l/57/2526689298.jpg',
                    title: 'Lorem ipsum dolor sit amet',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium aliquam blanditiis enim est quam quas rerum sequi suscipit voluptate?',
                },
            ];
            var url = 'https://parseapi.back4app.com/classes/';

            vm.getUsers = getUsers;
            vm.getUser = getUser;
            vm.saveUserInfo = saveUserInfo;
            vm.deleteUser = deleteUser;
            vm.addUser = addUser;

            vm.getNews = getNews;
            vm.saveNewsInfo = saveNewsInfo;
            vm.deleteNews = deleteNews;
            vm.addNews = addNews;

            vm.getCategories = getCategories;
            vm.saveCategoryInfo = saveCategoryInfo;
            vm.deleteCategory = deleteCategory;
            vm.addCategory = addCategory;

            vm.getSubCategories = getSubCategories;
            vm.saveSubCategoryInfo = saveSubCategoryInfo;
            vm.deleteSubCategory = deleteSubCategory;
            vm.addSubCategory = addSubCategory;

            vm.getSuggestion = getSuggestion;
            vm.deleteSuggestion = deleteSuggestion;

            vm.getServices = getServices;
            vm.saveServiceInfo = saveServiceInfo;
            vm.deleteService = deleteService;
            vm.addService = addService;

            vm.getComments = getComments;
            vm.deleteComment = deleteComment;

            vm.uploadFile = uploadFile;

            function getUsers() {
                return users;
            }

            function getUser(userId) {
                return http
                    .get(url + '_User', {
                        where: {
                            "objectId": userId
                        }
                    })
                    .then(function (res) {
                        return res.results;
                    });
            }

            /**
             *
             * @param user data
             */
            function saveUserInfo(user) {
                users.forEach(function (item) {
                    if (item.id == user.id) {
                        item = user;
                    }
                })
            }

            function deleteUser(user) {
                users = users.filter(function (item) {
                    return item.id != user.id;
                })
            }

            /**
             *
             * @param {{Object}} data - user data
             * @param {{string}} data.name - user name
             * @param {{string}} data.surname - user surname
             * @param {{phone}} data.phone - user phone
             * @param {{boolean}} data.access - user access (true - admin, false - user)
             */
            function addUser(data) {
                var maxId = 0;
                users.forEach(function (item) {
                    maxId = Math.max(maxId, item.id);
                });

                data.id = maxId + 1;
                users.push(data);
            }

            ///////////////////////////////////////////////////////

            function getNews() {
                return http
                    .get(url + 'News')
                    .then(function (res) {
                        return res.results;
                    });
            }

            /**
             *
             * @param news data
             */
            function saveNewsInfo(news) {
                return http
                    .put(url + 'News/' + news.objectId, news)
                    .then(function (res) {
                        return res.results;
                    });
            }

            function deleteNews(news) {
                return http
                    .delete(url + 'News/' + news.objectId)
                    .then(function (res) {
                        return res.results;
                    });
            }

            /**
             *
             * @param {{Object}} data - news data
             * @param {{image}} data.photo - photo news
             * @param {{string}} data.title - news title
             * @param {{string}} data.text - news text
             */
            function addNews(data) {
                return http
                    .post(url + 'News', data)
                    .then(function (res) {
                        return res.results;
                    });
            }

            ///////////////////////////////////////////////////////

            function getCategories() {
                return http
                    .get(url + 'Categories')
                    .then(function (res) {
                        return res.results;
                    });
            }


            /**
             *
             * @param category data
             */
            function saveCategoryInfo(category) {
                return http
                    .put(url + 'Categories/' + category.objectId, category)
                    .then(function (res) {
                        return res.results;
                    });
            }

            function deleteCategory(category) {
                return http
                    .delete(url + 'Categories/' + category.objectId)
                    .then(function (res) {
                        return res.results;
                    });
            }

            /**
             *
             * @param {{Object}} data - category data
             * @param {{image}} data.name - name category
             */
            function addCategory(data) {
                return http
                    .post(url + 'Categories', data)
                    .then(function (res) {
                        return res.results;
                    });
            }

            ///////////////////////////////////////////////////////

            function getSubCategories(categoryId) {
                return http
                    .get(url + 'Subcategories', {
                        where: {
                            "category": categoryId
                        }
                    })
                    .then(function (res) {
                        return res.results;
                    });
            }


            /**
             *
             * @param category data
             */
            function saveSubCategoryInfo(subcategory) {
                return http
                    .put(url + 'Subcategories/' + subcategory.objectId, subcategory)
                    .then(function (res) {
                        return res.results;
                    });
            }

            function deleteSubCategory(subcategory) {
                return http
                    .delete(url + 'Subcategories/' + subcategory.objectId)
                    .then(function (res) {
                        return res.results;
                    });
            }

            /**
             *
             * @param {{Object}} data - category data
             * @param {{image}} data.name - name category
             */
            function addSubCategory(data) {
                return http
                    .post(url + 'Subcategories', data)
                    .then(function (res) {
                        return res.results;
                    });
            }

            ///////////////////////////////////////////////////////

            function getSuggestion() {
                return http
                    .get(url + 'Suggestion')
                    .then(function (res) {
                        return res.results;
                    });
            }

            function deleteSuggestion(suggestion) {
                return http
                    .delete(url + 'Suggestion/' + suggestion.objectId)
                    .then(function (res) {
                        return res.results;
                    });
            }

            ///////////////////////////////////////////////////////

            function getServices() {
                return http
                    .get(url + 'Services')
                    .then(function (res) {
                        return res.results;
                    });
            }

            /**
             *
             * @param news data
             */
            function saveServiceInfo(news) {
                return http
                    .put(url + 'Services/' + news.objectId, news)
                    .then(function (res) {
                        return res.results;
                    });
            }

            function deleteService(news) {
                return http
                    .delete(url + 'Services/' + news.objectId)
                    .then(function (res) {
                        return res.results;
                    });
            }

            /**
             *
             * @param {{Object}} data - service data
             * @param {{image}} data.photo - photo service
             * @param {{string}} data.text - service text
             * @param {{string}} data.location - service location
             */
            function addService(data) {
                return http
                    .post(url + 'Services', data)
                    .then(function (res) {
                        return res.results;
                    });
            }

            //////////////////////////////////////////////

            function getComments(sourceId) {
                return http
                    .get(url + 'Comments', {
                        where: {
                            "source": sourceId
                        }
                    })
                    .then(function (res) {
                        return res.results;
                    });
            }

            function deleteComment(comment) {
                return http
                    .delete(url + 'Comments/' + comment.objectId)
                    .then(function (res) {
                        return res.results;
                    });
            }

            //////////////////////////////////////////////

            function uploadFile(file, source) {
                return http
                    .file(url + 'Files', {
                        file: file,
                        source: source
                    })
                    .then(function (res) {
                        console.log(res);
                    })
            }


        }])
}());
