const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();


// JSON.stringify(value, replacer, space)

app.use(express.json());

app.use(express.urlencoded({ extended: false }));


app.get("/login", (req, res) => {
   res.sendFile(path.join(__dirname, 'public', 'login.html'));
})



app.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'signup.html'));
})


app.post("/signup", (req, res) => {
   console.log("User Data:", req.body);

let arr = [];

   fs.readFile('./user.json', 'utf-8', (err, data) => {
    if(!err && data.length != 0) {
      arr = JSON.parse(data);
    }

    arr.push(req.body)

    fs.writeFile('./user.json', JSON.stringify(arr), (err) => {
      if(!err) {
        console.log("Data saved successfully");
        res.sendFile(path.join(__dirname, 'public', 'login.html'));
      }
    })
   })
  

})



app.post("/login", (req, res) => {

  console.log("Log data: ", req.body);
  fs.readFile('./user.json', 'utf-8', (err, data) => {
       if(!err) {
       //console.log(data);
       }

       const item = JSON.parse(data);
       console.log(item);


      const match = item.find(val => val.username === req.body.username && val.password === req.body.password);

      
      if(match) {
        res.status(200).send("Login success")
      }

      if(!match) {
        res.status(401).send("Invalid input");
      }
  })
})


app.listen(3000, ()=> {
  console.log("Server is running on port 3000");
})


