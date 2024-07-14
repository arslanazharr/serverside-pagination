const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const router = require("./routes/routes");
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", router);

app.listen(process.env.PORT || 3001, () => {
  console.log("Server is running on port 3001");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("Connected to Database");
  })
  .catch((err) => console.log(err));
