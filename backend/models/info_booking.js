const schema_mongoose = require("mongoose");

const Details = schema_mongoose.Schema(
  {
    bookingid: { type: String },
    tourid: { type: String },
    type_of_destination: { type: String },
    place: { type: String },
    price: { type: String },
    no_of_days: { type: String },
    starting_date: { type: String },
    no_of_people: { type: String },
    userid: { type: String },
    firstname: { type: String },
    lastname: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = schema_mongoose.model("booking_info", Details);
