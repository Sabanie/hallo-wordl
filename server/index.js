const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

// Database
const database = require("./config/db");
database();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// router
const guestRoute = require("./routes/guestRoute");
const employeRoute = require("./routes/employeRoute");

app.use("/employe", employeRoute);
app.use("/", guestRoute);
// app.use(guestRoute);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server runing on http://localhost:${PORT}`);
});
