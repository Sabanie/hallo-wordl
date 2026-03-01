const mongoose = require("mongoose");

const employeSchema = new mongoose.Schema({
  nama: {
    type: String,
    index: true,
  },
  no_pol1: String,
  no_pol2: String,
});

module.exports = mongoose.model("employe", employeSchema);
