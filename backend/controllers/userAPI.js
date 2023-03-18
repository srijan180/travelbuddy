// IMPORT EXPRESS SERVER
const express = require("express");

//IMPORT EMPLOYEE MODEL AND BIND IT
const Model = require("../models/info");
const Model1 = require("../models/info_admin");
const Model2 = require("../models/info_booking");

// USE Router FOR EXPRESS SERVER
const router = express.Router();

// INSERT RECORD/Document
router.post("/reg", (req, res) => {
  //Create Object of  Model Class
  // And Receive value from request body and Store value within the Object
  const obj = new Model({
    userid: req.body.userid,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    gender: req.body.gender,
    phone: req.body.phone,
    email: req.body.email,
    password: req.body.password,
  }); //CLOSE Model

  //INSERT/SAVE THE RECORD/DOCUMENT
  obj
    .save()
    .then((inserteddocument) => {
      res.send(
        "DOCUMENT INSERED IN MONGODB DATABASE" + "<br>" + inserteddocument
      );
    }) //CLOSE THEN
    .catch((err) => {
      res.send("Error in DB connection : " + JSON.stringify(err, undefined, 2));
      process.exit();
    });

  res.send("<h3>INSIDE POST METHOD..THIS IS INSERT API..</h3>");
});

router.post(
  "/login",
  (req, res) => {
    //console.log(req.body.loginemail);
    //console.log(req.body.password);
    Model.find({
      email: req.body.loginemail,
      password: req.body.loginpassword,
    })
      .then((getsearchdocument) => {
        //console.log(getsearchdocument)
        if (getsearchdocument.length > 0) {
          res.status(200).send(getsearchdocument);
        } else {
          res.status(404).send({ message: "NOT MATCHED" });
        }
      }) // CLOSE THEN
      .catch((err) => {
        return res.send({
          message: "DB Problem..Error in Retriving with id " + req.params.id,
        });
      }); //CLOSE CATCH
  } //CLOSE CALLBACK FUNCTION BODY
); //CLOSE POST METHOD

router.post(
  "/userdetails/:eid",
  (req, res) => {
    //console.log(req.body.loginemail);
    //console.log(req.body.password);
    Model.find({
      userid: req.params.eid,
    })
      .then((getsearchdocument) => {
        //console.log(getsearchdocument)
        if (getsearchdocument.length > 0) {
          res.status(200).send(getsearchdocument);
        } else {
          res.status(404).send({ message: "NOT MATCHED" });
        }
      }) // CLOSE THEN
      .catch((err) => {
        return res.send({
          message: "DB Problem..Error in Retriving with id " + req.params.id,
        });
      }); //CLOSE CATCH
  } //CLOSE CALLBACK FUNCTION BODY
); //CLOSE POST METHOD

// UPDATE RECORD/Document
router.put("/update", (req, res) => {
  res.send("<h2>INSIDE PUT METHOD..THIS IS UPDATE API..</h2>");
});

router.get(
  "/searchtour/:eid",
  (req, res) => {
    Model1.find({ type_of_destination: req.params.eid })
      .then((getsearchdocument) => {
        if (getsearchdocument.length > 0) {
          res.status(200).send(getsearchdocument);
        } else {
          res
            .status(404)
            .send({ message: "Note not found with id " + req.params.id });
        }
      }) //CLOSE THEN
      .catch((err) => {
        res.status(500).send({
          message: "DB Problem..Error in Retriving with id " + req.params.id,
        });
      }); //CLOSE CATCH
  } //CLOSE CALLBACK FUNCTION BODY
); //CLOSE GET METHOD

// DELETE RECORD/Document
router.delete(
  "/delbooking/:eid",
  (req, res) => {
    Model2.findOneAndRemove({ bookingid: req.params.eid })
      .then((deleteddocument) => {
        if (deleteddocument != null) {
          res
            .status(200)
            .send("BOOKING DELETED successfully!" + deleteddocument);
        } else {
          res.status(404).send("INVALID BOOKING ID " + req.params.id);
        }
      }) //CLOSE THEN
      .catch((err) => {
        return res.status(500).send({
          message: "DB Problem..Error in Delete with id " + req.params.id,
        });
      }); //CLOSE CATCH
  } //CLOSE CALLBACK FUNCTION BODY
); //CLOSE Delete METHOD

//VIEW ALL TOUR DETAILS
router.get(
  "/viewallbooking/:eid",
  (req, res) => {
    Model2.find({ userid: req.params.eid })
      .then(
        (getsearchdocument) => {
          //console.log(getsearchdocument)
          res.status(200).send(getsearchdocument);
        } //CLOSE THEN FUNCTION BODY
      ) // CLOSE THEN
      .catch((err) => {
        return res.send({
          message: "DB Problem..Error in Retriving with id " + req.params.id,
        });
      }); //CLOSE CATCH
  } //CLOSE CALLBACK FUNCTION BODY
); //CLOSE GET METHOD

//UPDATE DOCUMENT IN MONGODB USING EMAILID
router.put("/profileupdate", (req, res) => {
  Model.findOneAndUpdate(
    { "email": req.body.email },
    {
      $set: {
        "phone": req.body.phone,
        "password": req.body.password,
      },
    },
    { new: true }
  )
    .then((getupdateddocument) => {
      if (getupdateddocument != null) res.status(200).send(getupdateddocument);
      else res.status(404).send("INVALID EMAIL ID " + req.body.email);
    })
    .catch((err) => {
      return res.status(500).send({
        message: "DB Problem..Error in UPDATE with email " + req.body.email,
      });
    });
});

//SHOULD BE EXPORTED
module.exports = router;
