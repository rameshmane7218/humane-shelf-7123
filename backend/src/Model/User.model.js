const { Schema, model } = require("mongoose");

const UserSchema = Schema({
  firstName: String,
  lastName: String,
  email: String,
  mobile: String,
  token: String,
});

const UserModel = model("user", UserSchema);

module.exports = UserModel;
