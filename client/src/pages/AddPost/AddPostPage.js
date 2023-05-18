import { Container } from "@mui/material";
import React, { useState } from "react";
import CreatePost from "../../components/CreatePost";
const AddPostPage = () => {
  return (
    <Container sx={{ paddingTop: 5 }}>
      <CreatePost />
    </Container>
  );
};

export default AddPostPage;
