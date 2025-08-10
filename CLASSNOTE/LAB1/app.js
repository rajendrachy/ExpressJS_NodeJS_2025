// // app.js (Synchronous version)
// const fs = require('fs');

// // Read file
// const data = fs.readFileSync('secE.txt', 'utf8');
// console.log('Before:', data);

// // // Write new content
// fs.writeFileSync('secE.txt', data + '\nAdded with sync method.');
// console.log('Synchronous write done.');














//-----------Asynchronous-------------------
// const fs = require('fs');

// fs.readFile('secE.txt', 'utf8', (err, data) => {
//   if (!err) {
//     console.log('Before:', data);

//     const updated = `${data}\nAdded with async method.`;

//     fs.writeFile('secE.txt', updated, 'utf8', (err) => {
//       if (!err) console.log('Write done.');
//       else console.error('Write error:', err);
//     });
//   } else {
//     console.error('Read error:', err);
//   }
// });





const fs = require('fs');

fs.readFile('secE.txt', 'utf-8', (err, data) => {
  console.log(data);

  const update = `${data} \n Add new data`;

  fs.writeFile('secE.txt', update, 'utf-8', (err) => {
    if(!err) {
      console.log("Successful");
    }
  })
})









