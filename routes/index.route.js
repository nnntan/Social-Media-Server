const express = require("express");
const router = express.Router();

const userRoute = require("./user.route");
const postRoute = require("./post.route");
const commentRoute = require("./comment.route");
const productRoute = require("./product.route");
const orderRoute = require("./order.route");

router.use("/users", userRoute);
router.use("/posts", postRoute);
router.use("/comments", commentRoute);
router.use("/products", productRoute);
router.use("/orders", orderRoute);

module.exports = router;
