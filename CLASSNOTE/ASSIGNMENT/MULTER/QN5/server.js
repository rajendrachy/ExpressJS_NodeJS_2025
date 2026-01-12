const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// ---------------- Multer Setup ----------------

// Create folder dynamically: uploads/profile_pics/:userId, uploads/documents/:userId, uploads/others/:userId
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const userId = req.params.userId;
    let folder = 'others';
    if (file.fieldname === 'profilePic') folder = 'profile_pics';
    else if (file.fieldname === 'docs') folder = 'documents';

    const dir = path.join(__dirname, 'uploads', folder, userId);
    fs.mkdirSync(dir, { recursive: true }); // create folder if not exists
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    const userId = req.params.userId;
    const newName = `${file.fieldname}-${userId}-${Date.now()}-${file.originalname}`;
    cb(null, newName);
  },
});





// File validation
const fileFilter = (req, file, cb) => {
  const allowed = ['.jpg', '.jpeg', '.png', '.pdf', '.docx'];
  const ext = path.extname(file.originalname).toLowerCase();
  if (allowed.includes(ext)) cb(null, true);
  else cb(new Error('Invalid file type'), false);
};




// Multer instance
const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 2 * 1024 * 1024 }, // 2MB limit
});


// ---------------- Routes ----------------



// Home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});



// Upload files
app.post(
  '/upload/:userId',
  upload.fields([
    { name: 'profilePic', maxCount: 1 },
    { name: 'docs', maxCount: 5 },
    { name: 'others', maxCount: 5 },
  ]),
  (req, res) => {
    res.json({
      message: 'Files uploaded successfully!',
      uploaded: req.files,
    });
  }
);



// Get user files
app.get('/files/:userId', (req, res) => {
  const userId = req.params.userId;
  const base = path.join(__dirname, 'uploads');
  const folders = ['profile_pics', 'documents', 'others'];
  let allFiles = [];

  folders.forEach((folder) => {
    const dir = path.join(base, folder, userId);
    if (fs.existsSync(dir)) {
      const files = fs.readdirSync(dir).map(
        (f) => `uploads/${folder}/${userId}/${f}`
      );
      allFiles = allFiles.concat(files);
    }
  });

  res.json({ userId, files: allFiles });
});

// Delete file
app.delete('/delete/:userId/:folder/:filename', (req, res) => {
  const { userId, folder, filename } = req.params;
  const filePath = path.join(__dirname, 'uploads', folder, userId, filename);

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ message: 'File not found' });
  }

  fs.unlinkSync(filePath);
  res.json({ message: 'File deleted successfully!' });
});

// Error handler
app.use((err, req, res, next) => {
  res.status(400).json({ error: err.message });
});

// Start server
app.listen(3000, () => console.log('Server started on port 3000'));








