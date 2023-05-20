import { Container, Typography, Button, Stack } from "@mui/material";
import React, { useState } from "react";
import CreatePost from "../../components/CreatePost";
const AddPostPage = () => {
  const [createType, setCreateType] = useState("feedPost");
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
              setCreateType("feedPost");
            }}
            variant="contained"
          >
            Create Feed Post
          </Button>
        )}
        {createType === "feedPost" && (
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
      {createType === "feedPost" && (
        <>
          <Typography variant="h4" sx={{ margin: 2 }}>
            Create Post
          </Typography>

          <CreatePost
            postName="feedPost"
            postLabel="Feed Post Name"
            type="feedPost"
          />
        </>
      )}
      {createType === "adventurepost" && (
        <>
          <Typography variant="h4" sx={{ marginX: 2, marginY: 3 }}>
            Create Adventure
          </Typography>
          <CreatePost
            postName="adventurepost"
            postLabel="Adventure Post Name"
            type="adventurepost"
          />
        </>
      )}
    </Container>
  );
};

export default AddPostPage;
