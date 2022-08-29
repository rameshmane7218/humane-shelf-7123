const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const config = require("config");
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const mongodb_url =
  process.env.MONGODB_URL || "mongodb://localhost:27017/tata1mg";

const UserRouter = require("./Router/User.router");
const ProductRouter = require("./Router/Product.router");
const Razorpay = require("razorpay");
const PaymentRouter = require("./Router/Payment.router");
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/products", ProductRouter);
app.use("/", PaymentRouter);
// app.use("/", ProductRouter);
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
mongoose.connect(mongodb_url).then(() => {
  app.listen(PORT, () => {
    console.log("server is started on port " + PORT);
  });
});
