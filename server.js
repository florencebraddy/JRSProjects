const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const { routes } = require("../BlogDB/src/routes/blogUserRoutes");
const app = express();
const PORT = 3000;
mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb+srv://user:hello@cluster0-nh1dx.mongodb.net/blogdb?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
routes(app);

app.use("/", (req, res) => {
  res.sendFile(__dirname + "/blogDB.html");
});

const start = () => {
  return app.listen(PORT, () => console.log(`server is running on ${PORT}`));
};
module.exports = { start };
