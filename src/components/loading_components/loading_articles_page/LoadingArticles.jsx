import React from "react";

import { LoadingArticlesContainer, Article } from "./LoadingArticles_styles";

const LoadingArticles = () => (
  <>
    <LoadingArticlesContainer>
      {[1, 2, 3].map((category) => {
        return <Article key={category} />;
      })}
    </LoadingArticlesContainer>
    <LoadingArticlesContainer>
      {[1, 2, 3].map((category) => {
        return <Article key={category} />;
      })}
    </LoadingArticlesContainer>
  </>
);

export default LoadingArticles;
