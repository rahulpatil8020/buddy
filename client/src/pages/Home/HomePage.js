import React from "react";
import { useSelector } from "react-redux";

const HomePage = () => {
  const adventurePosts = useSelector((state) => state.adventurePostsReducer);
  return (
    <div>
      {adventurePosts.map((post) => {
        return <h1>{post.title}</h1>;
      })}
    </div>
  );
};

export default HomePage;
