const fs = require('fs'); // import fs module

// ------------only creating one folder-------------
// fs.mkdir('secE', (err) => {
//   if(!err) {
//     console.log("Folder created successfully");
//   }
// })





//---------------sub-folder Creating------------------------
//----------------If .secE folder exists ---------------------
// fs.mkdir('./secE/E', (err) => {
//   if(!err) {
//     console.log("Sub Folder Created successfully");
//   }
// })









//---------------sub-folder Creating------------------------
//-----------if .secE folder not exists----------------
// fs.mkdir('secE/E', {recursive : true}, (err) => {
//   if(!err) {
//     console.log("SecE and subFilder E created successfully");
//   }
// })







//---------------------------Remove Folder or delete Folder----------------
//----------------if there is sub folder exists let set E folder exists under secE the sec E file not deleted
// give a path './secE/E' the delete only E folder under secE------------------

// fs.rmdir('./secE/E', (err) => {
//   if(!err) {
//     console.log("Folder deleted successfully"); // only E file delete under secE
//   }
// })



// ------------to delete folder and subFolder-------------------
// fs.rmdir('./secE', {recursive : true}, (err) => {
//   if(!err) {
//     console.log("Folder deleted successfully");
//   }
// })




