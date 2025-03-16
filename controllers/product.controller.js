const {
  createProduct,
  deleteProduct,
  getAllProduct,
  getProductDetail,
  updateProduct,
} = require("../services/product.service");

class productController {
  async getAllProduct(req, res) {
    try {
      const products = await getAllProduct(req.query);
      return res.status(200).json(products);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async getProductDetail(req, res) {
    try {
      const product = await getProductDetail(req.params.id);
      return res.status(200).json(product);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async createProduct(req, res) {
    try {
      const product = await createProduct(req.body);
      return res.status(201).json(product);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async updateProduct(req, res) {
    try {
      const product = await updateProduct(req.params.id, req.body);
      return res.status(200).json(product);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async deleteProduct(req, res) {
    try {
      const product = await deleteProduct(req.params.id);
      return res.status(200).json(product);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new productController();
