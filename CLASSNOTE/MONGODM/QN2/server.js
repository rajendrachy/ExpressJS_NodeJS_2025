
// ---qn2 is remaining----




const express = require('express');
const {connectMongo} = require('./utils/connectDb');
const ejs = require("ejs");


const app = express();


app.set("view engine", "ejs");
app.set("views", __dirname+"/views");


let db;
connectMongo()
.then(data => db = data);


app.get("/add" , async (req, res) => {
    const addStu = await db.collection('student').insertMany([
      {
        name: "rc",
        section: "c",
        marks: 39,
      }, 
      {
        name: "rc",
        section: "c",
        marks: 39,
      },

      {
        name: "rc",
        section: "c",
        marks: 39,
      },
       {
        name: "rc",
        section: "c",
        marks: 39,
      }
    ])

    const students = await db.collection('student').find().toArray();

    res.render('index', {stud: students});
})

app.listen(3000, () => {
  console.log("Server started");
})






