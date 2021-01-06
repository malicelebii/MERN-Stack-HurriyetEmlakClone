const mongoose = require("mongoose");

const adSchema = new mongoose.Schema({
  adNo:{type:Number,unique:1,seq:{type:Number,default:0}},
  category:{type:String},
  subCategory:{type:String},
  adType:{type:String},
  title:{type:String,maxlength:65,minlength:10},
  description:{type:String,maxlength:5000,minlength:10},
  price:{type:Number},
  roomNumber:{type:Number},
  livingRoomNumber:{type:Number},
  bathNumber:{type:Number},
  grossSize:{type:Number},
  netSize:{type:Number},
  heatingType:{type:String},
  age:{type:Number},
  floor:{type:Number},
  totalFloor:{type:Number},
  availableForLoan:{type:Boolean},
  shape:{type:String},
  furnished:{type:Boolean},
  fuelType:{type:String},
  structureType:{type:String},
  structureState:{type:String,Enum:["Sıfır","İkinci el","Yapım aşamasında"] ,default:"Sıfır"},
  usageState:{type:String,Enum:["Boş","Kiracı oturuyor","Ev sahibi oturuyor"] ,default:"Boş"},
  dues:{type:Number},
  onSite:{type:Boolean},
  siteName:{type:String},
  facade:{type:String,Enum:["Güney","Kuzey","Batı","Doğu"]},
  rentalIncome:{type:Number},
  adress:{city:{type:String},county:{type:String},quarter:{type:String}},
  adImages:[{url:String}],
  interiorFeatures:[],
  externalFeatures:[],
  location:String,
  createdAt:Date,
  updatedAt:Date,
  author:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  // selectedCity:String,
  // selectedCounty:String,
  // type:String,
  // price:Number,
  // size:Number,
  // age:Number,
  // floor:Number,
  // totalFloor:Number,
  // heatingType:String,
  // facade:String,
  // date:Date,
});

let ad = mongoose.model('Ad',adSchema)

// var entitySchema = mongoose.Schema({
//   testvalue: {type: String}
// });

// entitySchema.pre('save', function(next) {
//   var doc = this;
//   ad.findByIdAndUpdate({adNo: 'entityId'}, {$inc: { seq: 1} }, function(error, ad)   {
//       if(error)
//           return next(error);
//       doc.testvalue = ad.adNo.seq;
//       next();
//   });
// });

module.exports = mongoose.model('Ad',adSchema)