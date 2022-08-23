const { Schema, model } = require("mongoose");

const UserSchema = Schema({
  name: String,
  email: String,
  password: String,
  age: String,
});

const UserModel = model("user", UserSchema);

module.exports = UserModel;
