console.log("monkey.js loaded");
/*Work with a partner to create a monkey object, which has the following properties:

* name
* species
* foodsEaten

And the following methods:
* eatSomething(thingAsString)
* introduce: produces a string introducing itself, including its name, species, and what it's eaten.

Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.

Exercise your monkeys by retrieving their properties and using their methods. Practice using both syntaxes
for retrieving properties (dot notation and brackets).

var Superhero = function (firstName, superheroName) {
    // Important to understand here that the object properties firstName and superheroName
    // are set through the this keyword with the value passed through the constructor function
    this.firstName = firstName;
    this.superheroName = superheroName;
    console.log('Superhero instantiated');
  };


*/
 var Monkey = function(name, species, foodsEaten){
     this.name = name;
     this.species = species;
     this.foodsEaten = foodsEaten; 
 };
 
 var monkey1 = new Monkey("brayen","champansi","banana");
console.log(monkey1.name+" "+monkey1.foodsEaten+" "+monkey1.species);
