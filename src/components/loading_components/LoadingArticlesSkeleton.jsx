import React from "react";

import {
  SkeletonContainer,
  SkeletonArticle,
} from "./LoadingArticlesSkeleton_styles";

const LoadingArticlesSkeleton = () => (
  <>
    <SkeletonContainer>
      {[1, 2, 3].map((category) => {
        return <SkeletonArticle />;
      })}
    </SkeletonContainer>
    <SkeletonContainer>
      {[1, 2, 3].map((category) => {
        return <SkeletonArticle />;
      })}
    </SkeletonContainer>
  </>
);

export default LoadingArticlesSkeleton;
