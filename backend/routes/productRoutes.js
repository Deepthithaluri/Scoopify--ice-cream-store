const express = require("express");
const router = express.Router();

const { createProduct, getProducts } = require("../controllers/productController");
const { protect, admin } = require("../middleware/authMiddleware");

router.get("/", getProducts);

router.post("/", protect, admin, createProduct);

module.exports = router;