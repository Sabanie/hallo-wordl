const express = require("express");
const router = express.Router();
const {
  addData,
  getData,
  updateData,
  getDataById,
} = require("../controllers/guestController");

router.post("/addData", addData);
router.get("/getData", getData);
router.get("/getData/:id", getDataById);
router.put("/editData/:id", updateData);

module.exports = router;
