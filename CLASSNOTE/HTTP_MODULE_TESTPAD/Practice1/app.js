// const http = require('http');
// const path = require('path');
// const fs = require('fs');


// const server = http.createServer((req, res) => {
//       if(req.url == '/public/style.css') {
//          fs.readFile(path.join(__dirname , 'public', 'style.css'), 'utf-8', (err, data) => {
//            if(!err)  {
//             // console.log(data);
//              res.write(data);
//             res.end();
//            }
//          })
//       } else {
//         res.end("404 not found");
//       }
// })


// server.listen(3000, () => {
//   console.log('Server started');
  
// })
























//-----------This is leanthy way--------------
// const http = require('http');
// const path = require('path');
// const fs = require('fs');

// Create a simple HTTP server
// This server will serve static files from the /public directory




// const server = http.createServer((req, res) => {
//   // Make sure the request is for something inside /public/
//   if (req.url.startsWith('/public/')) {
//     const filePath = path.join(__dirname, req.url);

//     fs.readFile(filePath, (err, data) => {
//       if (err) {
//         res.statusCode = 404;
//         return res.end("404 not found");
//       }

//       // Detect file type
//       const ext = path.extname(filePath).toLowerCase();
//       let contentType = 'application/octet-stream';
//       if (ext === '.css') contentType = 'text/css';
//       if (ext === '.js') contentType = 'application/javascript';
//       if (ext === '.html') contentType = 'text/html';
//       if (ext === '.png') contentType = 'image/png';
//       if (ext === '.jpg' || ext === '.jpeg') contentType = 'image/jpeg';

//       res.setHeader('Content-Type', contentType);
//       res.end(data);
//     });

//   } else {
//     res.statusCode = 404;
//     res.end("404 not found");
//   }
// });

// server.listen(3000, () => {
//   console.log('Server started on http://localhost:3000');
// });










//------------Another MAIN short way---------------------

// const http = require('http');
// const url = require('url');
// const fs = require('fs');


// const server = http.createServer((req, res) => {
//        if(!req.url.startsWith('/public/')) {
//            res.end('404 not found');
//            return;
//        } else {
//         console.log("The path:", __dirname + req.url);
//         console.log("the dir: ", __dirname);
//         console.log("The url is", req.url);


//         fs.readFile(__dirname + req.url, (err, data) => {

          

//           if(err) {
//             res.send('404 not found');
//             return;
//           } 
//           res.end(data);
//         })
//        }
// })


// server.listen(3000, () => {
//   console.log('Server started on http://localhost:3000');
// })


