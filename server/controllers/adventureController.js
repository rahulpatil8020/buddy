import AdventurePost from "../models/adventure.js";

// Controller to get All Adventure Posts
export const getAllAdventurePosts = async (req, res) => {
  try {
    const adventurePosts = await AdventurePost.find(); // Will give all Adventure Posts
    res.status(200).json(adventurePosts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Controller to create an Adventure Post
export const createAdventurePost = async (req, res) => {
  const adventurePost = req.body; // We can send data from frontend to backend using the req (request) parameter
  // req.body has all the data we send to the backend through the request. In this case we're sending adventurePost data.
  const newAdventurePost = new AdventurePost(adventurePost);

  try {
    await newAdventurePost.save();
    res.status(201).json(newAdventurePost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// Controller to get a specific Adventure Post based on the Id that's been sent through req.body
export const getAdventurePost = async (req, res) => {
  try {
  } catch (error) {}
};

// Controller to update a specific Adventure Post based on the Id that's been sent through req. body
export const updateAdventurePost = (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

// Controller to delete a specific Adventure Post based on the Id that's been sent thorugh req.body
export const deleteAdventurePost = (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};
