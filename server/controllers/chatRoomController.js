import ChatRoom from "../models/chatRoom";
import mongoose from "mongoose";

export const getAllChatRooms = (req, res) => {
  try {
    const chatRooms = await ChatRoom.find();
    res.status(200).json(chatRooms);
  } catch (error) {
    console.log(error.message);
  }
};


export const getOneChatRoom = (req, res) => {
    const {id} = req.params;
    try{
        if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send(`Chat room with id ${id} not found`);
        const chatRoom = await ChatRoom.findById(id);
        res.status(200).json(chatRoom)
    }catch(error){
        console.log(error.message);
    }
}

export const createChatRoom = (req, res) => {
    const chatRoom = req.body;
    const newChatRoom = new ChatRoom(chatRoom);

    try{
        await newChatRoom.save();
        res.status(200).json(newChatRoom)
    }catch(error){
        console.log(error.message);
    }
}

export const updateChatRoom = (req, res) => {
    const chatRoom = req.body;
    const {id} = req.params;

    try{
        if(!mongoose.Types.ObjectId.isVallid(id))
        return res.status(404).send(`Chat room with id ${id} not found`)

        const updatedChatRoom = chatRoom;
        await ChatRoom.findByIdAndUpdate(id, updatedChatRoom, {new: true});
        res.status(200).json(updatedChatRoom);
    }catch(error){
        console.log(error.message);
    }
}

export const deleteChatRoom = (req, res) => {
    const {id} = req.params;
    try{
        if(!mongoose.Types.ObjectId.isVallid(id))
        return res.status(404).send(`Chat room with id ${id} not found`)

        await ChatRoom.findByIdAndDelete(id);
        res.status(200).json({message: "Post deleted Successfully"})
    }catch(error){
        console.log(error);
    }
}

export const createChat = (req, res) => {
    const chat = req.body;
    const {id} = req.params;

    try{
        if(!mongoose.Types.ObjectId.isVallid(id))
        return res.status(404).send(`Chat room with id ${id} not found`)

        const chatRoom = await ChatRoom.findById(id);
        
        const updatedChatRoom = await ChatRoom.findByIdAndUpdate(
            id,
            {
                chats: [...chatRoom.chats, chat]
            },
            {new: true}
        )
        res.status(200).json(updatedChatRoom);
    }catch(error){
        console.log(error.message)
    }
}

