const express = require("express");
const {MongoClient} = require('mongodb');

const app = express();

let db;

async function connectDb() {
  try {
    const client = new MongoClient("mongodb://localhost:27017");
    await client.connect();
   db = client.db("CompanyDb");
    console.log("Database connected...");

  } catch(error) {
    console.log(error);
  }
}
connectDb();




app.get("/seed-employees", async (req, res) => {
   let dbresponse = await db.collection("employees").insertMany(
    [
  {
    empid: 1,
    name: "Rajendra",
    salary: 50000,
    deptid: 101
  },
  {
    empid: 2,
    name: "Amit",
    salary: 45000,
    deptid: 102
  },
  {
    empid: 3,
    name: "Priya",
    salary: 60000,
    deptid: 101
  },
  {
    empid: 4,
    name: "Sneha",
    salary: 55000,
    deptid: 103
  }
]
   )

   res.send(dbresponse);
})


app.get("/view-employee", async (req, res) => {
  let data = await db.collection("employees").find().toArray();
  res.send(data);
})


app.get("/add-employee/:id/:name/:salary/:deptid",  async (req, res) => {
    
  const {id, name, salary, deptid} = req.params;

  const newEmployee = {
    empid: Number(id),
    name : name,
    salary: Number(salary),
    deptid: Number(deptid),
  }

  const dbresponse = await db.collection("employees").insertOne(newEmployee);


  res.send(newEmployee);

})




app.get("/delete-employee/:id", async (req, res) => {
 const clientId = Number(req.params.id);
 
//  await db.collection("employees").deleteOne({empid : clientId}); // delete according to empid

//---------emp id less than ------
await db.collection("employees").deleteMany({empid : {$lt: clientId}})

 res.redirect("/view-employee")
})





app.get("/update-salary/:id/:amount", async (req, res) => {
  const clientId = Number(req.params.id);

  await db.collection("employees").updateOne({empid : clientId}, {$set: {salary: Number(req.params.amount)}});


   res.redirect("/view-employee")


})



app.get("/update-salary-range/:id/:amount", async (req, res) => {
 const clientId = Number(req.params.id);
 const increm = Number(req.params.amount);

 await db.collection("employees").updateMany({empid : {$gt : clientId}},
  {$inc : {salary : increm}}
 )
   res.redirect("/view-employee")

})





app.get("/search-employee/:name", async (req, res) => {
     const empName = req.params.name;

  const data = await db.collection("employees").find({ name: empName }).toArray();


   res.send(data);
})










app.get("/seed-department", async (req, res) => {
   let dbresponse = await db.collection("departments").insertMany(
    [
  { deptid: 1, deptname: "Human Resources" },
  { deptid: 2, deptname: "Finance" },
  { deptid: 3, deptname: "Engineering" },
  { deptid: 4, deptname: "Marketing" },
  { deptid: 5, deptname: "Sales" }
]
   )
})


app.get("/view-departments", async (req, res) => {
  let data = await db.collection("departments").find().toArray();
  res.send(data);

})


app.get("/add-department/:id/:name", async (req, res) => {
  const {id, name} = req.params;

  const newDep = {
    deptid: Number(id),
    deptname: name,
  }
    await db.collection("departments").insertOne(newDep);

    res.send(newDep);

})


app.get("/delete-department/:id", async (req, res) => {
const depId = Number(req.params.id);

 await db.collection("departments").deleteOne({deptid : depId});

 res.redirect("/view-departments");

})



app.get("/update-department/:id/:newname", async (req, res) => {
  const depId = Number(req.params.id);

   await db.collection("departments").updateOne({deptid : depId}, {$set:{deptname: req.params.newname}})
 
    res.redirect("/view-departments");


})



app.listen(3000, () => {
  console.log("Server started");

})

