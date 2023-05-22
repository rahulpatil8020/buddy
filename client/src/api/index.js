import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8000" });

export const signup = (formData) => API.post("users/signup", formData);
export const login = (formData) => API.post("users/login", formData);

export const getAllAdventurePosts = () => API.get("adventures/");
export const getAdventurePost = (id) => API.get(`adventures/${id}`);
export const createAdventurePost = (formData) =>
  API.post("adventures/", formData);
export const updateAdventurePost = (id, formData) =>
  API.patch(`adventures/${id}`, formData);
export const deleteAdventurePost = (id) => API.delete(`adventures/${id}`);
export const likeAdventurePost = (id) => API.patch(`adventures/${id}/like`);

export const getAllFeedPosts = () => API.get("feedPosts/");
export const getFeedPost = (id) => API.get(`feedPosts/${id}`);
export const createFeedPost = (formData) => API.post("feedPosts/", formData);
export const updateFeedPost = (id, formData) =>
  API.patch(`feedPosts/${id}`, formData);
export const deleteFeedPost = (id) => API.delete(`feedPosts/${id}`);
export const likeFeedPost = (id) => API.patch(`feedPosts/${id}/like`);
