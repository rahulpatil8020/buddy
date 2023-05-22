import express from "express";
import {
  getAdventurePost,
  getAllAdventurePosts,
  createAdventurePost,
  updateAdventurePost,
  deleteAdventurePost,
} from "../controllers/adventureController.js";
// import auth from "../middleware/auth.js";

const router = express.Router();

// Functions imported from adventureController.js are used to perform certain action when the url is hit in the backend;
router.get("/", getAllAdventurePosts);
router.get("/:id", getAdventurePost);
router.post("/", createAdventurePost);
router.patch("/:id", updateAdventurePost);
router.delete("/:id", deleteAdventurePost);

export default router;
