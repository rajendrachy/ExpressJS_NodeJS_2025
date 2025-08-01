
const express = require('express');
const app = express();
const userModel = require("./models/user");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // jwt


const cookieParser = require('cookie-parser');
const path = require('path');
const user = require('./models/user');

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());



app.get('/', (req, res) => {
   res.render('index');
}) 



app.post('/create',  (req, res) => {
  let {username, email, password, age} = req.body;

  bcrypt.genSalt(10, (err, salt) => {
    // console.log(salt);
   
    bcrypt.hash(password, salt, async (err, hash) => {
        //  console.log(hash);

    let createdUser =  await userModel.create({
        username, 
        email, 
        password: hash,
        age
        })

       let token = jwt.sign({email}, "shhhhh");
       res.cookie("tojken", token);
         res.send(createdUser);
     }) 

   })
  })

  



  app.get("/login", (req, res) => {
     res.render('login');
  })


  app.post("/login", async (req, res) => {
   let user = await userModel.findOne({email: req.body.email});
  //  console.log(user);

  if(!user) 
    return res.send("something went wrong");
  

  // console.log(user.password);

  bcrypt.compare(req.body.password, user.password, (err, result) => {
      // console.log(res);

      if(result) {
       let token = jwt.sign({email: user.email}, "shhhhh");
       res.cookie("tojken", token);
        res.send("Yes you can login");
      }
      else res.send("No you cant login");

  });


  })


  //------------- removing the cookies--------
  app.get("/logout", (req, res) => {
    res.cookie("token", "");
    res.redirect('/');
  })

  
app.listen(3000, () => {
  console.log("Server start");
});




