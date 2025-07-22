const http = require("http");

const server = http.createServer((req, res) => {
 res.setHeader("Content-Type", "text/html");
  if(req.url === "/") {
    res.write("<h1>I am Rajendra Chaudhary Home Page</h1>");
    res.end();
  }

  if(req.url === "/source-code") {
    res.write("This is the source code of the web server");
    res.end();
  }


  if(req.url === "/contact") {
    res.setHeader("Content-Type", "text/plain");
    res.write("I am Rajendra Chaudhary, a Full Stack Developer");
    res.end();
  }
});


// server.on or server.listen or server.addListener => all are correct

//----web server ----



const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})


