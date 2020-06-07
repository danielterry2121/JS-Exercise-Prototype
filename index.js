/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
   check - Write a Person Constructor that initializes `name` and `age` from arguments.
  check  - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/
//person with name and age / empty stomach
function Person(name,age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}
//Make a person have the ability to be fat
Person.prototype.eat = function (food) {
  if(this.stomach.length <= 9){
    this.stomach.push(food);
  }
  else {
    console.log(`You are full and need to poop!`);
  }
  
}
// Let fatty lose ten pounds of food at once
Person.prototype.poop = function() {
  this.stomach = [];
}
//Let the person be identified
Person.prototype.toString = function () {
  return (`${this.name} , ${this.age}`);
}




/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model,milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}
Car.prototype.fill = function(){
  if (this.tank <= 10) {
  	  this.tank += 10;
  }
  else {
  	console.log(`car is full`);
  }
}



/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name,age,favoriteToy) {
  Person.call(this, name , age);
  this.name = name;
  this.age = age;
  this.favoriteToy = favoriteToy;
}
Baby.prototype = Object.create(Person.prototype);
Baby.prototype.play = function(){
 return (`${this.name} is playing with their ${this.favoriteToy}.`);
}

/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1. The first principle is the global binding feature this has to it's own unique functions even outside of objects and their constructors , it can be applied globally.
  2. The second Is implicit Binding , For me this was the first obvious use, inside of an object to manipulate things inside itself, if i want to add a new function to take the calories and fat andf return a ratio , I just say this , no accessing like arrays arr[lay1][lay2][index2300]
  3. The third is by far the most useful application of this with new binding. You can set up pre-determined factors for newly constructed object with this!
  4. The final is "explicit" binding , which from what I understand is usefull to call in on the parent object to sort of mimic classes in other languages and even produce working object oriented design.
*/


///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
}