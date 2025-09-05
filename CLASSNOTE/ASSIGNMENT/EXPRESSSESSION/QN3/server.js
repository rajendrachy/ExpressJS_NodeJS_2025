const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');


const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
  secret: "secret-key",
  resave: false,
  saveUninitialized: true,
  cookie: {maxAge: 5* 1000} // 30 min
}))


//load user
const users = JSON.parse(fs.readFileSync('./user.json', 'utf-8'))



// Middleware to check session expiration
function sessionChecker(req, res, next) {
  if (req.session.username) {
    const now = Date.now();
    const loginTime = new Date(req.session.loginTime).getTime();

    if ((now - loginTime) > (5* 1000)) { // 30 min expired
      req.session.destroy(() => {
        return res.redirect('/?expired=true');
      });
    } else {
      return next();
    }
  } else {
    return next();
  }
}

app.use(sessionChecker);



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'))
})



app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    req.session.username = user.username;
    req.session.loginTime = new Date();
    return res.redirect('/user');
  } else {
    return res.send("<h3>Invalid credentials! <a href='/'>Try again</a></h3>");
  }
});




app.get('/user', (req, res) => {
  if (req.session.username) {
    res.sendFile(path.join(__dirname, 'views', 'user.html'));
  } else {
    res.redirect('/?expired=true');
  }
});





app.get('/logout', (req, res) => {
  req.session.destroy(err => {
    res.redirect('/');
  });
});



app.listen(3000, () => {
  console.log("Server started");
})



