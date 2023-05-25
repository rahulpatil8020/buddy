import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import ChatCard from "../../components/ChatCard";

const ChatPage = () => {
  const adventures = useSelector((state) => state.adventurePostsReducer);
  const user = useSelector((state) => state.authReducer.authData?.user);
  return (
    <Container maxWidth="lg">
      <Paper
        sx={{
          height: "100vh",
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
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          Chat Room
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            {adventures.map((adventure) =>
              adventure.adventureParticipants.some(
                (adventureParticipant) =>
                  adventureParticipant?.userId === user?._id
              ) ? (
                <ChatCard key={adventure._id} adventure={adventure} />
              ) : null
            )}
          </Grid>
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Divider orientation="vertical" flexItem></Divider>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default ChatPage;
