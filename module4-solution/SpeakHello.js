// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
// See Lecture 52, part 2
var yaakovGreeter = {};
yaakovGreeter.name = "Yaakov";
yaakovGreeter.sayHello = function() {
    console.log("Hello " + yaakovGreeter.name);
}
var johnGreeter = {};
johnGreeter.name = "John";
johnGreeter.sayGoodBye = function() {
    console.log("Good Bye " + johnGreeter.name);
}
var jenGreeter = {};
jenGreeter.name = "Jen";
jenGreeter.sayGoodBye = function() {
    console.log("Good Bye " + jenGreeter.name);
}
var jasonGreeter = {};
jasonGreeter.name = "Jason";
jasonGreeter.sayGoodBye = function() {
    console.log("Good Bye " + jasonGreeter.name);
}
var paulGreeter = {};
paulGreeter.name = "Paul";
paulGreeter.sayHello = function() {
    console.log("Hello " + paulGreeter.name);
}
var frankGreeter = {};
frankGreeter.name = "Frank";
frankGreeter.sayHello = function() {
    console.log("Hello " + frankGreeter.name);
}
var larryGreeter = {};
larryGreeter.name = "Larry";
larryGreeter.sayHello = function() {
    console.log("Hello " + larryGreeter.name);
}
var paulaGreeter = {};
paulaGreeter.name = "Paula";
paulaGreeter.sayHello = function() {
    console.log("Hello " + paulaGreeter.name);
}
var lauraGreeter = {};
lauraGreeter.name = "Laura";
lauraGreeter.sayHello = function() {
    console.log("Hello " + lauraGreeter.name);
}
var jimGreeter = {};
jimGreeter.name = "Jim";
jimGreeter.sayGoodBye = function() {
    console.log("Hello " + jimGreeter.name);
}
yaakovGreeter.sayHello();
johnGreeter.sayGoodBye();
jenGreeter.sayGoodBye();
jasonGreeter.sayGoodBye();
paulGreeter.sayHello();
frankGreeter.sayHello();
larryGreeter.sayHello();
paulaGreeter.sayHello();
lauraGreeter.sayHello();
jimGreeter.sayGoodBye();

// STEP 3: Create an object, called 'helloSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1
// var helloSpeaker =

// DO NOT attach the speakWord variable to the 'helloSpeaker' object.
var speakWord = "Hello";
var helloSpeaker = "name";

// STEP 4: Rewrite the 'speak' function such that it is attached to the
// helloSpeaker object instead of being a standalone function.
// See Lecture 52, part 2
function speak(name) {
  console.log(helloSpeaker + " " + name);
}

// STEP 5: Expose the 'helloSpeaker' object to the global scope. Name it
// 'helloSpeaker' on the global scope as well.
// See Lecture 52, part 2
// (Note, Step 6 will be done in the SpeakGoodBye.js file.)
// xxxx.xxxx = helloSpeaker;
function helloSpeaker() {
    var _this = this;
    something.on("click", function() {
        console.log(_this);
});
};
