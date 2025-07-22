// B.	Copy a File Using Node.js File System Module
// Write a Node.js script that copies a file named report.pdf from the root directory to a folder named backups located in the same directory as your script.
// 1.	Source File: The file to copy is report.pdf and is located in the root directory where the script runs.
// 2.	Destination Folder: ./backups/
// 3.	If the backups folder does not exist, the script should create it.
// 4.	After copying, print a message like:
// File copied successfully to backups/report.pdf
// 5.	If an error occurs (like the source file is missing), it should display a clear error message.


//------------using a path-----------------
// const fs = require('fs');
// const path = require('path');
// const { de } = require('zod/v4/locales');

// const sourceFile  = './report.pdf';
// const destDir = './backups';
// const destFile = path.join(destDir, 'report.pdf');


// if(!fs.existsSync(sourceFile) ) {
//   console.log("File not found");
//   process.exit(1);
// }

// if(!fs.existsSync(destDir)) {
//   fs.mkdirSync(destDir, {recursive:true});
// }

// fs.copyFile(sourceFile, destFile, (err) => {
//   if(!err) {
//     console.log(`File copied successfully to ${destDir}${sourceFile}`);
//   }
// })









//------------without using a path-----------------
// const fs = require('fs');

// // Define paths
// const sourceFile = './report.pdf';
// const backupDir = './backups';
// const destinationFile = './backups/report.pdf';

// //------------------- At first create a file report.pdf the run the file node fileName--------------------

// // Check if source file exists
// if (!fs.existsSync(sourceFile)) {
//   console.log("Error: report.pdf not found in current directory.");
//   process.exit(1); // Stop the script due to missing file
// }

// // Create backups folder if it doesn't exist
// if (!fs.existsSync(backupDir)) {
//   fs.mkdirSync(backupDir, { recursive: true });
// }


// // Copy the file
// fs.copyFile(sourceFile, destinationFile, (err) => {
//   if (!err) {
//     console.log("File copied successfully to backups/report.pdf");
//   } else {
//     console.log("Error while copying the file:", err.message);
//   }
// });














