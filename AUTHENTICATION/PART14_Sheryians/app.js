//-------------------cookies--------------------------

// const cookieParser = require('cookie-parser');
// const express = require('express');
// const app = express();


// app.use(cookieParser());


// app.get("/", (req, res) => {
//   res.cookie("name", "harsh");
//   res.end("done");
// })



// app.get("/read", (req, res) => {
//   console.log(req.cookies); // this is undefined because the cookies in not install =>  npm i cookie-parser and use app.Use();

//  res.send("read page");
// })


// app.listen(3000, () => {
//   console.log("Server start");

// });










//---------------------bcrypt----------------
// https://www.npmjs.com/package/bcrypt

// const express = require('express');
// const app = express();

// const bcrypt = require('bcrypt');

// app.get("/", (req, res) => {
// bcrypt.genSalt(10, function(err, salt) {
//     bcrypt.hash("polololoo", salt, function(err, hash) {
//         // Store hash in your password DB.
//         console.log(hash);
//     });
// });
// })


// app.get("/", (req, res) => {
//   res.cookie("name", "harsh");
//   res.end("done");
// })



// app.get("/read", (req, res) => {
//   console.log(req.cookies); // this is undefined because the cookies in not install =>  npm i cookie-parser and use app.Use();

//  res.send("read page");
// })


// app.listen(3000, () => {
//   console.log("Server start");

// });



















//---------------JWT--------------------
const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jwt');
const cookieParser = require('cookie-parser');

app.use(cookieParser());


app.get("/", (req, res) => {
   let token = jwt.sign({email:"anf@example.com"}, "secret");
   res.cookie("token", token);
   console.log(token);
   res.send("done");
}) 



app.get("/read", (req, res) => {
// console.log(req.cookies.token);

let data = jwt.verify(req.cookies.token, "secret");
})


app.listen(3000, () => {
  console.log("Server start");

});
