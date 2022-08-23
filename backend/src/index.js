const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const config = require("config");
const UserRouter = require("./Router/User.router");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/user", UserRouter);
app.get("/", (req, res) => {
  res.send("Homepage");
});

// database name needs to change
mongoose.connect("mongodb://localhost:27017/tata1mg").then(() => {
  app.listen(5000, () => {
    console.log("server is started on port 5000");
  });
});
