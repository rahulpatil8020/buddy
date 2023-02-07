import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import PublicIcon from "@mui/icons-material/Public";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ChatIcon from "@mui/icons-material/Chat";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import { styles } from "./styles";

export default function Navbar() {
  const [value, setValue] = React.useState(window.location.pathname.slice(1));

  return (
    <Box sx={styles.navigationBarBox}>
      <BottomNavigation
        sx={styles.navigationBar}
        defaultValue={"Nearby"}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          sx={styles.navigationBarAction}
          LinkComponent={Link}
          to="/"
          value={""}
          label="Home"
          icon={<HomeIcon />}
        />

        <BottomNavigationAction
          sx={styles.navigationBarAction}
          LinkComponent={Link}
          to="/feed"
          value={"feed"}
          label="Feed"
          icon={<PublicIcon />}
        />
        <BottomNavigationAction
          sx={styles.navigationBarAction}
          LinkComponent={Link}
          to="/addPost"
          value={"addPost"}
          icon={<AddCircleIcon />}
        />
        <BottomNavigationAction
          sx={styles.navigationBarAction}
          LinkComponent={Link}
          to="/chat"
          value={"chat"}
          label="Chat"
          icon={<ChatIcon />}
        />
        <BottomNavigationAction
          sx={styles.navigationBarAction}
          LinkComponent={Link}
          to="/profile"
          value={"profile"}
          label="Profile"
          icon={<PersonIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
