// const http = require('http')
// const fs = require('fs')
// 200 OK
// 500 Internal Server Error
//304 Not Modified	
// 400	Bad Request
//404	Not Found
//502	Bad Gateway
//302 - Found
//302 – Redirect
// A status code is a 3-digit number that the server sends to the client





//-------Non-blocking I/O: Handles multiple requests at once using events.-----------
// const querystring = require('querystring') // -> is used in Node.js to import the querystring module, which helps parse and stringify URL query strings // ------------Parsing means analyzing a string and converting it into a structured object that your program can use.-----------------------------------------------






// UTF-8 stands for => Unicode Transformation Format -> 8-bit. It is the most common character encoding used on the web and in programming to represent text.







// const server = http.createServer((request, response)=>{
//     if(request.url == "/"){
//         response.write("Home page");
//         response.end();
//     }else if(request.url == "/login"){
//         fs.readFile('./login.html','utf-8',(err,data)=>{
//             // response.setHeader('Content-Type', 'text/html')
//             // console.log(response.getHeader('Content-Type'))
//             response.writeHead(200,{'Content-Type': 'text/html'}); // 200 -> Status
//             response.write(data);
//             response.end();
//         })
//     } else if(request.url == "/image") {

//         fs.readFile('./test.jpeg',(err, data)=>{
//             if(!err){
//                 response.writeHead(200,{'content-type': 'image/jpeg'});
//                 response.write(data);
//                 response.end();
//             }
//         })
//     } else {

//         response.write("404 Not found")
//         response.end()
//     } 
// })





// const PORT = 3000;

// server.listen(PORT,()=>{
//     console.log(`server started at http://localhost:${PORT}`)
// })





















