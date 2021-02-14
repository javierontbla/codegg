import React from "react";

import {
  LoadingCategoriesContainer,
  Category,
} from "./LoadingCategories_styles";

const LoadingCategories = () => (
  <>
    <LoadingCategoriesContainer>
      <Category top={"true"}>Loading</Category>
      <Category middle={"true"}>Loading</Category>
      <Category bottom={"true"}>Loading</Category>
    </LoadingCategoriesContainer>
  </>
);

export default LoadingCategories;
