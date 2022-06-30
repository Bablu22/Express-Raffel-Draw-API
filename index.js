const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;
const ticketRouter = require("./controllers/ticket");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.tzt34uk.mongodb.net/Raffel_draw`
  )
  .then(() => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.log(err);
  });

// router
app.use("/api/v1", ticketRouter);
app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is running" });
});
app.get("/health", (req, res) => {
  res.status(200).json({ message: "Server is running" });
});
app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`);
});
