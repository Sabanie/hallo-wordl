const mongoose = require("mongoose");

const guestSchema = new mongoose.Schema(
  {
    nama: String,
    perusahaan: String,
    no_hp: String,
    no_pol: String,
    keperluan: String,
    pic: String,
    identitas: String,
    jam_masuk: Date,
    jam_keluar: Date,
    jenis_barang: String,
    quantity: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("guest", guestSchema);
