const os = require("os");

console.log("Platform", os.platform());
console.log("User", os.userInfo());




console.log("Cpu architecture", os.arch());

console.log("Free Memory", os.freemem(), "bytes");

console.log("Total Memory", os.totalmem(), "bytes");

console.log("System uptime", os.uptime(), "seconds");

console.log("Home dir", os.homedir());

console.log("Hose Name", os.hostname());

console.log("Cpu info", os.cpus());


