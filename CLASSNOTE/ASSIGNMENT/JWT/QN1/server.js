const express = require("express");
const path = require('path');
const fs = require("fs");
const app = express();
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

app.use(express.urlencoded())
app.use(cookieParser());


app.get("/", (req, res) => {
     res.sendFile(path.join(__dirname,  "views", "signup.html"))
})




const secret_key = 'skmdfdfknv';

app.post("/signup", (req, res) => {

   let arr = [];

   fs.readFile("./user.json", "utf-8", (err, data) => {
       if(!err && data.length != 0) {
        arr = JSON.parse(data);
       }

       arr.push(req.body);

       fs.writeFile("./user.json", JSON.stringify(arr), (err) => {
          console.log("Save data");
         

          const token = jwt.sign({username: req.body.username, role: req.body.role}, secret_key, {expiresIn: "1h"});

          res.cookie("token", token);
         res.redirect('/login');
       })
   })
})





app.get("/login", (req, res) => {
   res.sendFile(path.join(__dirname, "views", "login.html"));
})



app.post("/login", (req, res) =>{
  const{username, password} = req.body;

  const users = JSON.parse(fs.readFileSync("./user.json"), 'utf-8');

  const user = users.find((u) => u.username === username && u.password === password);


  if(!user) return res.send("Invalid");

  const payload = {
    username: user.username,
    role: user.role,
    loginTime: new Date().toISOString(),
  };


  const token = jwt.sign(payload, secret_key, { expiresIn: "1h" });


res.cookie("token", token);


if(user.role === "admin") {
  res.sendFile(path.join(__dirname, "views", "admin.html"));
} else if(user.role == "user") {
  res.sendFile(path.join(__dirname, "views", "user.html"));
} else {
  res.redirect('/login');
}

})







function verifyToken(req, res, next) {
   const token = req.body.token;
   if(!token ) return res.send("No token, login first");

   try {
     req.user = jwt.verify(token, secret_key);
     next();
   } catch(err) {
      res.send("invalid");
   }
}









app.listen(3000, () => {
  console.log("Server started");
})




