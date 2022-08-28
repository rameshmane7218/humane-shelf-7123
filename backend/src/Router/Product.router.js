const { Router } = require("express");
const Prod = require("../Model/Product.model");
const ProductRouter = Router();
const mongoose = require("mongoose");

//getting all product data
//http://localhost:8080/alldata
ProductRouter.get("/alldata", async (req, res) => {
  let data = await Prod.find({});
  //   console.log(data);
  res.send({ data: data, message: "request successfull" });
});

//getting specfic product data by productname
//`http://localhost:8080/data/${productname}`
ProductRouter.get("/data/:id", async (req, res) => {
  // let value = req.params.id;
  // const userObjectId = mongoose.Types.ObjectId(value);
  // //   console.log(value);
  // let data = await Prod.findOne({ _id: userObjectId });

  // res.send({ data: data, message: "request successfull" });
  const { id } = req.params;
  try {
    const datas = await Prod.findById({ _id: id });
    // console.log(datas);
    res.status(201).send({ data: datas, message: "request successfull" });
  } catch (error) {
    res.status(404).json(error);
  }
});

//filtering the ProductRouter
//`http://localhost:8080/filter?&brand=${brandname}` //give data of partcular brand
//`http://localhost:8080/filter?&discount=${10}` //show all ProductRouter with dicount >= number
//`http://localhost:8080/filter?&rating=${4}`  //show all ProductRouter with rating >= number

ProductRouter.get("/filter", async (req, res) => {
  let data;
  if (req.query.brand) {
    data = await Prod.find({ brand: req.query.brand });
  } else if (req.query.discount) {
    // console.log(req.query.discount, "check num");
    data = await Prod.find({ discount: { $gt: req.query.discount } });
  } else if (req.query.ratings) {
    // console.log(req.query.ratings, "check num");
    data = await Prod.find({ ratings: { $gte: req.query.ratings } });
    // console.log(data, "hreee1121");
    // console.log("fount");
  }

  res.send({ data: data, message: "filtered successfully" });
});

//http://localhost:8080/slider?&limit=10&skip=0

// on button next increase the skip value by 10
// on prev button decrase the skip value by 10
//total values in db 53
ProductRouter.get("/slider", async (req, res) => {
  try {
    let data = await Prod.find({ isSlider: true });

    res.send({ data: data, message: "request succefully" });
  } catch (err) {
    res.status(500).send({ message: "Something went wrong" });
  }
});

// add all product
ProductRouter.post("/addall", async (req, res) => {
  // res.send(req.body);

  const addData = async (payload) => {
    const product = new Prod(payload);
    await product.save();
  };
  for (let i = 0; i < req.body.length; i++) {
    addData(req.body[i]);
  }
  res.send("All items added");
});

module.exports = ProductRouter;
