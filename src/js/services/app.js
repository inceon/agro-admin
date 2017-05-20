(function () {
    angular
        .module('app')
        .service('app', ['$q', 'firebase', 'toastr', function ($q, firebase, toastr) {
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

            vm.getUsers = getUsers;
            vm.saveUserInfo = saveUserInfo;
            vm.deleteUser = deleteUser;
            vm.addUser = addUser;

            vm.getNews = getNews;
            vm.saveNewsInfo = saveNewsInfo;
            vm.deleteNews = deleteNews;
            vm.addNews = addNews;

            function getUsers() {
                return users;
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
                return news;
            }

            /**
             *
             * @param news data
             */
            function saveNewsInfo(newsOne) {
                news.forEach(function (item) {
                    if (item.id == newsOne.id) {
                        item = newsOne;
                    }
                })
            }

            function deleteNews(news) {
                news = news.filter(function (item) {
                    return item.id != news.id;
                })
            }

            /**
             *
             * @param {{Object}} data - news data
             * @param {{image}} data.photo - photo news
             * @param {{string}} data.title - news title
             * @param {{string}} data.text - news text
             */
            function addNews(data) {
                var maxId = 0;
                news.forEach(function (item) {
                    maxId = Math.max(maxId, item.id);
                });

                data.id = maxId + 1;
                news.push(data);
            }

        }])
}());
