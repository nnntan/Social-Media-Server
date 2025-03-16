const userModel = require("../models/user.model");

const createUser = async (user) => {
  try {
    return await userModel.create(user);
  } catch (error) {
    throw error;
  }
};

const getAllUser = async (query = {}) => {
  try {
    const { limit, skip } = query;
    delete query.limit;
    delete query.skip;

    return await userModel
      .find(query, { user_id_card: 0, user_contacts: 0 })
      .skip(skip)
      .limit(limit);
  } catch (error) {
    throw error;
  }
};

const getUserDetail = async (id) => {
  try {
    return await userModel.findOne(
      { _id: id },
      { user_id_card: 0, user_contacts: 0 }
    );
  } catch (error) {
    throw error;
  }
};

const updateUser = async (id, data) => {
  try {
    return await userModel.findOneAndUpdate({ _id: id }, data, { new: true });
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (id) => {
  try {
    return await userModel.findOneAndDelete({
      _id: id,
    });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createUser,
  getAllUser,
  getUserDetail,
  updateUser,
  deleteUser,
};
