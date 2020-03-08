const { Usermodel } = require("../models/blogUserModel");
const postUser = async (request, response) => {
  try {
    //can remove once I know it's working
    console.log("NEW USER");
    var userInstance = new Usermodel(request.body);
    const created = await Usermodel.create(userInstance);
    response.send(created);
  } catch (error) {
    response.status(500).send(error);
  }
};
const getAllUsers = async (request, response) => {
  try {
    console.log("GET USERS");
    var userInstances = await UserModel.find({});
    console.log(userInstances);
    var usersMap = {};
    userInstances.map(user => {
      usersMap[user.id] = user;
    });
    response.send(usersMap);
  } catch (error) {
    response.status(500).send(error);
  }
};

module.exports = { postUser, getAllUsers };
