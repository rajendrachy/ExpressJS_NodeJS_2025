const fs = require('fs');
// const fs = require('fs/promises'); // dont need to write frequently
const path = require('path');


const fileName = "text.txt";
const filePath = path.join(__dirname, fileName);


// Why .then() and .catch() are used?
//? .then() ensures clear chaining of the multiple asynchronous operations
//? .catch() handles any errors that occur during the asynchronous operations




// const file = __dirname;

// fs.promises.readdir(file).then((data) => {
//   console.log("Directory contents:", data);
  
// }).catch((err) => {
//   console.log(err);
// })




// const filePath1 = __dirname;

// fs.promises.readdir(filePath).then((data) => {
//   console.log(data);
// }).catch((err) => {
//  console.log(err);
// }) 





//-------------------WriteFile---------------------------------------------------

// fs.promises.writeFile(filePath, "this is rajendra", 'utf-8')
// .then(console.log("File created Successfully"))
// .catch((err) => {
//   console.log(err);
// })



//-------------------reaFile------------------------------
// fs.promises
// .readFile(filePath, 'utf-8')
// .then((data) => {
//   console.log(data);
// }).catch((err) => {
//   console.log(err);
// })



//---------------append------------------------
// fs.promises
// .appendFile(filePath, "\nbe sec", "utf-8")
// .then(console.log("file append successfully"))
// .catch((err) => {
//   console.log(err);

// })



//----------------deleteFile------------------------------
fs.promises
.unlink(filePath)
.then(console.log("file deleted successfully"))
.catch((err) => {
  console.log(err);
})