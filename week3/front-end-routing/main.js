angular.module("CoffeeShop", ["ng-route"]); //inject into array, we have to define what routes it should be looking for.

angular.module("CoffeeShop")
    .config(Router);

Router.$inject = ['$routeProvider']; //injected component from ngRoute

//register our routes below
function Router ($routeProvider){
    
    $routeProvider
        .when('/', {
            templateUrl : "/home.html", //URL on server that leads to an html file to be used for this page
            controller  : "coffeeTime", //String name of the angular controller you'd like to use on this page
            controllerAS: "cCtrl", //Object name for 'this' in your html from the specified controller
             })
        .when('/menu', {
            
             })
}

angluar.module("CoffeeShop")
 .controller("coffee", coffeeTime), 
    
    
function coffeeTime () {
    
    
    var cCtrl = this; 
    
    
    cCtrl.greeting = "Welcome to the most hipster coffee shop, typewriters and gramophones are in the corner"
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}