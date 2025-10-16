const express = require('express');

const app = express();

const session = require('express-session');


//---------session middleware----------
app.use(session({
  secret: 'secretpassword',
  
  resave:false, // false -> for not modified, whether the modification available or not 

  saveinitialized:false, // false -> not creating the session until the user has save any information in the session

  cookie: {maxAge: 1000*60 * 60 * 24} // delete after 1 day or 24 hour automatically
}))

app.get("/", (req, res) => {
    if(req.session.username) {
    res.send(`Username from session is: ${req.session.username}`)
  } else {
      res.send('No username found in session');

  }
})






//--------creating session--------------
app.get('/set-username', (req, res) => {
  req.session.username = "rc"; // username-> variable we can choose any 
  res.send('user name has been set in session');
})




//------reading session--------------
app.get('/get-username', (req, res) => {
  if(req.session.username) {
    res.send(`Username from session is: ${req.session.username}`)
  } else {
      res.send('No username found in session');

  }
})







app.get('/destroy', (req, res) => {
   req.session.destroy((err) => {
     if(err) {
    res.status(500).send("failed to destroy session")
     }

    res.status(200).send("session destroy successfully")


   });
})

app.listen(3000, () => {
  console.log("Server started");
})




