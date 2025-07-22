const http = require('http')
const fs = require('fs')
const querystring = require('querystring')
// The querystring module helps you:
// Convert query strings → JavaScript objects
// Convert JavaScript objects → query strings
// Parse and format URL query strings or form-encoded data.

// Client = sends requests (e.g., browser, mobile app)
// Server = responds to requests (e.g., Node.js app, API server)


const server = http.createServer((req, res)=>{
    if(req.url == "/login" && req.method == "GET"){
        fs.readFile('./login.html', (err, data)=>{
            if(!err){
                res.writeHead(200, {'content-type': 'text/html'})
                res.write(data)
                res.end()
            }
        })
        
        

    }  else if(req.url == "/login" && req.method == "POST"){
        let body = ""
        let arr ;
        req.on("data", (chunk)=>{
            body += chunk.toString()
        })
        req.on('end', ()=>{
            // console.log(querystring.parse(body))
            fs.readFile('./data.json', "utf-8", (err, data)=>{
               if(data.length != 0){
                arr = JSON.parse(data); // JSON.parse() is a built-in JavaScript function that converts a JSON-formatted string into a JavaScript object.
               }else{
                arr = []
               }

               arr.push(querystring.parse(body)); // Converts a URL-encoded string (like form data) into a JavaScript object.


               fs.writeFile('./data.json', JSON.stringify(arr), (err)=>{
                if(!err){
                    res.end(`Received data for user: ${querystring.parse(body).username}`);
                }
               })
            })
        })
    } else {
        res.writeHead(404, {'content-type': 'text/plain'})
        res.end('404-Page Not Found');
    }
})




server.listen(3000, ()=>{
    console.log('server started...');
})


