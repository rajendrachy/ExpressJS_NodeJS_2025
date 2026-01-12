## Multer `newFile` Explanation

- `newFile` is the **new filename** used when saving an uploaded file.
- `Date.now()` generates a **unique timestamp** to avoid filename conflicts.
- `path.extname(file.originalname)` keeps the **original file extension**.
- Example:
  - Original file: `photo.jpg`
  - Saved file: `1702465123456.jpg`
- This helps prevent overwriting files and keeps uploads organized.









