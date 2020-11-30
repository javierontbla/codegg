import React from "react";

import {
  SkeletonContainer,
  SkeletonCategory,
} from "./LoadingCategoriesSkeleton_styles";

const LoadingCategoriesSkeleton = () => (
  <>
    <SkeletonContainer>
      {[1, 2, 3, 4, 5].map((category) => {
        return <SkeletonCategory />;
      })}
    </SkeletonContainer>
  </>
);

export default LoadingCategoriesSkeleton;
