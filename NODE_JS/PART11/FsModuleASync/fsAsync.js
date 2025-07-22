


//------------------- 1. Write File (Asynchronous) ---------------------
//* fs.writeFile(): Writes data to a file. Creates file if not exists or overwrites if exists.
//! Syntax: fs.writeFile(filePath, data, options, callback);
//? filePath: Path of the file
//? data: The content to write
//? options: Optional. Encoding ('utf-8')
//? callback: Function that handles error
//* -------------------------------------------------------------------

const fs = require('fs');
const path = require('path');

const fileName = "text.txt";
const filePath = path.join(__dirname, fileName);

const dataToWrite = "This is the initial Data, updated";

fs.writeFile(filePath, dataToWrite, 'utf-8', (err) => {
  if (err) return console.error("Error writing file:", err);
  console.log("File written successfully.");
});










  //------------------- 2. Read File (Asynchronous) ----------------------
  //* fs.readFile(): Reads content of a file asynchronously.
  //! Syntax: fs.readFile(filePath, options, callback);
  //* --------------------------------------------------------------------

// const fs = require('fs');
// const path = require('path');

// const filePath = path.join(__dirname, "text.txt");

// fs.readFile(filePath, 'utf-8', (err, data) => {
//   if (err) return console.error("Error reading file:", err);
//   console.log("File content:\n", data);
// });









    //------------------- 3. Append File (Asynchronous) ---------------------
    //* fs.appendFile(): Appends data to a file. Creates file if not exists.
    //! Syntax: fs.appendFile(filePath, data, options, callback);
    //* ---------------------------------------------------------------------

// const fs = require('fs');
// const path = require('path');

// const filePath = path.join(__dirname, "text.txt");

// const dataToAppend = "\nThis is the appended data.";

// fs.appendFile(filePath, dataToAppend, 'utf-8', (err) => {
//   if (err) return console.error("Error appending to file:", err);
//   console.log("Data appended successfully.");
// });









      //------------------- 4. Rename File (Asynchronous) ----------------------
      //* fs.rename(): Renames or moves a file asynchronously.
      //! Syntax: fs.rename(oldPath, newPath, callback);
      //* ----------------------------------------------------------------------

// const fs = require('fs');
// const path = require('path');

// const oldPath = path.join(__dirname, "text.txt");
// const newPath = path.join(__dirname, "renamed-text.txt");

// fs.rename(oldPath, newPath, (err) => {
//   if (err) return console.error("Error renaming the file:", err);
//   console.log("File renamed successfully.");
// });









        //------------------- 5. Delete File (Asynchronous) ----------------------
        //* fs.unlink(): Deletes a file asynchronously.
        //! Syntax: fs.unlink(filePath, callback);
        //* ----------------------------------------------------------------------

// const fs = require('fs');
// const path = require('path');

// const filePathToDelete = path.join(__dirname, "renamed-text.txt");

// fs.unlink(filePathToDelete, (err) => {
//   if (err) return console.error("Error deleting the file:", err);
//   console.log("File deleted successfully.");
// });
