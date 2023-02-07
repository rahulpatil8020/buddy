export const styles = {
  navigationBarBox: (theme) => ({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    bottom: 30,
    [theme.breakpoints.down("sm")]: {
      bottom: 2,
    },
  }),
  navigationBar: {
    backgroundColor: "#7cc918",
    borderRadius: 4,
  },
  navigationBarAction: {
    color: "white",
    borderRadius: 4,
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
  },
};
