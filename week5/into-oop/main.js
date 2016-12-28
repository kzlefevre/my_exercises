/* Oject Oriented Programming

objects have properties attached to them
    they describe the data within the object
    
objects can also have METHODS attached to them
    they are properites that point to functions, they are callable properties
    
    [].length   //property
    [].splice() //method
    
    
    var user = {
        name : bob
        favFood : bread
    }

user.name
user.favFood

var propertyIcareAbout = "favFood"

user[propertyIcareAbout] 
    -bracket notation to use variables to access object properties
        bracket notation expects a valueOf
        
  user["propteryIcareabout"]  


Objects make our data much more flexible 

calling a function normally: 'cat()'
-'this' refers to the object that function was called from

calling a function as a constructor: 'new Cat()'
- 'this' is an empty oject
    implicit retrun of 'this' in the function




function Cat (name, claws, gender, attitude, lives) {
    this.name = name;
    this.claws = claws;
    this.gender = gender;
    this.attitude = attitude;
    this.lives = lives;
    
    this.shed = function(){
      return this.name + "shed all over the couch!"
    }
}
 ^^^ the above is the WORST way you can attach a method to an object.
what they DO is a .method
*/


//Cat Class, classes are usually capitalized



function Cereal (name, sweetness, crunchFactor, mascotName){
    this.name = name;
    this.sweetness = sweetness;
    this.crunchFactor = crunchFactor;
    this.mascotName = mascotName;
}

var bourbonFlakes = new Cereal(
    "Bourbon Flakes",
    1,
    6,
    "Mr. Barrell",
);

Cereal.prototype.disappear = function(){
   console.log(return this.mascotName + " just stole your " + this.name)
}




















