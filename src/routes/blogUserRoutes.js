const {
  getAllUsers,
  postUser,
  putUser,
  //getUserProfile,
  getUsername
} = require("../controllers/blogController");
const routes = app => {
  app.route("/users").get(getAllUsers);
  app
    .route("/user")
    .post(postUser)
    .put(putUser)
    //  .get(getUserProfile)
    .get(getUsername);
};

module.exports = { routes };
