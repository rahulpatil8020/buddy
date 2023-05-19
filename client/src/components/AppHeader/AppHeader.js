import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import {
  Box,
  Dialog,
  Toolbar,
  Tooltip,
  Button,
  DialogTitle,
  DialogActions,
  Slide,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

const MyAppTitleBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  color: theme.palette.common.white,
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AppHeader() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const confirmLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/auth");
    setUser(null);
    setDialogOpen(false);
  };
  const logout = () => {
    setDialogOpen(true);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUser(user?.user);
    if (user) {
      dispatch({ type: "GETUSER", payload: user });
    }
  }, [location]);
  return (
    <>
      <Dialog
        open={dialogOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleDialogClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Do You Want to Log Out?"}</DialogTitle>
        <DialogActions>
          <Button onClick={handleDialogClose}>No</Button>
          <Button onClick={confirmLogout}>Yes</Button>
        </DialogActions>
      </Dialog>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "#6418c9" }}>
          <Toolbar>
            <MyAppTitleBox>
              <Typography variant="h6" noWrap>
                ADV
              </Typography>
              <Typography variant="h6" noWrap>
                BUD
              </Typography>
            </MyAppTitleBox>

            <Box sx={{ flexGrow: 1 }} />
            {user ? (
              <Typography sx={{ marginRight: 5 }}>Hey, {user?.name}</Typography>
            ) : null}
            <Box>
              {user ? (
                <Tooltip title="Logout">
                  <IconButton
                    onClick={logout}
                    size="large"
                    aria-label="show 4 new mails"
                    color="inherit"
                  >
                    <LogoutIcon />
                  </IconButton>
                </Tooltip>
              ) : (
                <Tooltip title="Login">
                  <IconButton
                    onClick={() => {
                      navigate("/auth");
                    }}
                    size="large"
                    aria-label="show 4 new mails"
                    color="inherit"
                  >
                    <LoginIcon />
                  </IconButton>
                </Tooltip>
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
