// Require Mongoose
const mongoose = require("mongoose");

// Define a schema
const courseSchema = new mongoose.Schema({
  courseID: String,
  name: String,
  shortname: String,
  programID: { type: mongoose.Schema.Types.String, ref: 'Program' },
},
{ timestamps: true }); 

module.exports = mongoose.model('Course', courseSchema);