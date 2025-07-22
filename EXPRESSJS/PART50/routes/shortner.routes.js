import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_FILE = path.join(__dirname, 'urls.json');

const loadURLs = () => {
  if (!fs.existsSync(DATA_FILE)) return {};
  return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
};

const saveURLs = (urls) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(urls, null, 2));
};

const generateHTML = (recentShort = null, urls = {}) => {
  let message = '';
  if (recentShort) {
    const longUrl = urls[recentShort];
    message = `
      <h2>Shortened URL</h2>
      <p><strong>Short:</strong> <a href="/${recentShort}">localhost:3000/${recentShort}</a></p>
      <p><strong>Original:</strong> <a href="${longUrl}">${longUrl}</a></p>
    `;
  }

  return `
    <html>
    <head><title>URL Shortener</title></head>
    <body>
      <h1>URL Shortener</h1>
      <form method="POST" action="/shorten">
        <input type="url" name="url" placeholder="Enter URL" required />
        <input type="text" name="shortCode" placeholder="Short code" required />
        <button type="submit">Shorten</button>
      </form>
      ${message}
    </body>
    </html>
  `;
};

router.get('/', (req, res) => {
  res.send(generateHTML());
});

router.post('/shorten', (req, res) => {
  const { url, shortCode } = req.body;
  const urls = loadURLs();
  urls[shortCode] = url;
  saveURLs(urls);
  res.send(generateHTML(shortCode, urls));
});

router.get('/:shortCode', (req, res) => {
  const urls = loadURLs();
  const longUrl = urls[req.params.shortCode];
  if (longUrl) res.redirect(longUrl);
  else res.status(404).send('<h1>404 Not Found</h1>');
});

export default router;




