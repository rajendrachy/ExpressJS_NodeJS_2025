const express = require('express');
const employee = require("./utils/userModel");

const app = express();

app.get("/", (req, res) => {
  res.send("Home page");
})




app.get("/add", async (req, res)=> {
  let empCreated = await employee.create({
     name: "rc",
     id: 23000,
     department: ["cse"],
    salary: 1000000,
    date: 2025,

   })

   res.send(empCreated);
})







app.get("/view", async (req, res) => {
     let viewEmp = await employee.find();
     res.send(viewEmp);
})





app.get("/getId", async (req, res) => {
    let findId = await employee.find({id: "23000"});
    res.send(findId);

})




app.get("/update", async (req, res) => {
  let updatedEmp = await employee.findOneAndUpdate(
    { id: 23000 },                         
    { 
      $set: { salary: 1200000 },            
      $push: { department: "it" }          
    },
    { new: true }                          
  );
  res.send(updatedEmp);
});



app.get("/delete", async (req, res) => {
  let deletedEmp = await employee.findOneAndDelete({ id: 23000 });
  res.send(deletedEmp);
});





app.listen(3000, () => {
  console.log("Server started..");
})




