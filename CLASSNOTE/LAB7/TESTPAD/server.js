const http = require('http');


 const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");
  res.write("Welcome to My First Node.js Server");
  res.end();

})


const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is runnin in port ${PORT}`);
})



