// const EventEmitter = require("events");

// const emitter = new EventEmitter();

// const eventCounts = {
//   "userlog-in": 0,
//   "user-purchase": 0,
//   "profile-update": 0,
//   "user-log-out": 0
// };

// emitter.on("userlog-in", (username) => {
//   eventCounts["userlog-in"]++;
//   console.log(`${username} has logged in.`);
// });

// emitter.on("user-purchase", (item) => {
//   eventCounts["user-purchase"]++;
//   console.log(`User has purchased: ${item}`);
// });

// emitter.on("profile-update", (username, field) => {
//   eventCounts["profile-update"]++;
//   console.log(`${username} has updated their ${field}.`);
// });

// emitter.on("user-log-out", (username) => {
//   eventCounts["user-log-out"]++;
//   console.log(`${username} has logged out.`);
// });

// emitter.on("summary", () => {
//   console.log("Event Summary:", eventCounts);
// });

// // Trigger events
// emitter.emit("userlog-in", "Thapa");
// emitter.emit("user-purchase", "Laptop");
// emitter.emit("profile-update", "Rajendra", "email");
// // emitter.emit("user-log-out", "Thapa");


// emitter.emit("summary");



























//------------Updating count code ---------------
const fs = require("fs");
const EventEmitter = require("events");

const emitter = new EventEmitter();

const filePath = "./eventCounts.json";

// Step 1: Load previous event counts if file exists
let eventCounts = {
  "userlog-in": 0,
  "user-purchase": 0,
  "profile-update": 0,
  "user-log-out": 0
};

if (fs.existsSync(filePath)) {
  const data = fs.readFileSync(filePath);
  eventCounts = JSON.parse(data);  // converts it into a usable JavaScript object.

}

function saveCounts() {
  fs.writeFileSync(filePath, JSON.stringify(eventCounts, null, 2));
}

emitter.on("userlog-in", (username) => {
  eventCounts["userlog-in"]++;
  console.log(`${username} has logged in.`);
  saveCounts();
});

emitter.on("user-purchase", (item) => {
  eventCounts["user-purchase"]++;
  console.log(`User has purchased: ${item}`);
  saveCounts();
});

emitter.on("profile-update", (username, field) => {
  eventCounts["profile-update"]++;
  console.log(`${username} has updated their ${field}.`);
  saveCounts();
});

emitter.on("user-log-out", (username) => {
  eventCounts["user-log-out"]++;
  console.log(`${username} has logged out.`);
  saveCounts();
});

emitter.on("summary", () => {
  console.log("Event Summary:", eventCounts);
});


// Triggering some events for testing
emitter.emit("userlog-in", "Thapa");
emitter.emit("user-purchase", "Laptop");
emitter.emit("summary");
