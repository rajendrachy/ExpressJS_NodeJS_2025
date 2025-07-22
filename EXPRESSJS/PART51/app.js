import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import shortnerRoutes from './routes/shortner.routes.js';

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));







app.set("view engine", "ejs");
//app.set("views", "./views"); // dont need to do this by default views  so use first i.e app.set("view engine", "ejs");


// Use routes
app.use('/', shortnerRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


