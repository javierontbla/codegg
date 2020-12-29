import React from "react";

import {
  LoadingCategoriesContainer,
  Category,
} from "./LoadingCategories_styles";

const LoadingCategories = () => (
  <>
    <LoadingCategoriesContainer>
      {[1, 2, 3, 4, 5].map((category) => {
        return <Category key={category} />;
      })}
    </LoadingCategoriesContainer>
  </>
);

export default LoadingCategories;
