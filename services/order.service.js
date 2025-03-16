const orderModel = require("../models/order.model");

const getAllOrder = async (query) => {
  try {
    const orders = await orderModel.find(query).populate("products.product");
    return orders;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getOrderDetail = async (id) => {
  try {
    const order = await orderModel
      .findById(id)
      .populate("products.product", "name price quantity")
      .populate("customer", "user_first_name user_last_name user_email");
    return order;
  } catch (error) {
    throw new Error(error.message);
  }
};

const createOrder = async (data) => {
  try {
    const order = await orderModel.create(data);
    const populatedOrder = await orderModel
      .findById(order._id)
      .populate("products.product", "name price quantity")
      .populate("customer", "user_first_name user_last_name user_email");
    return populatedOrder;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  getAllOrder,
  getOrderDetail,
  createOrder,
};
