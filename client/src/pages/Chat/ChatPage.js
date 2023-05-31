import {
  Container,
  Paper,
  Typography,
  Box,
  Divider,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ChatRoomCard from "../../components/ChatRoomCard";
import { useLocation, useSearchParams } from "react-router-dom";
import { useTheme } from "@mui/styles";
import { alpha } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { addChat, getAllChatRooms } from "../../actions/chatRoom";

const ChatPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const theme = useTheme();
  const [searchParams] = useSearchParams();
  const roomId = searchParams.get("roomid");
  const user = useSelector((state) => state.authReducer.authData);
  const [activeChat, setActiveChat] = useState(roomId);
  const chatRooms = useSelector((state) => state.chatRoomsReducer);
  const [currentChatRoom, setCurrentChatRoom] = useState(null);

  const [chatText, setChatText] = useState("");
  useEffect(() => {
    dispatch(getAllChatRooms());
    chatRooms?.map(
      (chatRoom) => chatRoom?._id === roomId && setCurrentChatRoom(chatRoom)
    );
  }, []);
  console.log(chatRooms);
  const handleAddChat = (e) => {
    dispatch(
      addChat(currentChatRoom._id, {
        chatText: chatText,
        user: user._id,
        date: new Date(),
      })
    );
  };
  return (
    <Container
      sx={{ paddingTop: 5, paddingBottom: 25, height: "100vh" }}
      maxWidth="lg"
    >
      <Typography variant="h5" sx={{ fontWeight: 600 }}>
        Chat Room
      </Typography>
      <Paper
        sx={{
          height: "100%",
          marginTop: "20px",
          boxShadow:
            "0px 4px 8px 0px rgba(0, 0, 0, 0.2), 0px 6px 20px 0px rgba(0, 0, 0, 0.19)",
          borderRadius: "15px",
          paddingY: "20px",
          paddingX: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
          }}
        >
          <Box
            sx={{ display: "flex", flexDirection: "column", marginRight: 1 }}
          >
            <Divider></Divider>
            {chatRooms &&
              chatRooms?.map((chatRoom) => (
                <>
                  <ChatRoomCard
                    key={chatRoom._id}
                    activeChat={activeChat}
                    setActiveChat={setActiveChat}
                    chatRoom={chatRoom}
                    setCurrentChatRoom={setCurrentChatRoom}
                  />
                  <Divider></Divider>
                </>
              ))}
          </Box>
          <Divider orientation="vertical"></Divider>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                paddingX: 5,
                height: 60,
                backgroundColor: alpha(theme.palette.primary.main, 0.5),
              }}
            >
              <Typography variant="h6">Chat Room For </Typography>
            </Box>
            {roomId && (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column-reverse",
                  height: "100%",
                  paddingY: 2,
                  paddingX: 4,
                }}
              >
                <TextField
                  onChange={(e) => setChatText(e.target.value)}
                  value={chatText}
                  autoFocus
                  id="input-with-icon-textfield"
                  label="Type a message"
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleAddChat}>
                          <SendIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                {currentChatRoom?.chats?.map((chat) => (
                  <Typography
                    sx={{
                      alignSelf:
                        chat.user === user._id ? "flex-end" : "flex-start",
                    }}
                  >
                    {chat.chatText}
                  </Typography>
                ))}
              </Box>
            )}
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default ChatPage;
