const http = require('http');
const fs = require('fs');
const path = require('path');
const querystring = require('querystring');


const server = http.createServer((req, res) => {
    if(req.url == '/form' && req.method == "GET") {
           fs.readFile('./form.html', 'utf-8', (err,data) => {
              if(!err) {
                res.write(data);
                res.end();
              }
           })
    }   else if(req.url == '/form' && req.method == "POST") {
            let body = "";

            req.on("data", (chunk) => {
              
                body += chunk.toString();
            })

            req.on("end", () => {
                 const name = querystring.parse(body).name;
                 const email = querystring.parse(body).email;
                 
                 res.end(`Thank You, ${name}. \n Your email is ${email}`);
                 
            })
    }
})



server.listen(3000, () => {
    console.log("Server started");
})





