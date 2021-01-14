import React from "react";

import {
  LoadingArticlesPreviewContainer,
  ArticlePreview,
} from "./LoadingArticlesPreview_styles";

const LoadingArticlesPreview = () => {
  return (
    <>
      <LoadingArticlesPreviewContainer>
        {[1, 2, 3].map((article_preview) => {
          return <ArticlePreview key={article_preview} />;
        })}
      </LoadingArticlesPreviewContainer>
    </>
  );
};

export default LoadingArticlesPreview;
