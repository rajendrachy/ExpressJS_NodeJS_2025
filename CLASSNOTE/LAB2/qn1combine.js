//Read two file and write in the another file

// UTF-8 refers to a character encoding 
// It is the default and most widely used text encoding on the web and in Node.js.
// Without 'utf8', you’d get raw Buffer data.



// const fs = require('fs');

// fs.readFile('./file1.txt', 'utf-8' , (err1, data1) => {
//          if(!err1) {
//           console.log(`The data1 is : ${data1}`);

//         fs.readFile('./file2.txt', 'utf-8', (err2, data2) => {
//           if(!err2) {
//             console.log(`The data2 is : ${data2}`);

//               const combine = `${data1}\n${data2}`;

//               fs.writeFile('combine.txt', combine, 'utf-8', (err3) => {
//                  if(!err3) {
//                   console.log("File added Successfully");
//                  }
//               })
//           }
//         })
//       }
// })













//--------------using promises-----------------
// const fs = require('fs').promises;

// async function combineFiles() {
//   try {
//     const data1 = await fs.readFile('./file1.txt', 'utf-8');
//     console.log(`The data1 is : ${data1}`);

//     const data2 = await fs.readFile('./file2.txt', 'utf-8');
//     console.log(`The data2 is : ${data2}`);

//     const combined = `${data1}\n${data2}`;

//     await fs.writeFile('combine.txt', combined, 'utf-8');
//     console.log('File added Successfully');
    
//   } catch (err) {
//     console.error('Error:', err.message);
//   }
// }

// combineFiles();







