import React from "react";
import { Container, Avatar, Typography, Paper } from "@mui/material";
import { styles } from "./styles";
const ProfilePage = () => {
  const name = "Rahul Patil";
  return (
    <>
      <Container component="main" sx={styles.root}>
        <Avatar sx={{ width: 100, height: 100, fontSize: 40 }}>
          {name.split(" ")[0][0]}
          {name.split(" ")[1][0]}
        </Avatar>
        <Typography component="h1" variant="h4">
          Rahul Patil
        </Typography>
      </Container>
    </>
  );
};

export default ProfilePage;
