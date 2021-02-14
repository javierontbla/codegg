import React from "react";

import { LoadingArticlesContainer, Article } from "./LoadingArticles_styles";

const LoadingArticles = () => (
  <>
    <LoadingArticlesContainer>
      {[0, 1, 2, 3].map((article) => {
        return <Article key={article} />;
      })}
    </LoadingArticlesContainer>
  </>
);

export default LoadingArticles;
