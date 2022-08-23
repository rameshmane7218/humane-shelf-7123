const { Router } = require("express");

const UserRouter = Router();

UserRouter.post("/login", (req, res) => {
  res.status(200).send({ message: "User logged in successfully" });
});
UserRouter.post("/signup", (req, res) => {
  res.status(201).send({ message: "User signup successfully" });
});
UserRouter.post("/profile/:userId", (req, res) => {
  res.status(200).send({ message: "User profile" });
});

module.exports = UserRouter;
