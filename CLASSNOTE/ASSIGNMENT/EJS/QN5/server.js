const express = require('express');

const app = express();

app.set("view engine", "ejs");


let studentData = {
  student: {
    name: "John Doe",
    email: "John@example.com",
    role: "admin"
  },
  courses: [
    { title: "Web Development", grade: "A" },
    { title: "Database Systems", grade: "B" },
    { title: "Operating Systems", grade: "D" }
  ],
  notice: "<b>Important Notice</b>"
};





app.get("/student", (req, res) => {
    res.render("dashboard", {studentData})
})



app.listen(3000, () => {
  console.log("Server started");
})






