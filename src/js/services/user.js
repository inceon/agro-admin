(function () {
    angular
        .module('app')
        .service('user', ['$q', 'firebase', 'toastr', function ($q, firebase, toastr) {
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
                // firebase
                //     .auth()
                //     .signInWithEmailAndPassword(data.email, data.password)
                //     .catch(function (error) {
                //         if (error.code === 'auth/wrong-password') {
                //             toastr.error('Wrong password.');
                //         } else {
                //             toastr.error(error.message);
                //         }
                //         console.info(error.code, '|', error.message);
                //     });
            }

            /**
             * [signout description]
             * @return {[boolean]} [signout is success]
             */
            function signout() {
                // firebase.auth().signOut().then(function () {
                //     return true;
                // }).catch(function (error) {
                //     toastr.error(error.message);
                //     return false;
                // });
            }


        }])
}());
