const { Router } = require("express");
const UserModel = require("../Model/User.model");

const UserRouter = Router();

UserRouter.post("/login", async (req, res) => {
  const details = req.body;
  const token = req.headers["authorization"]?.split(" ")[1];
  // console.log(mobile, token);
  try {
    const user = await UserModel.findOneAndUpdate(
      { mobile: details.mobile },
      { $set: { token: token } }
    );
    console.log(user);
    if (user) {
      return res.status(200).send({
        message: "User logged in successfully",
        userId: user._id,
        token: token,
      });
    } else {
      return res.status(500).send({ message: "Sometiong went wrong" });
    }
  } catch (err) {
    return res.status(500).send({ message: "Sometiong went wrong", err });
  }
});

UserRouter.post("/checkmobile", async (req, res) => {
  const { mobile } = req.body;
  try {
    const user = await UserModel.findOne({ mobile: mobile });
    if (user) {
      res.status(200).send({
        message: "User already exists..",
        status: true,
      });
    } else {
      return res
        .status(200)
        .send({ message: "User not found, Signup first", status: false });
    }
  } catch (err) {
    return res.status(404).send({ message: "Sometiong went wrong", err });
  }
});

UserRouter.post("/signup", async (req, res) => {
  const details = req.body;
  const token = req.headers["authorization"].split(" ")[1];
  // console.log(details, token);
  try {
    const user = new UserModel({
      firstName: details.firstName,
      lastName: details.lastName,
      mobile: details.mobile,
      email: details.email,
      token: token,
    });
    const newUser = await user.save();

    res.status(201).send({
      message: "User created successfully",
      userId: newUser._id,
      token: token,
    });
  } catch (err) {
    return res.status(500).send({ message: "Something went wrong", err });
  }
});
UserRouter.get("/profile/:userId", async (req, res) => {
  const { userId } = req.params;
  const token = req.headers["authorization"]?.split(" ")[1];
  try {
    const user = await UserModel.findOne({ _id: userId, token: token });
    if (user) {
      res.status(200).send(user);
    }
  } catch (err) {
    return res.status(401).send({ message: "Unauthorized", err });
  }
});
UserRouter.post("/logout/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await UserModel.findOneAndUpdate(
      { _id: userId },
      { $unset: { token: 1 } }
    );
    if (user) {
      res.status(200).send({ message: "Logged out successfully" });
    }
  } catch (err) {
    return res.status(404).send({ message: "Sometiong went wrong", err });
  }
});
UserRouter.post("/getuser", async (req, res) => {
  const { mobile, userId } = req.body;
  try {
    const user = await UserModel.findOne({ mobile: mobile, _id: userId });
    if (user) {
      res.status(200).send({
        message: "User already exists",
        status: true,
        user: user,
      });
    } else {
      return res.status(404).send({ message: "User not found", status: false });
    }
  } catch (err) {
    return res.status(404).send({ message: "Sometiong went wrong", err });
  }
});
module.exports = UserRouter;
