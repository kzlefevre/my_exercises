// first step, declare a module

// angular.module("NAME", []); 

/*

angular.module("SamuelLJackson", []); //creating the module that has 0 dependances, the array is an injector
//when creating a module we have to specify what the dependances are... inject them into the ARRAY in the module

//below retrives an existing module, no injector array

angular.module("SamuelLJackson")
    .controller('sheild', sheildController);//<this has a dependance and need to inject it
//all built-in angular things have string 'names'

sheildController.$inject = ['$scope', '$timeout'];//$scope is the object we inject into the module array; it's the object that exposes itself to the view
//always inject strings that reference angular componants 

function sheildController($scope, $timeout){ //array will always match your function parameters
    console.log('Hello Agent Nick Fury');
    
    $scope.greeting = "Welcome Nick Fury";
        
    $timeout(function(){
        $scope.greeting = "Your next assignment is waiting..."
    }, 4000);
    
    
  }
*/


//controllers will get a funtion, they are functions
//most directives start with 'ng'


angular.module("StarWars", []);

angular.module("StarWars")
    .controller("yoda", yodaTime);

function yodaTime(){
    
    var yCtrl = this; 
    
    yCtrl.greeting = "Welcome to the Star Wars collectable site";
    // every function has its own value for 'thi'. the way angluar calls your controller function makes 'this' an empty object.




}
/*
ng-controller //
ng-app //
ng-model // pathway for information to go from the webpage to your js
ng-click // how you add a click event, 'when click, run this function'
ng-class // "{                            all about style, visual indication of 'state'
            'lightside' : !toy.darkSide
            'darkside'  : toy.darkSide
}"


yCtrl.addToy = function(){
    console.log("add new toy");
    yCtrl.collectibles.push(yCtrl.newToy);
    yCtrl.newToy = {} //this will empty the object and reset the form
}

  THIS IS ng-repeat
for(var i = 0; i < yCtrl.collectibles; i++){
    var toy = yCtrl.collectibles
    toy.name
    toy.img
    toy.price
}
*/


































