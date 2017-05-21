(function () {
    angular
        .module('app')
        .service('user', ['$q', 'toastr', function ($q, toastr) {
            var vm = this;

            vm.login = login;
            vm.signout = signout;

            /**
             * [login description]
             * @param  {[Object]} data [description]
             * @param  {[string]} data.email [user email]
             * @param  {[string]} data.password [user password]
             * @return {[null]}
             */
            function login(data) {

                return $q.defer(function (resolve, reject) {
                    resolve(true);
                });
            }

            /**
             * [signout description]
             * @return {[boolean]} [signout is success]
             */
            function signout() {

            }


        }])
}());
