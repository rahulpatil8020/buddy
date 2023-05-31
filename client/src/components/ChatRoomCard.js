import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Avatar,
  Box,
  Typography,
} from "@mui/material";
import { useNavigate, createSearchParams } from "react-router-dom";
const ChatRoomCard = ({
  chatRoomName,
  activeChat,
  setActiveChat,
  chatRoomId,
}) => {
  const navigate = useNavigate();
  const onCardClick = () => {
    setActiveChat(chatRoomId);
    navigate({
      pathname: "/chat",
      search: `?${createSearchParams({ roomid: chatRoomId })}`,
    });
  };
  return (
    <Card
      sx={{
        boxShadow: 0,
        backgroundColor:
          chatRoomId === activeChat ? "rgba(0, 0, 0, 0.1)" : "white",
        width: "100%",
      }}
    >
      <CardActionArea>
        <CardContent onClick={onCardClick}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <Avatar>RP</Avatar>
            <Box
              sx={{
                marginLeft: 1,
                display: "block",
                overflow: "hidden",
              }}
            >
              <Typography noWrap variant={"h6"}>
                {chatRoomName}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ChatRoomCard;
