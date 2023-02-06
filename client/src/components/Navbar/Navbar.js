import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import PublicIcon from "@mui/icons-material/Public";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ChatIcon from "@mui/icons-material/Chat";
import PersonIcon from "@mui/icons-material/Person";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const MyBottomNavigationBox = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "fixed",
  bottom: 30,
  [theme.breakpoints.down("sm")]: {
    bottom: 2,
  },
}));
const MyBottomNavigation = styled(BottomNavigation)(({ theme }) => ({
  backgroundColor: "#7cc918",
  borderRadius: 15,
}));

const MyBottomNavigationAction = styled(BottomNavigationAction)({
  color: "white",
  borderRadius: 15,
  "&:hover": {
    transform: "scale(1.1)",
  },
  "&.Mui-selected": {
    transition: "0.3s",
    transform: "scale(1.1)",
    backgroundColor: "#6418c9",
  },
  "&.MuiBottomNavigationAction-root.Mui-selected": {
    color: "white",
  },
});

export default function Navbar() {
  const [value, setValue] = React.useState(window.location.pathname.slice(1));

  return (
    <MyBottomNavigationBox>
      <MyBottomNavigation
        defaultValue={"Nearby"}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <MyBottomNavigationAction
          LinkComponent={Link}
          to="/"
          value={""}
          label="Home"
          icon={<HomeIcon />}
        />

        <MyBottomNavigationAction
          LinkComponent={Link}
          to="/feed"
          value={"feed"}
          label="Feed"
          icon={<PublicIcon />}
        />
        <MyBottomNavigationAction
          LinkComponent={Link}
          to="/addPost"
          value={"addPost"}
          icon={<AddCircleIcon />}
        />
        <MyBottomNavigationAction
          LinkComponent={Link}
          to="/chat"
          value={"chat"}
          label="Chat"
          icon={<ChatIcon />}
        />
        <MyBottomNavigationAction
          LinkComponent={Link}
          to="/auth"
          value={"profile"}
          label="Profile"
          icon={<PersonIcon />}
        />
      </MyBottomNavigation>
    </MyBottomNavigationBox>
  );
}
