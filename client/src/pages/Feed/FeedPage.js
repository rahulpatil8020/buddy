import React from "react";
import { Grid, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
// import AdventurePost from "../../components/AdventurePost/AdventurePost";
import FeedPost from "../../components/FeedPost";

// import useStyles from './styles';

const FeedPage = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.feedPostsReducer);
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
          <FeedPost post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default FeedPage;
