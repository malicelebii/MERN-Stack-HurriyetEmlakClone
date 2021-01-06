const mongoose = require("mongoose");

const filterSchema = new mongoose.Schema({
  selectedCity:String,
  selectedCounty:String,
  type:String,
  price:Number,
  size:Number,
  age:Number,
  floor:Number,
  totalFloor:Number,
  heatingType:String,
  facade:String,
  date:Date,
});


module.exports = mongoose.model('Filter',filterSchema)