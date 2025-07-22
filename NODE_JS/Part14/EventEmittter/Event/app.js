// Import EventEmitter class
const EventEmitter = require("events");

// Create an instance of EventEmitter
const emitter = new EventEmitter();

// //1. Define an event listener (addListenet)
// emitter.on("greet", () => {
//   console.log("Rajendra chaudhary");
// })
// //2. Trigger (emit) the "greet" event
// emitter.emit("greet");




//*----------------you can also pass an arguement to the event listener------------------


//1. Define an event listener (addListenet)
// emitter.on("greet", (name, prof) => {
//   console.log(`Hello ${name}, You are a ${prof}`);
// })
// //2. Trigger (emit) the "greet" event
// emitter.emit("greet", "Rajendra Chaudhary", "Full Stack Developer");











//* ------------------Pass only one argument to the event listener--------------------

emitter.on("greet", (arg) => {
  console.log(`Hello ${arg.name}, You are a ${arg.prof}`);
})
//2. Trigger (emit) the "greet" event
emitter.emit("greet", {name: "Rajendra Chaudhary",
  prof: "Full Stack Developer"});



