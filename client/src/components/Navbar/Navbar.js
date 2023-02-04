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
import "./styles.css";

const MyBottomNavigationBox = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "fixed",
  bottom: 30,
});
const MyBottomNavigation = styled(BottomNavigation)({
  backgroundColor: "#8A22F1",
  borderRadius: 15,
});

const MyBottomNavigationAction = styled(BottomNavigationAction)({
  color: "white",
  borderRadius: 15,
  "&:hover": {
    transform: "scale(1.1)",
  },
  "&.Mui-selected": {
    transition: "0.3s",
    transform: "scale(1.05)",
    backgroundColor: "#C592F8",
  },
  "&.MuiBottomNavigationAction-root.Mui-selected": {
    color: "#8A22F1",
  },
});

export default function Navbar() {
  const [value, setValue] = React.useState(0);

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
          disableRipple
          label="Home"
          icon={<HomeIcon />}
        />
        <MyBottomNavigationAction label="Feed" icon={<PublicIcon />} />
        <MyBottomNavigationAction icon={<AddCircleIcon />} />
        <MyBottomNavigationAction label="Chat" icon={<ChatIcon />} />
        <MyBottomNavigationAction label="Profile" icon={<PersonIcon />} />
      </MyBottomNavigation>
    </MyBottomNavigationBox>
  );
}
