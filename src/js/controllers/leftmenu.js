(function () {
    angular.module('app')
        .controller('LeftMenuCtrl', ['$scope', '$cookieStore', '$state', 'user', LeftMenuCtrl]);

    function LeftMenuCtrl($scope, $cookieStore, $state, user) {

        var vm = this;

        vm.title = 'Админка';
        vm.logout = logout;

        function logout() {
            user.logout()
                .then(function () {
                    $state.go('login');
                });
        }

        var mobileView = 992;

        $scope.getWidth = function () {
            return window.innerWidth;
        };

        $scope.$watch($scope.getWidth, function (newValue, oldValue) {
            if (newValue >= mobileView) {
                if (angular.isDefined($cookieStore.get('toggle'))) {
                    $scope.toggle = !$cookieStore.get('toggle') ? false : true;
                } else {
                    $scope.toggle = true;
                }
            } else {
                $scope.toggle = false;
            }

        });

        $scope.toggleSidebar = function () {
            $scope.toggle = !$scope.toggle;
            $cookieStore.put('toggle', $scope.toggle);
        };

        window.onresize = function () {
            $scope.$apply();
        };

        $scope.$on('changeTitle', function (event, data) {
            vm.title = data;
        })
    }
}());
