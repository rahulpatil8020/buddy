import User from "../models/user.js";

export const getUser = async (req, res) => {
  const { id } = req.body;
  try {
    const user = await User.findOne(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  const user = req.body;
  const newUser = new User(user);
  try {
    await newUser.save();
    res.json(201).json(newUser);
  } catch (error) {
    res.json(409).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
  } catch (error) {}
};

export const deleteUser = async (req, res) => {
  const { id } = req.body;
  try {
    const user = await User.findOne(id);
    if (user) {
      await User.deleteOne(id);
    } else {
      res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(id);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
