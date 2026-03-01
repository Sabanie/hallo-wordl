const mongoose = require("mongoose");

module.exports = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database connection sukses");
  } catch (error) {
    console.log(error);
  }
};
