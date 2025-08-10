//----------------------- server.js This is using a Node.js ------------------
// const http = require('http');
// const url = require('url');

// const server = http.createServer((req, res) => {
//   const parsedUrl = url.parse(req.url, true); // true to get query as an object

//   console.log("The parse url is: ", parsedUrl);

//   const pathname = parsedUrl.pathname;
//   const query = parsedUrl.query;

//   if (req.method === 'GET' && pathname === '/greet') {
//     const name = query.name;
//     let message;

//     switch (name) {
//       case 'Rahul':
//         message = "Hello, Rahul!";
//         break;
//       default:
//         message = "Hello, Guest!";
//     }

//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     console.log("The message is: ", message);

//     res.end(message);
//   } else {
//     res.writeHead(404, { 'Content-Type': 'text/plain' });
//     res.end('404 Not Found');
//   }
// });



// server.listen(3000, () => {
//   console.log("Server running at http://localhost:3000");
// });









//------practic------------------
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const server = http.createServer((req, res) => {
  const parseUrl = url.parse(req.url, true);
  console.log("The parse url is: ", parseUrl);

  const pathName = parseUrl.pathname;
  const query = parseUrl.query;

let message;
  if(pathName == '/greet' && req.method == "GET") {
            const name = query.name;
            console.log("The name is :", name);

            

            if(name == "Rahul") {
              message = "Hello, Rahul";
            } else if(name == "eng"){
                 message = "Hello, English";
            } else {
              message = "Hello(Defailt)";
            }
          
  }
 res.end(message);
})


server.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
})

