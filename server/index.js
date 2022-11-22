const express = require("express");
const { login, register } = require("./controllers/UserController");
const mongoose = require("mongoose");
const cors = require("cors");

mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.vtxdyc5.mongodb.net/ernur?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log(" DB OK");
  })
  .catch((err) => {
    console.log(" Error occured with connecting MongoDB");
  });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post("/auth/login", login);
app.post("/auth/register", register);

app.listen(3001, (err) => {
  if (err) {
    console.log("Error occured with connecting server", err);
  }
  console.log("app started");
});
