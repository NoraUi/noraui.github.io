(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['UserService', '$rootScope', '$scope', '$translate', '$cookieStore'];
    function HomeController(UserService, $rootScope, $scope, $translate, $cookieStore) {

    	var vm = this;
        vm.user = null;
       
        $scope.loadCurrentUser = function () {
            UserService.GetByUsername($rootScope.globals.currentUser.username).then(
                function (user) {
                    vm.user = user;
                });
        };
        $scope.loadCurrentUser();

		$scope.changeLang = function () {
			$cookieStore.put('logogame.language', $rootScope.language);
			$translate.use($rootScope.language);
		};
		
    }

})();