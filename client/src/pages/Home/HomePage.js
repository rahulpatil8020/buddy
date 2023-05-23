import React from "react";
import { Grid, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import AdventurePost from "../../components/AdventurePost/AdventurePost";

// import useStyles from './styles';

const HomePage = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.adventurePostsReducer);
  // const classes = useStyles();

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      sx={{ display: "flex", alignItems: "center", spacing: 2, padding: 2 }}
      // className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={4} md={4}>
          <AdventurePost post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default HomePage;
