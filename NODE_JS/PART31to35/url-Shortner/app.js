import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { parse } from 'querystring';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;
const DATA_FILE = path.join(__dirname, 'urls.json');

// Load URL data from file (or create empty if not found)
const loadURLs = () => {
  if (!fs.existsSync(DATA_FILE)) return {};
  return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
};

// Save URL data
const saveURLs = (urls) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(urls, null, 2));
};

// HTML Template
const generateHTML = (recentShort = null, urls = {}) => {
  let message = '';
  if (recentShort) {
    const longUrl = urls[recentShort];
    message = `
      <h2>Shortened URL</h2>
      <div class="card">
        <p><strong>Short:</strong> <a href="/${recentShort}" target="_blank">localhost:3000/${recentShort}</a></p>
        <p><strong>Original:</strong> <a href="${longUrl}" target="_blank">${longUrl}</a></p>
      </div>
    `;
  }

  return `
  <!DOCTYPE html>
  <html>
  <head>
    <title>URL Shortener</title>
    <link rel="stylesheet" href="/style.css">
  </head>
  <body>
    <div class="container">
      <h1>URL Shortener</h1>
      <form method="POST" action="/shorten">
        <label for="url">Original URL:</label>
        <input type="url" id="url" name="url" required />
        <label for="shortCode">Short Code:</label>
        <input type="text" id="shortCode" name="shortCode" required />
        <button type="submit">Create Short URL</button>
      </form>
      ${message}
    </div>
  </body>
  </html>
  `;
};

// HTTP Server
const server = http.createServer((req, res) => {
  const urls = loadURLs();

  if (req.method === 'GET') {
    if (req.url === '/') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(generateHTML());
    } else if (req.url === '/style.css') {
      const cssPath = path.join(__dirname, 'public', 'style.css');
      fs.readFile(cssPath, (err, data) => {
        if (err) {
          res.writeHead(404);
          res.end('CSS not found');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/css' });
          res.end(data);
        }
      });
    } else {
      // Handle redirection
      const shortCode = req.url.slice(1); // Remove leading '/'
      const longUrl = urls[shortCode];
      if (longUrl) {
        res.writeHead(302, { Location: longUrl });
        res.end();
      } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1><p>Invalid short URL.</p>');
      }
    }
  } else if (req.method === 'POST' && req.url === '/shorten') {
    let body = '';
    req.on('data', chunk => (body += chunk));
    req.on('end', () => {
      const { url, shortCode } = parse(body);

      if (!url || !shortCode) {
        res.writeHead(400, { 'Content-Type': 'text/html' });
        res.end('<h1>400 Bad Request</h1><p>Missing URL or short code.</p>');
        return;
      }

      urls[shortCode] = url;
      saveURLs(urls);

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(generateHTML(shortCode, urls));
    });
  } else {
    res.writeHead(405, { 'Content-Type': 'text/html' });
    res.end('<h1>405 Method Not Allowed</h1>');
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
