import React from "react";
import moment from "moment";

import Category from "../../../../components/category_component/Category";
import {
  ArticlePreviewContainer,
  ImageContainer,
  DataContainer,
  Premium,
  Title,
  ProfileInformationContainer,
  ProfileImage,
  NameAndDateContainer,
  Name,
  Date,
  CategoriesContainer,
} from "./ArticlePreview_styles";

const ArticlePreview = ({ data }) => {
  moment.locale("es");
  return (
    <>
      <ArticlePreviewContainer>
        <ImageContainer article_preview_image={data.article_image} />
        <DataContainer>
          <Premium>Premium</Premium>
          <Title>{data.title}</Title>
          <ProfileInformationContainer>
            <ProfileImage
              profile_image_url={
                "https://images.unsplash.com/photo-1584799235813-aaf50775698c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
              }
            />
            <NameAndDateContainer>
              <Name>John Mayer</Name>
              <Date>
                {moment(data.date.toDate()).startOf("hour").fromNow()}
              </Date>
            </NameAndDateContainer>
          </ProfileInformationContainer>
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
