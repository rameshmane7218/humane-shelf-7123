const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const config = require("config");
require("dotenv").config();
const UserRouter = require("./Router/User.router");
const Razorpay = require("razorpay");
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/user", UserRouter);
app.get("/", (req, res) => {
  res.send("Homepage");
});
var instance = new Razorpay({
  key_id: process.env.KEY_ID,
  key_secret: process.env.KEY_SECRET,
});
app.get("/payment", (req, res) => {
  res.sendFile(__dirname + "/standard.html");
});
app.post("/create/orderId", (req, res) => {
  console.log("create orderID request", req.body);
  var options = {
    amount: req.body.amount, // amount in the smallest currency unit
    currency: "INR",
    receipt: "rcptid_11",
  };
  instance.orders.create(options, function (err, order) {
    console.log(order);
    res.send({ orderId: order.id });
  });
});

// database name needs to change
mongoose.connect("mongodb://localhost:27017/tata1mg").then(() => {
  app.listen(5000, () => {
    console.log("server is started on port 5000");
  });
});
