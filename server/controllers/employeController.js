const employeModel = require("../models/employeModel");
const { responseDefault } = require("../utils/responseMessage");

// Tambah Data

const addData = async (req, res) => {
  try {
    const response = await employeModel.create(req.body);
    res.status(201).json({
      message: responseDefault.CREATED_DATA,
      data: response,
    });
  } catch (error) {
    console.log(error);
  }
};

// Ambil Semua Data
const getAllData = async (req, res) => {
  try {
    const response = await employeModel.find().sort({ _id: -1 });
    res.status(200).json({
      data: response,
    });
  } catch (error) {
    console.log(error);
  }
};
// Ambil Data Nopol Karyawan By Id
const getDataById = async (req, res) => {
  try {
    const response = await employeModel.findById(req.params.id);
    res.status(200).json({
      data: response,
    });
  } catch (error) {
    console.log(error);
  }
};
// Ambil Data Berdasar Query

// Up Date
const updateData = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  try {
    await employeModel.findByIdAndUpdate({ _id: id }, { $set: body });
    res.status(200).json({
      message: responseDefault.DATA_UPDATED,
    });
  } catch (error) {
    console.log(error);
  }
};

// Hapus Data By Id
const hapusData = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  try {
    await employeModel.findByIdAndDelete({ _id: id }, { $set: body });
    res.status(200).json({
      message: responseDefault.DATA_DELETE,
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  addData,
  getAllData,
  getDataById,
  updateData,
  hapusData,
};
