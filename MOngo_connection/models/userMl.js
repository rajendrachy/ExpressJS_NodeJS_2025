const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  id: Number
})


module.exports = mongoose.model('User', userSchema);


