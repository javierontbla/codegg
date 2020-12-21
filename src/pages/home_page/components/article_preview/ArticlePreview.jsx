import React from "react";
import moment from "moment";

import Category from "../../../../components/category_component/Category";
import {
  ArticlePreviewContainer,
  ImageContainer,
  DataContainer,
  InformationContainer,
  Date,
  Premium,
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
          <InformationContainer>
            <Date>{moment(data.date.toDate()).format("LL")}</Date>
            <Premium>Premium</Premium>
          </InformationContainer>
          <Title>{data.title}</Title>
          <CategoriesContainer>
            {data.categories.map((category) => {
              return (
                <Category
                  article_preview={"true"}
                  category={category}
                  key={category}
                />
              );
            })}
          </CategoriesContainer>
        </DataContainer>
      </ArticlePreviewContainer>
    </>
  );
};

export default ArticlePreview;
