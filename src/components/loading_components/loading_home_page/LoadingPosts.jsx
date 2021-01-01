import React from "react";

import { LoadingPostsContainer, Post } from "./LoadingPosts_styles";

const LoadingPosts = () => {
  return (
    <>
      <LoadingPostsContainer>
        {[1, 2, 3].map((post) => {
          return <Post post={post} key={post} />;
        })}
      </LoadingPostsContainer>
    </>
  );
};

export default LoadingPosts;
