var myApp = angular.module('logoApp',['ngSanitize','ui.bootstrap']);

myApp.controller('LogoController', ['$scope', function($scope) {
	
	$scope.currentPage = 1;
	$scope.itemsPerPage = 8;
	$scope.maxSize = 10;
	
    $scope.logos = [{name:"adidas"},{name:"aol"},{name:"apple"},{name:"audi"},{name:"bic"},{name:"bp"},{name:"bridgestone"},{name:"burger king"},{name:"carrefour"},{name:"cartoon network"},{name:"cisco"},{name:"citroën"},{name:"daf"},{name:"dakar"},{name:"dr oetker"},{name:"ebay"},{name:"endomondo"},{name:"facebook"},{name:"ferrari"},{name:"fiat"},{name:"fila"},{name:"fosters"},{name:"heinz"},{name:"hello kitty"},{name:"iberia"},{name:"ikea"},{name:"kfc"},{name:"lacoste"},{name:"lg"},{name:"lidl"},{name:"lotus"},{name:"mcdonald's"},{name:"michelin"},{name:"motorola"},{name:"napster"},{name:"panam"},{name:"pepsi"},{name:"peugeot"},{name:"philips"},{name:"playboy"},{name:"pringles"},{name:"puma"},{name:"qantas"},{name:"quicksilver"},{name:"red bull"},{name:"reebook"},{name:"rolex"},{name:"rossignol"},{name:"saab"},{name:"shell"},{name:"skoda"},{name:"skype"},{name:"suzuki"},{name:"texaco"},{name:"timberland"},{name:"tommy hilfiger"},{name:"total"},{name:"twitter"},{name:"umbro"},{name:"unicef"},{name:"varta"},{name:"visa"},{name:"wikipedia"},{name:"wwf"},{name:"xbox"},{name:"yamaha"},{name:"yoplait"},{name:"youtube"}];
    $scope.logosDisplayed = [{name:"amazon",response:""}];

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
    		$scope.logosDisplayed.push({name:$scope.newlogo,response:""});
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
    		// count point
    		if($scope.logosDisplayed[int].response == $scope.logosDisplayed[int].name){
                $scope.point = $scope.point + 1;
            }
    		// put color on input text
    		var elem = document.getElementById($scope.logosDisplayed[int].name);
    		if (elem != null) {	
	    		elem.classList.remove("red");
	    		elem.classList.remove("orange");
	            elem.classList.remove("green");
	            if(elem.value == $scope.logosDisplayed[int].name){
	                elem.classList.add("green");
	            } else {
	                if(elem.value != ""){
	                	if(clj_fuzzy.metrics.dice(elem.value, $scope.logosDisplayed[int].name) > 0.3){
	                    	elem.classList.add("orange");
	                    } else {
	                        elem.classList.add("red");
	                    }
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
    $scope.add();
    $scope.add();
    $scope.add();
    $scope.add();
    
}]);

myApp.filter('pages', function() {
    return function(input, currentPage, pageSize) {
        if (angular.isArray(input)) {
            var start = (currentPage-1)*pageSize;
            var end = currentPage*pageSize;
            return input.slice(start, end);
        }
    };
});