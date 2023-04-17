const Users = require("../models/users.models");
const ValidateUser = require("../validation/Users.validation");
const AddUser = async (req, res) => {
  const { errors, isValid } = ValidateUser(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      await Users.findOne({ Email: req.body.Email }).then(async (exist) => {
        if (exist) {
          //si mail existe me renvoie une réponse que user exist
          errors.Email = "User Exist";
          res.status(404).json(errors);
        } else {
          await Users.create(req.body);
          res.status(201).json({ message: "User added with success" });
        }
      });
    }
  } catch (error) {
    console.log("error", error.message);
  }
};
const FindAllUsers = async (req, res) => {
  try {
    const data = await Users.find();
    res.status(201).json(data);
  } catch (error) {
    console.log("error", error.message);
  }
};
const FindSinglUser = async (req, res) => {
  try {
    const data = await Users.findOne({ _id: req.params.id });
    res.status(201).json(data);
  } catch (error) {
    console.log("error", error.message);
  }
};
const UpdateUser = async (req, res) => {
  const { errors, isValid } = ValidateUser(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      const data = await Users.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      );
      res.status(201).json(data);
    }
  } catch (error) {
    console.log("error", error.message);
  }
};
const DeleteUser = async (req, res) => {
  console.log("req", req.params);
  await Users.deleteOne({ _id: req.params.id }).then(async (exist) => {
    res.status(200).json({ message: "User deleted with success" });
  });
};

module.exports = {
  AddUser,
  FindAllUsers,
  FindSinglUser,
  UpdateUser,
  DeleteUser,
};
