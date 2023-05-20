import express from "express";
import {
  getFeedpost,
  getAllFeedposts,
  createFeedpost,
  updateFeedpost,
  deleteFeedpost,
} from "../controllers/feedpostController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

// Functions imported from adventureController.js are used to perform certain action when the url is hit in the backend;
router.get("/", getAllFeedposts);
router.get("/:id", getFeedpost);
router.post("/", createFeedpost);
router.patch("/:id", updateFeedpost);
router.delete("/:id", deleteFeedpost);

export default router;
