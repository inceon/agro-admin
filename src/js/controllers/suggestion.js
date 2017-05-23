(function () {
    'use strict';

    angular.module('app')
        .controller('SuggestionCtrl', ['$scope', 'app', SuggestionCtrl]);

    function SuggestionCtrl($scope, app) {

        $scope.$emit('changeTitle', 'Предложения');
        var vm = this;

        vm.deleteSuggestion = deleteSuggestion;
        updateList();

        function updateList() {
            app.getSuggestion()
                .then(function (res) {
                    vm.suggestion = res;
                    angular.forEach(vm.suggestion, function (item) {
                        app.getUser(item.user.objectId)
                            .then(function (res) {
                                item.user = res[0];
                            });
                    })
                });
        }

        function deleteSuggestion(suggestion) {
            if (confirm("Удалить эту запись?")) {
                app.deleteSuggestion(suggestion)
                    .then(function () {
                        updateList();
                    });
            }
        }

    }
}());
