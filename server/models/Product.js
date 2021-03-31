const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  short_desc: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  camera: {
    type: String,
    default: "16 MP",
  },
  color: {
    type: String,
    default: "Black",
  },
  os: {
    type: String,
    default: "Android",
  },
  storage: {
    type: String,
    default: "32gb",
  },
  ram: {
    type: String,
    default: "4gb",
  },
});

module.exports = Product = mongoose.model("product", ProductSchema);
