import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_FILE = path.join(__dirname, 'urls.json');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// // Load URL data from file
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

// Routes

app.get('/', (req, res) => {
  res.status(200).send(generateHTML());
});

app.post('/shorten', (req, res) => {
  const { url, shortCode } = req.body;
  const urls = loadURLs();

  if (!url || !shortCode) {
    return res.status(400).send('<h1>400 Bad Request</h1><p>Missing URL or short code.</p>');
  }

  urls[shortCode] = url;
  saveURLs(urls);

  res.status(200).send(generateHTML(shortCode, urls));
});

app.get('/:shortCode', (req, res) => {
  const urls = loadURLs();
  const longUrl = urls[req.params.shortCode];

  if (longUrl) {
    res.redirect(longUrl);
  } else {
    res.status(404).send('<h1>404 Not Found</h1><p>Invalid short URL.</p>');
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}`);
});
