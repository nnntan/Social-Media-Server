const express = require("express");
const router = express.Router();
const orderController = require("../controllers/order.controller");

router.get("/", orderController.getAllOrder);
router.get("/:id", orderController.getOrderDetail);
router.post("/", orderController.createOrder);

module.exports = router;
