const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const Product = require("../models/Product");

//@route        POST /product
//@description  Add Product
//@access        Public
router.post(
  "/",
  [
    check("name", "Product Name is required").not().isEmpty(),
    check("short_desc", "Short Desc is required").not().isEmpty(),
    check("desc", "Description is required").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      name,
      short_desc,
      desc,
      camera,
      storage,
      color,
      os,
      ram,
    } = req.body;

    try {
      category = new Product({
        name,
        short_desc,
        desc,
        camera,
        storage,
        color,
        os,
        ram,
      });

      //save data to db
      await category.save();
      res.json("Category Added successfully");
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error");
    }
  }
);

//@route    GET /product
//@desc     Get all Products
//@access    Public
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route    PUT product/edit/:id
//@description  update product by id
//@access   public

router.put("/edit/:id", async (req, res) => {
  try {
    const updates = {
      name: req.body.name,
      short_desc: req.body.short_desc,
      desc: req.body.desc,
      camera: req.body.camera,
      storage: req.body.storage,
      color: req.body.color,
      os: req.body.os,
      ram: req.body.ram,
    };

    const product = await Product.findOneAndUpdate(
      { _id: req.params.id },
      updates,
      {
        new: true,
      }
    );

    await product.save();
    res.json({ msg: "Product Updated Successsfully", product });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route    DELETE product/delete/:id
//@description  delete product by id
//@access   Public

router.delete("/delete/:id", async (req, res) => {
  try {
    await Product.findByIdAndRemove(req.params.id);
    const products = await Product.find();

    res.json({ msg: "Product deleted Successsfully", products });
  } catch (err) {
    console.error(err.response);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Product not Found" });
    }
    return res.status(500).send("Server Error");
  }
});

module.exports = router;
