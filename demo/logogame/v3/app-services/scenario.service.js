(function () {
    'use strict';

    angular
        .module('app')
        .factory('ScenarioService', ScenarioService);

    ScenarioService.$inject = ['$http', '$rootScope'];
    function ScenarioService($http, $rootScope) {
    	var service = {};
    	
    	service.getScenarios = getScenarios;
    	service.getScenario = getScenario;
    	service.runScenario = runScenario;
    	
    	 return service;
    	
    	function getScenarios(lang) {
			return $http({
				method : "get",
				url : "http://localhost:8089/wiitty/api/scenarios?lang=" + lang
			});
		}
    	
    	function getScenario(scenarioId) {
			return "http://localhost:8089/wiitty/api/scenario/" + scenarioId;
		}
    	
    	function runScenario(scenarioId) {
			return $http({
				method : "get",
				url : "http://localhost:8089/wiitty/api/run/scenario/" + scenarioId
			});
		}
    }

})();