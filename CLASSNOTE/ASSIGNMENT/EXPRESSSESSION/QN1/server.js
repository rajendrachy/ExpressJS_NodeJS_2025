const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const { secureHeapUsed } = require('crypto');


const app = express();


//middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
  secret: "secret-key",
  resave: false,
  saveUninitialized: true,
}));


//load user from json
const users = JSON.parse(fs.readFileSync('./user.json', 'utf-8'));





//Routers
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'login.html'));
})


app.post('/login', (req, res) => {
  const {username, password} = req.body;
  console.log(req.body);


    const user = users.find(u => u.username == username && u.password == password);

    if(user) {
      req.session.username = user.username;
      req.session.role = user.role;
      req.session.loginTime = new Date();



      // redirect based role
      if(user.role === "admin") {
        return res.redirect('/admin');
      } else {
        return res.redirect('/user');
      }
    }

  });


    //protect admin page
    app.get('/admin', (req, res) => {
      if(req.session.role == "admin") {
        res.sendFile(path.join(__dirname, 'views', 'admin.html'));
      } else {
    res.send("<h3>Access Denied! <a href='/'>Login</a></h3>");
      }
    })



    //protect user page
    app.get('/user', (req, res) => {
  if (req.session.role === "user" || req.session.role === "admin") {
    res.sendFile(path.join(__dirname, 'views', 'user.html'));
  } 


// Logout
app.get('/logout', (req, res) => {
  req.session.destroy(err => {
    res.redirect('/');
  });
});

})



app.listen(3000, () => {
  console.log("Server started");
})