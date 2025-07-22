// C.	List All Files in a Directory
// Read the contents of the documents/ folder and print the names of all files inside.
// Write a Node.js script that reads all the files inside a folder named documents/ and prints their names to the console.

// Requirements
// 1.	The folder name is documents/.
// 2.	The folder is located in the same directory as your script.
// 3.	The script should:
// o	Check if the folder exists.
// o	List all items inside (files and subfolders).
// o	Filter and print only file names, not directories.





const fs = require('fs');
const path = require('path');

const folderPath = './documents';

if(!fs.existsSync(folderPath)) {
      console.log("Folder not found");
      process.exit(1);
}

// fs.readdir(__dirname + '/documents', (err, data) => {
//   if(!err) {
//      console.log(data);
//   }
// })

fs.readdir(folderPath, (err, data) => {
  if(!err) {
    data.forEach((val) => {
      const itemPath = __dirname + '/documents' + '/' + val;
     //const itemPath = folderPath + '/' + val;
     
      if(fs.statSync(itemPath).isFile()) {
            console.log(val);
      }
    })
  } else {
    console.log(err.message);

  }
})












// const fs = require('fs'); // Import File System module

// const folderPath = './documents'; // Folder to read

// // Check if folder exists
// if (!fs.existsSync(folderPath)) {
//   console.log('Error: documents/ folder not found.');
//   process.exit(1); // Stop if folder is missing
// }

// // Read folder contents
// fs.readdir(folderPath, (err, items) => {
//   if (!err) {
//     items.forEach(item => {
//       const itemPath = folderPath + '/' + item; // Full path // '/' -> use to combine folder + file

//       if(fs.statSync(itemPath).isFile()) { // Check if it's a file
//         console.log(item); // Print file name
//       }
//     });
//   } else {
//     console.log('Error reading the folder:', err.message); // Show error
//   }
// });
















//--practice----
// const fs = require('fs');
// const foldePath = './documents';


// if(!fs.existsSync(foldePath)) {
//   console.log("Folder not found");
//   process.exit(1);
// }



// fs.readdir(foldePath, (err, data) => {
//       if(!err) {
//         console.log("Folder Found in documents: ");
//         console.log(data);

//         data.forEach(val => {
//           const itemPath = foldePath + '/' + val;

//           if(fs.statSync(itemPath).isFile()) {
//             console.log(val);
//           }
//         })

//       }  else {
//         console.log("Error Occurs ");
//       }
// });




































// What fs.statSync() Does:
// fs.statSync(path) is a synchronous method from Node.js's fs module.

// It reads metadata (info) about a file or directory at the given path.

// It returns an object called fs.Stats, which contains info like:

// file size

// created/modified time

// whether it’s a file or a folder, etc.

//  What .isFile() Does:
// isFile() is a method of the fs.Stats object.

// It returns true if the path is a regular file (not a folder, symlink, etc.).



// Full Meaning of the Line:
// if (fs.statSync(itemPath).isFile()) {
// This means:

// “Check if the item at itemPath is a regular file.”




