const schema_mongoose = require("mongoose");

const Details = schema_mongoose.Schema(
  {
    userid: { type: String },
    firstname: { type: String },
    lastname: { type: String },
    gender: { type: String },
    phone: { type: String },
    email: { type: String },
    password: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = schema_mongoose.model("user_login", Details);
