// IMPORT EXPRESS SERVER
const express = require("express");

//IMPORT EMPLOYEE MODEL AND BIND IT
const Model = require("../models/info");
const Model1 = require("../models/info_admin");
const Model2 = require("../models/info_booking");

// USE Router FOR EXPRESS SERVER
const router = express.Router();

// INSERT RECORD/Document
router.post("/addtour", (req, res) => {
  //Create Object of  Model Class
  // And Receive value from request body and Store value within the Object
  const obj = new Model1({
    tourid: req.body.tourid,
    type_of_destination: req.body.type_of_destination,
    place: req.body.place,
    price: req.body.price,
    no_of_days: req.body.no_of_days,
    starting_date: req.body.starting_date,
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

router.get(
  "/viewalltour",
  (req, res) => {
    Model1.find({})
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

router.get(
  "/viewalltour/:eid",
  (req, res) => {
    Model1.find({
      tourid: req.params.eid,
    })
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

// DELETE RECORD/Document
router.delete(
  "/deltour/:eid",
  (req, res) => {
    Model1.findOneAndRemove({ tourid: req.params.eid })
      .then((deleteddocument) => {
        if (deleteddocument != null) {
          res.status(200).send("TOUR DELETED successfully!" + deleteddocument);
        } else {
          res.status(404).send("INVALID TOUR ID " + req.params.id);
        }
      }) //CLOSE THEN
      .catch((err) => {
        return res.status(500).send({
          message: "DB Problem..Error in Delete with id " + req.params.id,
        });
      }); //CLOSE CATCH
  } //CLOSE CALLBACK FUNCTION BODY
); //CLOSE Delete METHOD

// INSERT RECORD/Document - bookings
router.post("/booking", (req, res) => {
  //Create Object of  Model Class
  // And Receive value from request body and Store value within the Object
  const obj2 = new Model2({
    bookingid: req.body.bookingid,
    tourid: req.body.tourid,
    type_of_destination: req.body.type_of_destination,
    place: req.body.place,
    price: req.body.price,
    no_of_days: req.body.no_of_days,
    starting_date: req.body.starting_date,
    no_of_people: req.body.no_of_people,
    userid: req.body.userid,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
  }); //CLOSE Model

  //INSERT/SAVE THE RECORD/DOCUMENT
  obj2
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


//VIEW ALL BOOKING DETAILS
router.get(
  "/viewallbooking/",
  (req, res) => {
    Model2.find({})
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


//SHOULD BE EXPORTED
module.exports = router;
