const { Router } = require("express");
const ProductModel = require("../Model/Product.model");
const ProductRouter = Router();
const mongoose = require("mongoose");

//getting all product data
//http://localhost:8080/alldata
ProductRouter.get("/alldata", async (req, res) => {
  let data = await ProductModel.find({});
  //   console.log(data);
  res.send({ data: data, message: "request successfull" });
});

//getting specfic product data by productname
//`http://localhost:8080/data/${productname}`
ProductRouter.get("/data/:id", async (req, res) => {
  // let value = req.params.id;
  // const userObjectId = mongoose.Types.ObjectId(value);
  // //   console.log(value);
  // let data = await ProductModel.findOne({ _id: userObjectId });

  // res.send({ data: data, message: "request successfull" });
  const { id } = req.params;
  try {
    const datas = await ProductModel.findById({ _id: id });
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
let sortQuery = {
  rel: "",
  plth: { price: 1 },
  phtl: { price: -1 },
  rlth: { ratings: 1 },
  rhtl: { ratings: -1 },
};
ProductRouter.get("/filter", async (req, res) => {
  let { brand, sort, discount, _page } = req.query;
  console.log(_page);
  let data;
  if (brand) {
    brand = brand.split(",");
  }
  if (brand && sort && discount) {
    data = await ProductModel.find({
      brand: { $in: brand },
      discount: { $gt: discount },
    }).sort(sortQuery[sort]);
  } else if (brand && sort) {
    data = await ProductModel.find({
      brand: { $in: brand },
    }).sort(sortQuery[sort]);
  } else if (sort && discount) {
    data = await ProductModel.find({
      discount: { $gt: discount },
    }).sort(sortQuery[sort]);
  } else if (brand && discount) {
    data = await ProductModel.find({
      brand: { $in: brand },
      discount: { $gt: discount },
    }).sort(sortQuery[sort]);
  } else if (brand) {
    data = await ProductModel.find({
      brand: { $in: brand },
    });
  } else if (sort) {
    data = await ProductModel.find().sort(sortQuery[sort]);
  } else if (discount) {
    data = await ProductModel.find({
      discount: { $gt: discount },
    });
  } else {
    data = await ProductModel.find();
  }

  res.send({ data: data, message: "filtered successfully" });
});

//http://localhost:8080/slider?&limit=10&skip=0

// on button next increase the skip value by 10
// on prev button decrase the skip value by 10
//total values in db 53
ProductRouter.get("/slider", async (req, res) => {
  try {
    let data = await ProductModel.find({ isSlider: true });

    res.send({ data: data, message: "request succefully" });
  } catch (err) {
    res.status(500).send({ message: "Something went wrong" });
  }
});

// // add all product
// ProductRouter.post("/addall", async (req, res) => {
//   // res.send(req.body);

//   const addData = async (payload) => {
//     const product = new ProductModel(payload);
//     await product.save();
//   };
//   for (let i = 0; i < req.body.length; i++) {
//     addData(req.body[i]);
//   }
//   res.send("All items added");
// });

// search functionality

ProductRouter.get("/search", async (req, res) => {
  try {
    let result = await ProductModel.aggregate([
      {
        $search: {
          autocomplete: {
            query: `${req.query.q}`,
            path: "productName",
            fuzzy: {
              maxEdits: 2,
              prefixLength: 3,
            },
          },
        },
      },
    ]);
    // .toArray();
    res.status(200).send(result);
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
});

module.exports = ProductRouter;
