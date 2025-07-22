// A.	Periodic Logger with File System Module
// Build a simple Node.js script that runs continuously and logs the current timestamp to a file named activity.log every 10 Seconds.
// Requirements
// 1.	Use the fs module to write to a file.
// 2.	The file name should be: activity.log
// 3.	Every 2 minutes:
// o	Get the current system time.
// o	Format it in readable form (e.g., 2025-06-30 14:02:00).
// o	Append this timestamp to the file activity.log with a message like:
// Log entry at 2025-06-30 14:02:00
// 4.	Ensure:
// o	If the file doesn't exist, it should be created.
// o	If it exists, it should append to the file (not overwrite).






const fs = require('fs');
// The .trim() method in JavaScript removes leading and trailing whitespace from a string, including spaces, tabs, and newline characters (\n, \r, etc.).

function logActivity() {
  const data = new Date();
  const timestamp = data.toISOString().replace('T', ' ').split('.')[0]; // split('.') splits the string at the dot (.), which separates the seconds and milliseconds:


  const message = `Log entry at ${timestamp}\n`;

  fs.appendFile('activity.log', message, (err) => {
   if(!err) {
  console.log('Logged:', message.trim());
   }
     
  });
}


logActivity();
setInterval(logActivity, 12000); 








