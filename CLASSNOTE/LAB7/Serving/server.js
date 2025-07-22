const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
      
  if(req.url === '/') {
    res.setHeader("Content-Type", "text/plain");
     res.write("Home Page");
     res.end();
  }else if(req.url === '/home') {
    fs.readFile('./index.html', 'utf-8' , (err, data) => {
      if(!err) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
      }
    })
  }
})



server.listen(3000, () => {
  console.log("Server is running on port 3000");
})






