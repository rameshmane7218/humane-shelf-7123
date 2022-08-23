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
mongoose.connect(config.get("db.url")).then(() => {
  app.listen(config.get("port"), () => {
    console.log("server is started on port" + config.get("port"));
  });
});
