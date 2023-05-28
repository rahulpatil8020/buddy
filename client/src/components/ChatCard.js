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
const ChatCard = ({ adventure, activeChat, setActiveChat }) => {
  const navigate = useNavigate();
  const onCardClick = () => {
    setActiveChat(adventure._id);
    navigate({
      pathname: "/chat",
      search: `?${createSearchParams({ roomid: adventure._id })}`,
    });
  };
  return (
    <Card
      sx={{
        boxShadow: 0,
        backgroundColor:
          adventure._id === activeChat ? "rgba(0, 0, 0, 0.1)" : "white",
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
            <Avatar>
              {adventure?.title?.split(" ")[0][0]}
              {adventure?.title?.split(" ")[1][0]}
            </Avatar>
            <Box
              sx={{
                marginLeft: 1,
                display: "block",
                overflow: "hidden",
              }}
            >
              <Typography noWrap variant={"h6"}>
                {adventure?.title}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ChatCard;
