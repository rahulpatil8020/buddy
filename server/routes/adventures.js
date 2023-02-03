import express from "express";
import {
  getAdventure,
  getAllAdventures,
  createAdventure,
  updateAdventure,
  deleteAdventure,
} from "../controllers/adventureController";
const router = express.Router();

router.get("/", getAllAdventures);
router.get("/:id", getAdventure);
router.post("/", createAdventure);
router.patch("/:id", updateAdventure);
router.delete("/:id", deleteAdventure);

export default router;
