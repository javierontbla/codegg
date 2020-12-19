import React from "react";
import moment from "moment";

import Category from "../../../../components/category_component/Category";
import {
  ArticlePreviewContainer,
  ImageContainer,
  DataContainer,
  Date,
  Title,
  CategoriesContainer,
} from "./ArticlePreview_styles";

const ArticlePreview = ({ data }) => {
  moment.locale("es");
  return (
    <>
      <ArticlePreviewContainer>
        <ImageContainer article_preview_image={data.article_image} />
        <DataContainer>
          <Date>{moment(data.date.toDate()).format("LL")}</Date>
          <Title>{data.title}</Title>
          <CategoriesContainer>
            {data.categories.map((category) => {
              return <Category article_preview={"true"} category={category} />;
            })}
          </CategoriesContainer>
        </DataContainer>
      </ArticlePreviewContainer>
    </>
  );
};

export default ArticlePreview;
