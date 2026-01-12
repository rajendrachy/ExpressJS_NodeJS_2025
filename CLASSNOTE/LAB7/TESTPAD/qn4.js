const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/api/user') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const user = {
      name: "John Doe",
      age: 30,
      profession: "Developer"
    };
    res.end(JSON.stringify(user));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end("404 - Page Not Found");
  }
});




server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});





