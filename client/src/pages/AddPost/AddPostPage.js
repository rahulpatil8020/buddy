import { Container, Typography, Button, Stack } from "@mui/material";
import React, { useState } from "react";
import CreatePost from "../../components/CreatePost";
import { useSelector } from "react-redux";
const AddPostPage = () => {
  const authData = useSelector((state) => state.authReducer?.authData);
  const initialFormData = {
    title: "",
    tags: [],
    details: "",
    image: "",
    createdBy: authData?.user?._id,
  };
  const [formData, setFormData] = useState(initialFormData);
  const [createType, setCreateType] = useState("feedPost");
  console.log(initialFormData);
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
              setFormData(initialFormData);
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
              setFormData(initialFormData);
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
            formData={formData}
            setFormData={setFormData}
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
            formData={formData}
            setFormData={setFormData}
          />
        </>
      )}
    </Container>
  );
};

export default AddPostPage;
