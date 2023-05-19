import { Container, Typography, Button, Stack } from "@mui/material";
import React, { useState } from "react";
import CreatePost from "../../components/CreatePost";
const AddPostPage = () => {
  const [createType, setCreateType] = useState("feedpost");
  return (
    <Container sx={{ paddingTop: 5, paddingBottom: 20 }}>
      <Stack
        alignItems="center"
        alignContent={"center"}
        direction={"row"}
        spacing={3}
      >
        {createType === "adventurepost" && (
          <Button
            onClick={() => {
              setCreateType("feedpost");
            }}
            variant="contained"
          >
            Create Feed Post
          </Button>
        )}
        {createType === "feedpost" && (
          <Button
            onClick={() => {
              setCreateType("adventurepost");
            }}
            variant="outlined"
          >
            Create Adventure
          </Button>
        )}
      </Stack>
      {createType === "feedpost" && (
        <>
          <Typography variant="h4" sx={{ margin: 2 }}>
            Create Post
          </Typography>

          <CreatePost />
        </>
      )}
      {createType === "adventurepost" && (
        <>
          <Typography variant="h4" sx={{ marginX: 2, marginY: 3 }}>
            Create Adventure
          </Typography>
          <CreatePost />
        </>
      )}
    </Container>
  );
};

export default AddPostPage;
