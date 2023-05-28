import express from "express";
import {
  getAllChatRooms,
  getOneChatRoom,
  createChatRoom,
  deleteChatRoom,
  updateChatRoom,
  createChat,
  // getAllChats,
  // deleteChat,
  // updateChat,
} from "../controllers/chatRoomController";
const router = express.Router();

router.get("/", getAllChatRooms);
router.get("/:id", getOneChatRoom);
router.post("/", createChatRoom);
router.patch("/:id", updateChatRoom);
router.delete("/:id", deleteChatRoom);
router.patch("/:id/chat", createChat);
// router.get("/:id/chat", getAllChats);
// router.delete("/:id/chat/:chatId", deleteChat);
// router.patch("/:id/chat/:chatId", updateChat);

export default router;
