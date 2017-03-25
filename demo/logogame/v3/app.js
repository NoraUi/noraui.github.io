(function () {
    'use strict';

    angular
        .module('app', ['ngRoute', 'ngCookies', 'pascalprecht.translate', 'ngSanitize'])
        .config(config)
        .run(run);

    config.$inject = ['$routeProvider', '$locationProvider', '$translateProvider'];
    function config($routeProvider, $locationProvider, $translateProvider) {
    	$translateProvider.useLoader('$translatePartialLoader', {
            urlTemplate: '{part}_{lang}.json'
        });
        $translateProvider.useSanitizeValueStrategy('escape');
        $routeProvider
            .when('/', {
                controller: 'HomeController',
                templateUrl: 'home/home.view.html',
                controllerAs: 'vm'
            })

            .when('/login', {
                controller: 'LoginController',
                templateUrl: 'login/login.view.html',
                controllerAs: 'vm'
            })

            .otherwise({ redirectTo: '/login' });
    }

    run.$inject = ['$rootScope', '$translate', '$translatePartialLoader', '$location', '$cookieStore', '$http'];
    function run($rootScope, $translate, $translatePartialLoader, $location, $cookieStore, $http) {
    	
    	// keep language in after page refresh
        $rootScope.language = $cookieStore.get('logogame.language');
        if (!$rootScope.language) {
        	$rootScope.language = "en";
        }
    	$translatePartialLoader.addPart("i18n/lang");
	    $translate.refresh();
	    $translate.use($rootScope.language);
	    $cookieStore.put('logogame.language', $rootScope.language);
	    
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('logogame.globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
        }
        
        
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/login']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/login');
            }
        });
    }

})();