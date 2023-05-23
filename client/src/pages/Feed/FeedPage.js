import React from "react";
import { Grid, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";

import Post from "../../components/Post";
import { likeFeedPost, deleteFeedPost } from "../../actions/feedPost";
const FeedPage = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.feedPostsReducer);

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      sx={{ display: "flex", alignItems: "center", padding: 2 }}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6} md={4} lg={3} xl={2.4}>
          <Post
            post={post}
            likePost={likeFeedPost}
            deletePost={deleteFeedPost}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default FeedPage;
