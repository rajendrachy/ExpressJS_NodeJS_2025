// A. Periodic Logger with File System Module
// Problem Statement:
// Build a simple Node.js script that continuously logs the current timestamp to a file named activity.log every 10 seconds.

// Requirements:
// Use the fs module to write to a file.

// The file name must be: activity.log.

// Every 2 minutes:

// Get the current system time.

// Format it in a readable form (example: 2025-06-30 14:02:00).

// Append this timestamp to the file activity.log with a message like:
// Log entry at 2025-06-30 14:02:00

// Ensure:

// If the file does not exist, it should be created automatically.

// If the file already exists, new entries should be appended (do not overwrite existing content).




// const fs = require('fs');
// // The .trim() method in JavaScript removes leading and trailing whitespace from a string, including spaces, tabs, and newline characters (\n, \r, etc.).

// function logActivity() {
//   const now = new Date();
//   const timestamp = now.toISOString().replace('T', ' ').split('.')[0]; // split('.') splits the string at the dot (.), which separates the seconds and milliseconds:


//   const message = `Log entry at ${timestamp}\n`;

//   fs.appendFile('activity.log', message, err => {
//    if(!err) {
//   console.log('Logged:', message.trim());
//    }
     
//   });
// }

// logActivity();
// setInterval(logActivity, 12000); 









// const fs = require('fs');

// function logActivity() {
//     const now = new Date();
//     const timestamp = now.toISOString().replace('T', ' ').split('.')[0];

//     const mess = `Log activity at ${timestamp} \n`;

//     fs.appendFile('acti.log', mess, (err)=> {
//       if(!err) {
//         console.log('Logged:', mess.trim());
//       }
//     })
// }


// logActivity();
// setInterval(logActivity, 12000); // Log every 12 seconds





