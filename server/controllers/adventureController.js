import AdventurePost from "../models/adventure.js";
import mongoose from "mongoose";
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
export const updateAdventurePost = async (req, res) => {
  const adventurePost = req.body;
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No post with id: ${id}`);
    const updatedAdventurePost = adventurePost;
    await AdventurePost.findByIdAndUpdate(id, updatedAdventurePost, {
      new: true,
    });
    res.status(200).json(updatedAdventurePost);
  } catch (error) {
    console.log(error);
  }
};
export const updateFeedPost = async (req, res) => {
  const feedPost = req.body;
  const { id } = req.params;

  try {
    // console.log("ehu", feedPost);
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No post with id: ${id}`);
    const updatedFeedPost = feedPost;
    await FeedPost.findByIdAndUpdate(id, updatedFeedPost, { new: true });
    res.status(200).json(updatedFeedPost);
  } catch (error) {
    console.log(error.message);
  }
};

// Controller to delete a specific Adventure Post based on the Id that's been sent thorugh req.body
export const deleteAdventurePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await AdventurePost.findByIdAndRemove(id);

  res.json({ message: "Post deleted successfully." });
};
