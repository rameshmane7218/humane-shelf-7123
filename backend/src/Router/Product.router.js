const { Router } = require("express");

const ProductRouter = Router();

ProductRouter.get("/", (req, res) => {
  res.send("Products page");
});
module.exports = ProductRouter;
