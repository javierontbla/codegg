import React from "react";
import moment from "moment";

import Category from "../../../../components/category_component/Category";
import {
  ArticlePreviewContainer,
  ImageContainer,
  TopContainer,
  Premium,
  Title,
  MiddleContainer,
  ProfileImage,
  ProfileContainer,
  ProfileName,
  Date,
  BottomContainer,
} from "./ArticlePreview_styles";

const ArticlePreview = ({ data }) => {
  moment.locale("es");
  return (
    <>
      <ArticlePreviewContainer>
        <ImageContainer article_preview_image={data.article_image} />
        <TopContainer>
          <Premium>Premium</Premium>
          <Title>{data.title}</Title>
        </TopContainer>
        <MiddleContainer>
          <ProfileImage profile_image_url={data.profile_image_url} />
          <ProfileContainer>
            <ProfileName>{data.user}</ProfileName>
            <Date>{moment(data.date.toDate()).startOf("hour").fromNow()}</Date>
          </ProfileContainer>
        </MiddleContainer>
        <BottomContainer>
          {data.categories.map((category) => {
            return (
              <Category
                article_preview={"true"}
                category={category}
                key={category}
              />
            );
          })}
        </BottomContainer>
      </ArticlePreviewContainer>
    </>
  );
};

export default ArticlePreview;
