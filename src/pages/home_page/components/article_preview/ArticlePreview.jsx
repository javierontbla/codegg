import React from "react";

import Category from "../../../../components/category_component/Category";
import {
  ArticlePreviewContainer,
  ImageContainer,
  DataContainer,
  Date,
  Title,
  CategoriesContainer,
} from "./ArticlePreview_styles";

const ArticlePreview = () => {
  return (
    <>
      <ArticlePreviewContainer>
        <ImageContainer></ImageContainer>
        <DataContainer>
          <Date>December 14, 2020</Date>
          <Title>¿Por qué si invertir en Microsoft?</Title>
          <CategoriesContainer>
            {["stocks"].map((category) => {
              return <Category preview={"true"} category={category} />;
            })}
          </CategoriesContainer>
        </DataContainer>
      </ArticlePreviewContainer>
    </>
  );
};

export default ArticlePreview;
