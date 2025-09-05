const express = require('express');
const session = require('express-session');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');



const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
  secret: "secret-key",
  resave: false,
  saveUninitialized: true,
}))


const users = JSON.parse(fs.readFileSync('./user.json'), 'utf-8');



app.get('/', (req, res)=> {
  res.sendFile(path.join(__dirname, 'views', 'login.html'))
})



app.post('/login', (req, res) => {
  const {username, password}  = req.body;
  console.log(req.body);

    const user = users.find(u => u.username == username && u.password == password);

  
    if(user) {
      req.session.username = user.username;
      req.session.loginTime = new Date();

      return res.redirect('/user');
    } else {
      return res.send("Invalid !");
    }

})

app.get('/user', (req, res) => {
   if(req.session.username) {
    res.sendFile(path.join(__dirname, 'views', 'user.html'));
   } else {
    res.redirect('/');
   }
})


app.get('/profile', (req, res) => {
   if(req.session.username) {
    const now = new Date();
    const loginTime = new Date(req.session.loginTime);
    const timeSinceLogin = Math.floor((now - loginTime) / 100); // in second

    res.send(`
      <h1>Profile Picture</h1>
      <p>Username: ${req.session.username}</p>
      <p> Session id: ${req.session.id} </p>
      <p>Time SinceLogin: ${timeSinceLogin} </p>
      <p> <a href="/logout" >Logout</a>
      `
    )

   } else {
    res.redirect('/');
   }
})


app.get('/logout', (req, res) => {
  req.session.destroy(err => {
    res.redirect('/');
  })
})



app.listen(3000, () => {
  console.log("Server started");
})

