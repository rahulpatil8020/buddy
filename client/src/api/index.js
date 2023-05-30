import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8000" });

//Authentication
export const signup = (formData) => API.post("users/signup", formData);
export const login = (formData) => API.post("users/login", formData);
export const addUserAdventure = (userId, adventureId) =>
  API.patch(`users/${userId}/addAdventure`, { adventureId: adventureId });
export const getUser = (id) => API.get(`users/${id}`);
//Adventures

//Get all adventures
export const getAllAdventurePosts = () => API.get("adventures/");
//Get adventure by id
export const getAdventurePost = (id) => API.get(`adventures/${id}`);
//Create adventure
export const createAdventurePost = (formData) =>
  API.post("adventures/", formData);
//Update adventure
export const updateAdventurePost = (id, formData) =>
  API.patch(`adventures/${id}`, formData);
//Delete adventure
export const deleteAdventurePost = (id) => API.delete(`adventures/${id}`);
// Like Adventure
export const likeAdventurePost = (id, userId) =>
  API.patch(`adventures/${id}/like`, { userId: userId });
// Add Adventuer Participants
export const addAdventureParticipant = (id, userId, userName) =>
  API.patch(`adventures/${id}/addparticipant`, {
    userId: userId,
    userName: userName,
  });

//Feed

// Get all feed posts
export const getAllFeedPosts = () => API.get("feedPosts/");
// Get feed post by id
export const getFeedPost = (id) => API.get(`feedPosts/${id}`);
// Create feed post
export const createFeedPost = (formData) => API.post("feedPosts/", formData);
// Update feed post
export const updateFeedPost = (id, formData) =>
  API.patch(`feedPosts/${id}`, formData);
// Delete feed post
export const deleteFeedPost = (id) => API.delete(`feedPosts/${id}`);
// Like feed post
export const likeFeedPost = (id, userId) =>
  API.patch(`feedPosts/${id}/like`, { userId: userId });

// API
//Google maps api key
export const getGoogleMapsAPIKey = () => API.get("/apiKeys/googlemap");
