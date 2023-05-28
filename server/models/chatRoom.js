import mongoose from "mongoose";

const ChatRoomSchema = mongoose.Schema({
  name: String,
  adventure: String,
  chats: [
    {
      chat: String,
      user: String,
      date: new Date(),
    },
  ],
});

const ChatRoom = mongoose.model("ChatRoom", ChatRoomSchema);

export default ChatRoom;
