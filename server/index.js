const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/key");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(db.mongoDB,{useNewUrlParser: true, useUnifiedTopology: true,
    useCreateIndex: true, useFindAndModify: false})
  .then(console.log("servere baglanıldı"))
  .catch((err) => console.log(err));

app.use(cors())
  
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const userRoutes = require("./routes/users");
const propertyRoutes = require("./routes/property");
const adRoutes = require("./routes/ad");

app.use("/api/ads", adRoutes);
app.use("/api/filters", propertyRoutes);
app.use("/api/users", userRoutes);




//use this to show the image you have in node js server to client (react js)
//https://stackoverflow.com/questions/48914987/send-image-path-from-node-js-express-server-to-react-client
app.use('/uploads', express.static('uploads'));

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {

  // Set static folder   
  // All the javascript and css files will be read and served from this folder
  app.use(express.static("client/build"));

  // index.html for all page routes    html or routing and naviagtion
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}

app.listen(5000, () => {
  console.log("server listenin on 5000");
});
