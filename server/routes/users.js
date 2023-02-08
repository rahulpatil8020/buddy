import express from "express";
import {
  getUser,
  updateUser,
  deleteUser,
  login,
  signup,
} from "../controllers/userController.js";
const router = express.Router();

router.get("/:id", getUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);
router.post("/login", login);
router.post("/signup", signup);

export default router;
