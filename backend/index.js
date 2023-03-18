//Node JS require
//The basic functionality of require is that it reads a
//JavaScript file, executes the file, and then proceeds
//to return the export object.
const express = require("express");

//The express() syntax is the equivalent of saying new express().
//It creates a new instance of express that you can assign to a variable.
const app = express();

var bodyParser = require("body-parser");
//A new body object containing the parsed data is populated
//on the request object after the middleware (i.e. req.body).
//This object will contain key-value pairs,
app.use(bodyParser.json());

//CORS is a node.js package for providing a
//Connect/Express middleware
var cors = require("cors");
app.use(cors());

const adminwork = require("./controllers/adminAPI");
app.use("/admin", adminwork);

const userwork = require("./controllers/userAPI");
app.use("/user", userwork);

const dbwork = require("./db");

// ACCEPT REQUEST FROM CLIENT AT PORT NO 5000
app.listen(5000, () => {
  console.log("Express Server is Running at Port No 5000");
});
