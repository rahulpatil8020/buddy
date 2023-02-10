import React from "react";
import { useSelector } from "react-redux";

const HomePage = () => {
  const adventurePosts = useSelector((state) => state.adventurePostsReducer);
  return (
    <div>
      <h1>{adventurePosts}</h1>
    </div>
  );
};

export default HomePage;
