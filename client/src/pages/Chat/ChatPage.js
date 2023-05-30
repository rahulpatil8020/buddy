import {
  Container,
  Paper,
  Typography,
  Box,
  Divider,
  TextField,
  InputAdornment,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import ChatCard from "../../components/ChatCard";
import { useLocation, useSearchParams } from "react-router-dom";
import { useTheme } from "@mui/styles";
import { alpha } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const ChatPage = () => {
  const location = useLocation();
  const theme = useTheme();
  const [searchParams] = useSearchParams();
  const adventures = useSelector((state) => state.adventurePostsReducer);
  const user = useSelector((state) => state.authReducer.authData?.user);
  const [activeChat, setActiveChat] = useState(searchParams.get("roomid"));

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
            {adventures.map((adventure) =>
              adventure.adventureParticipants.some(
                (adventureParticipant) =>
                  adventureParticipant?.userId === user?._id
              ) ? (
                <>
                  <ChatCard
                    key={adventure._id}
                    adventure={adventure}
                    activeChat={activeChat}
                    setActiveChat={setActiveChat}
                  />
                  <Divider></Divider>
                </>
              ) : null
            )}
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
            {searchParams.get("roomid") && (
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
                  autoFocus
                  id="input-with-icon-textfield"
                  label="Type a message"
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SendIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <Typography sx={{ alignSelf: "flex-end" }}>Hello</Typography>
                <Typography>Bye</Typography>
              </Box>
            )}
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default ChatPage;
