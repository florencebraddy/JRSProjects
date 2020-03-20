const { UserModel } = require("../models/blogUserModel");
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

const getUsername = async (request, response) => {
  try {
    console.log("GET Username");
    var userInstance = await UserModel.find({ firstname, lastname });
    console.log(userInstance);
    response.send(userInstance);
  } catch (error) {
    response.status(500).send(error);
  }
};

const postUser = async (request, response) => {
  try {
    console.log("POST USER");
    var userInstance = new UserModel(request.body);
    const created = await UserModel.create(userInstance);
    response.send(created);
  } catch (error) {
    console.log(error);
    response.status(500).send(error);
  }
};

const putUser = async (request, response) => {
  try {
    console.log("PUT USER");
    var userInstance = await UserModel.findOneAndUpdate(
      request.query,
      request.body
    );
    response.send(userInstance);
  } catch (error) {
    response.status(500).send(error);
  }
};
module.exports = {
  getAllUsers,
  // getUserProfile,
  postUser,
  putUser,
  getUsername
};
