import React from "react";
import { useSelector } from "react-redux";

const FeedPage = () => {
  const feedPosts = useSelector((state) => state.feedPostsReducer);

  return (
    <div>
      {feedPosts.map((post) => {
        return <h1>{post.title}</h1>;
      })}
    </div>
  );
};

export default FeedPage;
