const {
  createOrder,
  getAllOrder,
  getOrderDetail,
} = require("../services/order.service");

class orderController {
  async getAllOrder(req, res) {
    try {
      const orders = await getAllOrder(req.query);
      return res.status(200).json(orders);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async getOrderDetail(req, res) {
    try {
      const order = await getOrderDetail(req.params.id);
      return res.status(200).json(order);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async createOrder(req, res) {
    try {
      const order = await createOrder(req.body);
      return res.status(201).json(order);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new orderController();
