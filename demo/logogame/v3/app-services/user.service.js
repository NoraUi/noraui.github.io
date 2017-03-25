(function () {
    'use strict';

    angular
        .module('app')
        .factory('UserService', UserService);

    UserService.$inject = ['$http'];
    function UserService($http) {
        var service = {};

        service.GetById = GetById;
        service.GetByUsername = GetByUsername;

        return service;

        function GetById(id) {
            return $http.get('api/users/' + id).then(handleSuccess, handleError('Error getting user by id'));
        }

        function GetByUsername(userName) {
            return $http.get('api/users/' + userName).then(handleSuccess, handleError('Error getting user by userName'));
        }

        function handleSuccess(res) {
            return res.data;
        }

        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }
    }

})();
