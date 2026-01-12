const express = require('express');
const employee = require('./utils/userModel');

const app = express();



app.get('/add', (req, res)=> {
  let empCreate = employee.create({
    name: "rc",
    id: 234,
    department: ["cse"],
    salary: 23443423,
    date: 33,
  }) 

  res.send(empCreate);
})
















app.listen(3000, () => {
  console.log("Server started");
})








