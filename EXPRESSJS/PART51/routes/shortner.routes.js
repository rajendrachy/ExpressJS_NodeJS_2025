import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_FILE = path.join(__dirname, '../urls.json');
const INDEX_HTML_PATH = path.join(__dirname, '../views/index.html');

// Load saved URLs
const loadURLs = () => {
  if (!fs.existsSync(DATA_FILE)) return {};
  return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
};

// Save URLs to file
const saveURLs = (urls) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(urls, null, 2));
};

// Serve homepage
router.get('/', (req, res) => {
  res.sendFile(INDEX_HTML_PATH);
});



//-----report card---------
router.get("/report", (req, res) => {
  const student = {
    names : "Rajendra",
    grade : "BE CSE",
    favSub: "Mathmatics",
  };

 return res.render("report", {student}); // render that file 
})




// Handle form submission
router.post('/shorten', (req, res) => {
  const { url, shortCode } = req.body;
  const urls = loadURLs();

  // Optional: prevent overwrite
  if (urls[shortCode]) {
    return res.send(`
      <h1>Short code already exists!</h1>
      <a href="/">Back</a>
    `);
  }

  urls[shortCode] = url;
  saveURLs(urls);

  res.send(`
    <html>
    <head><title>Shortened</title></head>
    <body>
      <h2>URL Shortened!</h2>
      <p><strong>Short URL:</strong> <a href="/${shortCode}">localhost:3000/${shortCode}</a></p>
      <p><strong>Original URL:</strong> <a href="${url}">${url}</a></p>
      <a href="/">Back to Home</a>
    </body>
    </html>
  `);
});

// Redirect to original URL
router.get('/:shortCode', (req, res) => {
  const urls = loadURLs();
  const longUrl = urls[req.params.shortCode];

  if (longUrl) {
    res.redirect(longUrl);
  } else {
    res.status(404).send('<h1>404 - Short URL Not Found</h1><a href="/">Back</a>');
  }
});

export default router;
