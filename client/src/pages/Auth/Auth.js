import React, { useState } from "react";
import {
  Container,
  Paper,
  Avatar,
  Typography,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Input from "./Input";

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const isSignup = true;
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  const handleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };
  return (
    <Container component={"main"} maxWidth={"xs"}>
      <Paper elevation={3}>
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h5" variant="h5">
          {isSignup ? "Sign Up" : "Sign In"}
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup ? (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  type="text"
                  half
                  autoFocus
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  type="text"
                  half
                />
              </>
            ) : null}
            <Input
              name="email"
              label="Email"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignup ? (
              <Input
                name="confirmPassword"
                label="Confirm Password"
                handleChange={handleChange}
                type="password"
              />
            ) : null}
            <Button type="submit" fullWidth variant="contained" color="primary">
              {isSignup ? "Sign Up" : "Sign In"}
            </Button>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
