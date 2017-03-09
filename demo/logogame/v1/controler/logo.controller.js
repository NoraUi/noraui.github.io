var myApp = angular.module('logoApp',['ngSanitize']);

myApp.controller('LogoController', ['$scope', function($scope) {
    $scope.logos = [{name:"burger king"},{name:"citroën"},{name:"ebay"},{name:"hello kitty"},{name:"michelin"},{name:"napster"},{name:"pringles"},{name:"red bull"},{name:"reebook"},{name:"twitter"},{name:"youtube"}];
    $scope.logosDisplayed = [{name:"amazon"}];

    $scope.scoreMessage = "";
    $scope.scoreMessageClass = "";
    
    $scope.add = function() {
    	$scope.scoreMessage = "";
    	if($scope.newlogo==="" || typeof $scope.newlogo==='undefined') {
    		var rand = $scope.logos[Math.floor(Math.random() * $scope.logos.length)];
    		$scope.errorMessage = "";
    		$scope.newlogo = rand.name;
    	}
    	if($scope.objectPropInArray($scope.logos, 'name', $scope.newlogo)){
    		$scope.logosDisplayed.push({name:$scope.newlogo});
    	    $scope.logos = $scope.logos.filter(function(el) { return el.name != $scope.newlogo; }); 
    	    $scope.errorMessage = "";
    	    $scope.newlogo = "";
    	} else {
    		$scope.errorMessage = "<b>" + $scope.newlogo + "</b> is unavailable logo.";
    	}
    };
    
    $scope.validate = function() {
    	$scope.point = 0;
    	for (var int = 0; int < $scope.logosDisplayed.length; int++) {
    		var elem = document.getElementById($scope.logosDisplayed[int].name);
    		elem.classList.remove("red");
    		elem.classList.remove("orange");
            elem.classList.remove("green");
            if(elem.value == $scope.logosDisplayed[int].name){
                elem.classList.add("green");
                $scope.point = $scope.point + 1;
            } else {
                if(elem.value != ""){
                    if(clj_fuzzy.metrics.dice(elem.value, $scope.logosDisplayed[int].name) > 0.4){
                    	elem.classList.add("orange");
                    } else {
                        elem.classList.add("red");
                    }
                }
            }
    	}
    	$scope.scoreMessage = "<b>" + $scope.point + "</b> / " + $scope.logosDisplayed.length;
    	if($scope.point > ( $scope.logosDisplayed.length / 2)) {
    		$scope.scoreMessageClass = "alert alert-success";
    	} else {
    		$scope.scoreMessageClass = "alert alert-danger";
    	}
    };
    
     $scope.objectPropInArray = function (list, prop, val) {
        if (list.length > 0 ) {
            for (i in list) {
    	        if (list[i][prop] === val) {
    	            return true;
    	        }
    	    }
    	}
    	return false;  
    };
    
    $scope.add();
    $scope.add();
    $scope.add();
	
}]);