const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const { routes } = require("../BlogDB/src/routes/blogUserRoutes");
const app = express();
const PORT = 3000;
mongoose.Promise = global.Promise;
mongoose.connect(
<<<<<<< HEAD
  "mongodb+srv://user:hello@cluster0-nh1dx.mongodb.net/blogdb?retryWrites=true&w=majority",
=======
  "mongodb+srv://user:hello@cluster0-nh1dx.mongodb.net/test?retryWrites=true&w=majority",
>>>>>>> f5d2a82661a0152d3d495a36ed8531484d4604fe
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
routes(app);

<<<<<<< HEAD
app.use("/", (req, res) => {
  res.sendFile(__dirname + "/blogDB.html");
});

=======
>>>>>>> f5d2a82661a0152d3d495a36ed8531484d4604fe
const start = () => {
  return app.listen(PORT, () => console.log(`server is running on ${PORT}`));
};
module.exports = { start };
