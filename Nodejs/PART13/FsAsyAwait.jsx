const fs = require('fs').promises;
const path = require('path');

// Define file paths
const fileName = "text.txt";
const filePath = path.join(__dirname, fileName);

const newFileName = "renamed-text.txt";
const newFilePath = path.join(__dirname, newFileName);

// Async function to perform all operations
const performFileOperations = async () => {
  try {
    //------------------- 1. Write File ---------------------------------
    //* fs.writeFile(): Creates or overwrites a file with specified content
    const content = "This is the initial Data, updated";
    await fs.writeFile(filePath, content, 'utf-8');
    console.log("File written successfully.");

    //------------------- 2. Read File ----------------------------------
    //* fs.readFile(): Reads and returns content of the file
    const readContent = await fs.readFile(filePath, 'utf-8');
    console.log("File content:\n", readContent);

    //------------------- 3. Append File --------------------------------
    //* fs.appendFile(): Appends data to an existing file
    const appendedData = "\nThis is the appended data.";
    await fs.appendFile(filePath, appendedData, 'utf-8');
    console.log("Data appended successfully.");

    //------------------- 4. Rename File --------------------------------
    //* fs.rename(): Renames or moves the file
    await fs.rename(filePath, newFilePath);
    console.log("File renamed successfully.");

    //------------------- 5. Delete File --------------------------------
    //* fs.unlink(): Deletes the file
    await fs.unlink(newFilePath);
    console.log("File deleted successfully.");
  } catch (error) {
    console.error("Error during file operations:", error.message);
  }
};

// Call the async function
performFileOperations();







