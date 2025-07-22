const fs = require('fs');
const path = require('path');



const fileName = "text.txt";
const filePath = path.join(__dirname, fileName);



//-------------------WriteFile---------------------------------------------------
//* fs.writeFileSync(): Writes data to a file. if the file does not exists, it will be create. if the file exists, it overwrites the content.

//! syntax: fs.writeFileSync(filePath, data, options);
//? filePath: The file path to write to
//? data: The content to write on the file
//? options: OPtional. Inclludes ecoding ('utf8'), mode, or flags

//--------------------------------------------------------------------------------


//----------Using a Synchronous method-------------


const writeFile = fs.writeFileSync(filePath, "This is the initial Data, updated", 'utf-8');

console.log(writeFile);












//--------------------------ReadFile------------------------
//* fs.readFileSync(): Reads a files content and returns it as a string  or BUffers

//! syntax: const data = fs.readFileSync(filePath,options);
//? filePath: Path of the file to read
//? options: Optional. Encoding ('utf8) to get data as a string.

//*------------------------------------------------------------------*




// const readFile = fs.readFileSync(filePath);
// console.log(readFile);
// console.log(readFile.toString());


//----or----
// const readFile = fs.readFileSync(filePath, "utf-8");
// console.log(readFile);










//----------------------Append------------------------------
//* -----------------------------
//* fs.appendFileSync(): Appends data to a file. Creates the file if it doesn't exist
//! Syntax: fs.appendFileSync(filePath, data, options);
//? filePath: Path of the file to append to
//? data: The content you want to append
//? options: Optional — encoding like 'utf-8'
//* -----------------------------




// const appendFile = fs.appendFileSync(filePath, "\nThis is the updatad data", 'utf-8');
// console.log(appendFile);










//----------------------Delete File------------------------------
//* fs.unlinkSync(): Deletes a file at the given path
//! Syntax: fs.unlinkSync(filePath);
//? filePath: Path of the file to be deleted
//* -------------------------------------------------------------

// Check if file exists before trying to delete
// const fileDelete = fs.unlinkSync(filePath);
// console.log(fileDelete);



















//----------------------Rename File------------------------------
//* fs.renameSync(): Renames or moves a file from old path to new path
//! Syntax: fs.renameSync(oldPath, newPath);
//? oldPath: Current file path
//? newPath: New file path or name
//* -------------------------------------------------------------
// const newFileName = "renamed-text.txt";
// const newFilePath = path.join(__dirname, newFileName);

// const renameFile = fs.renameSync(filePath, newFilePath)

// console.log(renameFile);
