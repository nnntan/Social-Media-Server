const productModel = require("../models/product.model");

const getAllProduct = async (query) => {
  try {
    const products = await productModel.find(query);
    return products;
  } catch (error) {
    throw new Error(error);
  }
};

const getProductDetail = async (id) => {
  try {
    const product = await productModel.findById(id);
    return product;
  } catch (error) {
    throw new Error(error);
  }
};

const createProduct = async (data) => {
  try {
    const product = await productModel.create(data);
    return product;
  } catch (error) {
    throw new Error(error);
  }
};

const updateProduct = async (id, data) => {
  try {
    const product = await productModel.findByIdAndUpdate(id, data, {
      new: true,
    });
    return product;
  } catch (error) {
    throw new Error(error);
  }
};

const deleteProduct = async (id) => {
  try {
    const product = await productModel.findByIdAndDelete(id);
    return product;
  } catch (error) {
    throw new Error(error);
  }
};
module.exports = {
  getAllProduct,
  getProductDetail,
  createProduct,
  updateProduct,
  deleteProduct,
};
