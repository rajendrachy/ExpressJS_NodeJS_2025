// import express from "express";
// import { PORT } from "./env.js";

// const app = express(); // create a instance


// app.get("/", (req, res) => { // / -> path
//   res.send("<h1>Hello World Rajendra</h1>");

// })

// app.get("/about", (req, res) => res.send("<h3> This is About page </h3>"))



// app.get("/contact", (req, res) => { // / -> path
//   return res.send(`
//     <div class="container">
//       <h1>URL Shortener</h1>
//       <form method="POST" action="/shorten">
//         <label for="url">Original URL:</label>
//         <input type="url" id="url" name="url" required />
//         <label for="shortCode">Short Code:</label>
//         <input type="text" id="shortCode" name="shortCode" required />
//         <button type="submit">Create Short URL</button>
//       </form>
//     </div>
//     `);
// })

// // console.log(process);



// // const PORT = 3000; 



// // ------------this dont need in part 40--------const PORT = process.env.PORT || 3001;--------------
// // const PORT = process.env.PORT || 3001; // using a  environment variable makeing a port no private and (||3001) is adding default port number if your want to add this add or not add

// app.listen(PORT, () => {
//   console.log(`Server is running at port : http:localhost:${PORT}`);
// })























//--------------Lac 42---------------------

// import express from "express";
// import { PORT } from "./env.js";
// import path from "path";

// const app = express(); // Create a instance

// //  console.log(__dirname);
// // console.log(__filename);

// app.get('/', (req, res) => {
    
//     //  console.log(import.meta.dirname); // alternative of __dirname from node.js

//     const homePath = path.join(import.meta.dirname, "public", "index.html")
//      res.sendFile(homePath);



//     //  const __filename = new URL(import.meta.url).pathname;
//     //  console.log(__filename);
// })


// app.listen(PORT, () => {
//   console.log("Server starting at port 3000");
// })





















//----------------part43-----------------
// import express from "express";
// import { PORT } from "./env.js";
// import path from "path";

// const app = express(); // Create a instance


// //absolute path => complete path start from root path
// // relative path => ./public



//  const StaticPath = path.join(import.meta.dirname, "public");
// app.use(express.static(StaticPath)); //pp.use(express.static("public"))  // this is also possible


// app.get('/', (req, res) => {
    
//     //  console.log(import.meta.dirname); // alternative of __dirname from node.js

//     const homePath = path.join(import.meta.dirname, "public", "index.html")
//      res.sendFile(homePath);



//     //  const __filename = new URL(import.meta.url).pathname;
//     //  console.log(__filename);
// })


// app.listen(PORT, () => {
//   console.log("Server starting at port 3000");
// })














//--------------Part44-------------------------

// import express from "express";
// import { PORT } from "./env.js";
// import path from "path";

// const app = express(); // Creating a Instance

// //In newer version of Nodejs(14.8+)  , you can use top-level await without needing to wrap it in an async function

// const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
// const json = await response.json();
// console.log(json);


// const staticPath = path.join(import.meta.dirname, "public");
// console.log(staticPath);


// app.use(express.static(staticPath));



// app.listen(PORT, () => {
//   console.log("Server starting on port 3000");
// })































//-------------part45--------------
// import express from "express";
// import { PORT } from "./env.js";
// import path from "path";
// import { log } from "console";

// const app = express(); // Creating a Instance

// //In newer version of Nodejs(14.8+)  , you can use top-level await without needing to wrap it in an async function

// const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
// const json = await response.json();
// console.log(json);



// const staticPath = path.join(import.meta.dirname, "public");
// console.log(staticPath);


// app.use(express.static(staticPath));


// app.get("/profile/:username", (req, res) => { // type /profile/username in the url 
//   console.log(req.params);
//   res.send(`<h1>My User Name is ${req.params.username}</h1>`);
// })


// app.get("/profile/:username/article/:slug", (req, res) => { // slug is used to uniquely identify in the programmer life
//   console.log(req.params);
//   const formatSlug = req.params.slug.replace(/-/g, " "); // replace - with " " space

//   res.send(`<h1>Article ${req.params.username} by ${formatSlug}</h1>`);
// })

// app.listen(PORT, () => {
//   console.log("Server starting on port 3000");
// })











































//--------------part46-------------
// import express from "express";
// import { PORT } from "./env.js";
// import path from "path";
// import { log } from "console";

// const app = express(); // Creating a Instance

// //In newer version of Nodejs(14.8+)  , you can use top-level await without needing to wrap it in an async function

// const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
// const json = await response.json();
// console.log(json);



// const staticPath = path.join(import.meta.dirname, "public");
// console.log(staticPath);


// app.use(express.static(staticPath));


// app.get("/product", (req, res) => {
// console.log(req.query); // we get a empty Object => [Object: null prototype] {}
// res.send
// (`<h1>User Search for Product ${req.query.search} ${req.query.page} ${req.query.limit}Page</h1>`)
// })


// app.get("/profile/:username", (req, res) => { // type /profile/username in the url 
//   console.log(req.params);
//   res.send(`<h1>My User Name is ${req.params.username}</h1>`);
// })


// app.get("/profile/:username/article/:slug", (req, res) => { // slug is used to uniquely identify in the programmer life
//   console.log(req.params);
//   const formatSlug = req.params.slug.replace(/-/g, " "); // replace - with " " space

//   res.send(`<h1>Article ${req.params.username} by ${formatSlug}</h1>`);
// })

// app.listen(PORT, () => {
//   console.log("Server starting on port 3000");
// })



























// //--------------------part47--------------
// import express from "express";
// import { PORT } from "./env.js";
// import path from "path";

// const app = express();


// const staticPath = path.join(import.meta.dirname, "public");



// app.use(express.static(staticPath));


// // ----------for post we should use extra middlewere-----------
// // app.use(express.urlencoded())
// // or, 
// app.use(express.urlencoded({extended : true})); // data parse then show without using it we see undefined in the console



// //---------this is for GET request by default in the index.html
// // app.get("/contact", (req, res) => {
// //   console.log(req.query);
// //   res.redirect("/");
// // })






// //-----------for post request in index.html---------
// app.post("/contact", (req, res) => {
//   console.log(req.body);
//   res.redirect("/");
// })


// app.listen(PORT, () => {
//   console.log("Server starting on port 3000");
// })






























//--------------------part48--------------
// import express from "express";
// import { PORT } from "./env.js";
// import path from "path";

// const app = express();


// const staticPath = path.join(import.meta.dirname, "public");



// app.use(express.static(staticPath));


// // ----------for post we should use extra middlewere-----------

// // app.use(express.urlencoded())
// // or, 
// app.use(express.urlencoded({extended : true})); // data parse then show without using it we see undefined in the console


// //---------this is for GET request by default in the index.html
// // app.get("/contact", (req, res) => {
// //   console.log(req.query);
// //   res.redirect("/");
// // })






// //-----------for post request in index.html---------
// app.post("/contact", (req, res) => {
//   console.log(req.body);
//   res.redirect("/");
// })


// //------part48-----------without html
// // app.use((req, res) => {
// //      return res.status(404).send("Page not found")
// // })



// // --------using html views folder--------------
// app.use((req, res) => {
//   return res.status(404).sendFile(path.join(import.meta.dirname, "views", "404.html"))
// })




// app.listen(PORT, () => {
//   console.log("Server starting on port 3000");
// })




