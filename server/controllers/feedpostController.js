import FeedPost from "../models/feedPost.js";

// Controller to get All Adventure Posts
export const getAllFeedPosts = async (req, res) => {
  try {
    const feedPost = await FeedPost.find(); // Will give all Adventure Posts
    res.status(200).json(feedPost);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Controller to create an Adventure Post
export const createFeedPost = async (req, res) => {
  const feedPost = req.body; // We can send data from frontend to backend using the req (request) parameter
  // req.body has all the data we send to the backend through the request. In this case we're sending adventurePost data.
  const newFeedPost = new FeedPost(feedPost);

  try {
    await newFeedPost.save();
    res.status(201).json(newFeedPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// Controller to get a specific Adventure Post based on the Id that's been sent through req.body
export const getFeedPost = async (req, res) => {
  try {
  } catch (error) {}
};

// Controller to update a specific Adventure Post based on the Id that's been sent through req. body
export const updateFeedPost = (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

// Controller to delete a specific Adventure Post based on the Id that's been sent thorugh req.body
export const deleteFeedPost = (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};
