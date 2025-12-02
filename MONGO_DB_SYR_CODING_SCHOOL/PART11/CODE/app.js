//-----------------CRUD OPERATION-------------
// c -> create, r-> read , u-> update , d-> delete

const express = require("express");

const app = express();

const userModel = require("./usernodel.js");


app.use(express.json());


app.get("/", (req, res) => {
res.send("home")
})



app.get("/create", async (req, res) => {
   let createdUser = await userModel.create({
      name: "rc",
      email: "rc@gmail.com",
      username: "rcuser"
    })

    res.send(createdUser);

})


app.get("/update", async (req, res) => {
   let updatedUser = await userModel.findOneAndUpdate({username: "rcuser"}, {name: "rc chaudhary"}, {new: true});

   res.send(updatedUser);

})


app.get("/read", async (req, res) => {
   let users = await userModel.find();

   res.send(users);
})




// find gives an array then findOne gives an Object
app.get("/readOne", async (req, res) => {
   let users = await userModel.find({username: "rc"});

   res.send(users);
})




app.get("/delete", async (req, res) => {
  let deletedUser = await userModel.findOneAndUpdate({username: "rcuser"});

  res.send(deletedUser);

})




app.listen(3000, () => {
  console.log("Server started");
})



