const express = require("express");
const mongoose = require("mongoose");

const app = express();

async function connectDb() {
  try {
    await mongoose.connect("mongodb://localhost:27017/CompanyDb", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected using Mongoose...");
  } catch (error) {
    console.error("DB Connection Error:", error);
  }
}
connectDb();






const employeeSchema = new mongoose.Schema({
  empid: Number,
  name: String,
  salary: Number,
  deptid: Number,
});





const departmentSchema = new mongoose.Schema({
  deptid: Number,
  deptname: String,
});



const Employee = mongoose.model("Employee", employeeSchema);
const Department = mongoose.model("Department", departmentSchema);


app.get("/seed-employees", async (req, res) => {
  const employees = [
    { empid: 1, name: "Rajendra", salary: 50000, deptid: 101 },
    { empid: 2, name: "Amit", salary: 45000, deptid: 102 },
    { empid: 3, name: "Priya", salary: 60000, deptid: 101 },
    { empid: 4, name: "Sneha", salary: 55000, deptid: 103 },
  ];
  const response = await Employee.insertMany(employees);
  res.send(response);
});

app.get("/view-employee", async (req, res) => {
  const data = await Employee.find();
  res.send(data);
});





app.get("/add-employee/:id/:name/:salary/:deptid", async (req, res) => {
  const { id, name, salary, deptid } = req.params;
  const newEmployee = new Employee({
    empid: Number(id),
    name,
    salary: Number(salary),
    deptid: Number(deptid),
  });
  await newEmployee.save();
  res.send(newEmployee);
});




app.get("/delete-employee/:id", async (req, res) => {
  const clientId = Number(req.params.id);
  await Employee.deleteMany({ empid: { $lt: clientId } }); // same as your logic
  res.redirect("/view-employee");
});




app.get("/update-salary/:id/:amount", async (req, res) => {
  const clientId = Number(req.params.id);
  await Employee.updateOne({ empid: clientId }, { salary: Number(req.params.amount) });
  res.redirect("/view-employee");
});




app.get("/update-salary-range/:id/:amount", async (req, res) => {
  const clientId = Number(req.params.id);
  const increm = Number(req.params.amount);
  await Employee.updateMany({ empid: { $gt: clientId } }, { $inc: { salary: increm } });
  res.redirect("/view-employee");
});





app.get("/search-employee/:name", async (req, res) => {
  const empName = req.params.name;
  const data = await Employee.find({ name: empName });
  res.send(data);
});






app.get("/seed-department", async (req, res) => {
  const departments = [
    { deptid: 1, deptname: "Human Resources" },
    { deptid: 2, deptname: "Finance" },
    { deptid: 3, deptname: "Engineering" },
    { deptid: 4, deptname: "Marketing" },
    { deptid: 5, deptname: "Sales" },
  ];
  const response = await Department.insertMany(departments);
  res.send(response);
});

app.get("/view-departments", async (req, res) => {
  const data = await Department.find();
  res.send(data);
});

app.get("/add-department/:id/:name", async (req, res) => {
  const { id, name } = req.params;
  const newDep = new Department({
    deptid: Number(id),
    deptname: name,
  });
  await newDep.save();
  res.send(newDep);
});

app.get("/delete-department/:id", async (req, res) => {
  const depId = Number(req.params.id);
  await Department.deleteOne({ deptid: depId });
  res.redirect("/view-departments");
});

app.get("/update-department/:id/:newname", async (req, res) => {
  const depId = Number(req.params.id);
  await Department.updateOne({ deptid: depId }, { deptname: req.params.newname });
  res.redirect("/view-departments");
});

app.listen(3000, () => {
  console.log("Server started..");
});








