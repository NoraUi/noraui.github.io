(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['UserService', 'ScenarioService', '$rootScope', '$scope', '$translate', '$cookieStore'];
    function HomeController(UserService, ScenarioService, $rootScope, $scope, $translate, $cookieStore) {

    	var vm = this;
        vm.user = null;
       
        $scope.loadCurrentUser = function () {
            UserService.GetByUsername($rootScope.globals.currentUser.userName).then(
                function (user) {
                    vm.user = user;
                });
        };
        $scope.loadCurrentUser();

        $scope.runScenarioId=0;
        
		$scope.getScenarios = function () {
			ScenarioService.getScenarios($rootScope.language).then(
		    function (response) {
		        if (response.status == 200) {
		            $scope.scenarios = response.data;
		        }
		    });
		};
		$scope.getScenarios($rootScope.language);
		
		$scope.getScenario = function (scenarioId) {
			return ScenarioService.getScenario(scenarioId);
		};
		
		$scope.changeLang = function () {
			$cookieStore.put('logogame.language', $rootScope.language);
			$translate.use($rootScope.language);
			$scope.getScenarios($rootScope.language);
		};
		
		$scope.runScenario = function () {
			return ScenarioService.runScenario($scope.runScenarioId);
        };
    }

})();