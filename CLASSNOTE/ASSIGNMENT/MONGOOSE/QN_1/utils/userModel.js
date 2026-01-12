const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/qn1_rc")
.then(() => console.log("MongoDb connected"));



const userSchema = mongoose.Schema({
  name: String,
  id: Number,
  department: [String],
  salary: Number,
  date: Number,
})





module.exports = mongoose.model("employee", userSchema);


