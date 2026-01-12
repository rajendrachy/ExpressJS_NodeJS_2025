//-----------Read two files and the combine them in one file and write that two files under that combine file-----------




// -------------using WriteFile--------------------

// const fs = require('fs');

// fs.readFile('file1.txt', 'utf8', (err1, data1) => {
//   if (!err1) {
//     fs.readFile('file2.txt', 'utf8', (err2, data2) => {
//       if (!err2) {
//         const combined = `${data1}\n${data2}`;

//         fs.writeFile('combined.txt', combined, 'utf8', (err3) => {
//           if (!err3) console.log('Files combined successfully!');
//           else console.error('Write error:', err3);
//         });
//       } else {
//         console.error('Error reading file2:', err2);
//       }
//     });
//   } else {
//     console.error('Error reading file1:', err1);
//   }
// });








//----------------using appendFile()-----------------------
// const fs = require('fs');
// fs.readFile('file1.txt', 'utf-8', (err1, data1) => {
//   if(!err1) {
//         console.log(data1);
        
//   }
//   fs.readFile('file2.txt', 'utf-8', (err2, data2) => {
//     if(!err2) {
//       console.log(data2);
//     }

//     const combineData = `${data1} \n ${data2}`;

//     fs.appendFile('data3.txt', combineData, 'utf-8', (err3) => {
//       if(!err3) {
//         console.log("Success");
//       }
//     })
//   })
// })














const fs = require('fs');


fs.readFile('./file1.txt', 'utf-8', (err1, data1) => {
     if(!err1) {
      console.log(data1);
     }

     fs.readFile('./file2.txt', 'utf-8', (err2, data2) => {
         if(!err2) {
           console.log(data2);
         }


         const combine = `${data1}\n ${data2}`;

         fs.appendFile('./combine.txt', combine, (err) => {
           if(!err) {
                console.log("Success");
           }
         })
     })
})











