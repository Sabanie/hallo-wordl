const express = require("express");
const router = express.Router();
const {
  addData,
  getAllData,
  getDataById,
  updateData,
  hapusData,
} = require("../controllers/employeController");

router.post("/tambahData", addData);
router.get("/ambilSemuaData", getAllData);
router.get("/ambilDataById/:id", getDataById);
router.put("/UbahData/:id", updateData);
router.delete("/hapusData/:id", hapusData);

module.exports = router;
