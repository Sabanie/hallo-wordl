const guestModel = require("../models/guestModel");
const { responseDefault } = require("../utils/responseMessage");

// Add Data
const addData = async (req, res) => {
  try {
    const response = await guestModel.create(req.body);
    res.status(201).json({
      message: responseDefault.CREATED_DATA,
      data: response,
    });
  } catch (error) {
    console.log(error);
  }
};

// Get All Data
const getData = async (req, res) => {
  try {
    const response = await guestModel.find().sort({ _id: -1 });
    res.status(200).json({
      data: response,
    });
  } catch (error) {
    console.log(error);
  }
};

// Get Data by id
const getDataById = async (req, res) => {
  try {
    const response = await guestModel.findById(req.params.id);
    res.status(200).json({
      data: response,
    });
  } catch (error) {
    console.log(error);
  }
};

// upDate
const updateData = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  try {
    await guestModel.findByIdAndUpdate({ _id: id }, { $set: body });
    res.status(200).json({
      message: responseDefault.DATA_UPDATED,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addData,
  getData,
  getDataById,
  updateData,
};
