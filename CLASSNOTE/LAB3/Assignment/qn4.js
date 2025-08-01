// D.	Backup System for .txt Files
// Create a Node.js script that:
// •	Scans the folder myNotes/
// •	Finds all .txt files
// •	Copies them into a new folder backupNotes/
// •	Skips non-.txt files
// •	Creates the destination folder if it doesn't exist
// Requirements
// 1.	Source folder: myNotes/
// o	Located in the same directory as your script
// o	Contains various file types (e.g., .txt, .pdf, .jpg)
// 2.	Destination folder: backupNotes/
// o	Created automatically if it doesn’t exist
// 3.	Copy only files that end with .txt
// 4.	Print a success message for each file copied

const fs = require('fs');
const path = require('path');

const sourceDir = './myNotes';
const destDir = './backupNotes';

if(!fs.existsSync(sourceDir)) {
  console.log("File not found");
  process.exit(1);


}


if(!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, {recursive : true});
}

fs.readdir(__dirname + '/myNotes', (err, data) => {
      if(!err) {
        console.log(data);
        data.forEach((val)=> {
          const itemPath = __dirname + '/myNotes' + '/' + val;

            if(fs.statSync(itemPath).isFile() && val.endsWith('.txt')) {
                const destPath = __dirname + '/backupNotes' + '/' + val;
                
                console.log(val);
               
                fs.copyFile(itemPath, destPath, (err) => {
                  if(!err) {
                    console.log("File .txt copy successful!");
                  }
                })
            }
        })
      }
})








// const fs = require('fs');

// const sourceDir = './myNotes';
// const destDir = './backupsNotes';

// if(!fs.existsSync(sourceDir)) {
//   console.log("Folder not found create folder first");
//   process.exit(1);
// }

// if(!fs.existsSync(destDir)) {
//   fs.mkdirSync(destDir, {resursive: true});
// }


// fs.readdir(sourceDir, (err, data) => {
//   if(!err) {
//     console.log(data);

//     data.forEach(val => {
//       const itemPath = sourceDir + '/' + val;
      
//       if(fs.statSync(itemPath).isFile() && val.endsWith('.txt')) {
//             console.log(val);
//             const destPath = destDir + '/' + val;

//             fs.copyFile(itemPath, destPath, (err) => {
//               if(!err) {
//                 console.log("File copy successfully");
//               }
//             })
//       }
//     })
//   }
// })











// const fs = require('fs');

// const source = './myNotes';
// const destination = './backupNotes';

// // Check if source folder exists
// if (!fs.existsSync(source)) {
//   console.log('myNotes/ folder not found.');
//   process.exit(1);
// }

// // Create backup folder if not exists
// if (!fs.existsSync(destination)) {
//   fs.mkdirSync(destination, { recursive: true });
// }

// // Read files in myNotes/
// fs.readdir(source, (err, files) => {
//   if (!err) {
//     files.forEach(file => {
//       const filePath = source + '/' + file;

//       // Copy only .txt files
//       if (fs.statSync(filePath).isFile() && file.endsWith('.txt')) {
//         const destPath = destination + '/' + file;
//         fs.copyFile(filePath, destPath, (err) => {
//           if (!err) {
//             console.log(`Copied: ${file}`);
//           } else {
//             console.log(`Error copying ${file}:`, err.message);
//           }
//         });
//       }
//     });
//   } else {
//     console.log('Error reading myNotes/:', err.message);
//   }
// });










