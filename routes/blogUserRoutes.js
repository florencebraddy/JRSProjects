const { getAllUsers, postUser } = require("../controllers/blogController");
const routes = app => {
  app.route("/users").get(getAllUsers);
  app.route("/user").post(postUser);
};

module.exports = { routes };
