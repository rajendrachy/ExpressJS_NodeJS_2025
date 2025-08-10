// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// const server = http.createServer((req, res) => {
//         if(req.url == '/data.html') {
//           fs.readFile('./data.html', 'utf-8', (err1, data1) => {
//             if(!err1) {
//               res.writeHead(200, {'Content-Type':'text/html'})
//               res.write(data1);
//               res.end();
//             }
//           })
//         } else if(req.url == '/data.json') {
//           fs.readFile('./data.json', 'utf-8', (err2, data2) => {
//             if(!err2) {
//               res.writeHead(200, {'Content-Type':'application/json'})
//               res.write(data2);
//               res.end();
//             }
//           })
//         } else if(req.url == '/data.txt') {
//           fs.readFile('./data.txt', 'utf-8', (err3, data3) => {
//             if(!err3) {
//               res.writeHead(200, {'Content-Type': 'text/plain'})
//               res.write(data3);
//               res.end();
//             }
//           })

//         }
// })



// server.listen(3000, () => {
//   console.log("server Started");
// })












//-------This is correct method------------------
const http = require('http');
const path = require('path');
const fs = require('fs');
const url = require('url');



const server = http.createServer((req, res) => {

  const parseUrl = url.parse(req.url, true);
  console.log("The parse url is: ", parseUrl);

const pathName = parseUrl.path;

console.log(pathName);


fs.readFile(path.join(__dirname, pathName), (err, data) => {
      if(err) {
        res.write("404 not found");
        res.end();
        return;
      }

      let contentType = 'text/plain';

           if(pathName.endsWith('.html')) {
               contentType = 'text/html';
           } else if(pathName.endsWith('.json')) {
               contentType = 'application/json';
           }

           res.write(data);
           res.end();
})

})


server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
})





