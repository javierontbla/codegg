import React from "react";

import {
  LoadingArticlesPreviewContainer,
  ArticlePreview,
} from "./LoadingArticlesPreview_styles";

const LoadingArticlesPreview = () => {
  return (
    <>
      <LoadingArticlesPreviewContainer>
        {[1, 2, 3, 4, 5].map((article_preview) => {
          return (
            <ArticlePreview
              article_preview={article_preview}
              key={article_preview}
            />
          );
        })}
      </LoadingArticlesPreviewContainer>
    </>
  );
};

export default LoadingArticlesPreview;
