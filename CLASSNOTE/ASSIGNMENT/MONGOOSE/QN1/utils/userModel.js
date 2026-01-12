const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/qn1")
.then(() => console.log("Database connected"));


let userScmema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  id: Number,
  department: [String],
  salary: Number,
  date: Number
})





module.exports = mongoose.model("employee", userScmema);


















