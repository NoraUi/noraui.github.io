(function () {
    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$rootScope', '$scope', '$translate', '$translatePartialLoader', '$location', 'AuthenticationService', 'FlashService'];
    function LoginController($rootScope, $scope, $translate, $translatePartialLoader, $location, AuthenticationService, FlashService) {
    	
    	var vm = this;

        vm.login = login;

        (function initController() {
            // reset login status
            AuthenticationService.ClearCredentials();
        })();

        function login() {
            vm.dataLoading = true;
            AuthenticationService.Login(vm.userName, vm.password, function (response) {
                if (response.success) {
                    AuthenticationService.SetCredentials(vm.userName, vm.password);
                    $location.path('/');
                    if(response.message === "sso"){
                    	$rootScope.showLogout = false;
                    } else {
                    	$rootScope.showLogout = true;
                    }
                } else {
                    FlashService.Error($translate.instant(response.message));
                    vm.dataLoading = false;
                }
            });
        };
        login();
    }

})();
