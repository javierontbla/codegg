import React, { useEffect } from "react";
import moment from "moment";
import "moment/locale/es";

import Category from "../../../../components/category_component/Category";
import {
  ArticleCardContainer,
  LinkArticle,
  ArticleImage,
  TopContainer,
  Title,
  Premium,
  Description,
  MiddleContainer,
  ProfileContainer,
  ProfileImage,
  ProfileName,
  Date,
  BottomContainer,
} from "./ArticleCard_styles";

const ArticleCard = ({ data, id, search }) => {
  const url = data.title_link.split(" ").join("-").toLowerCase();

  useEffect(() => {
    moment.locale("es");
  }, []);

  return (
    <>
      <ArticleCardContainer>
        <LinkArticle to={`/${url}-${id}`}>
          <ArticleImage source={data.article_image} />
          <TopContainer>
            <Premium>Premium</Premium>
            <Title>{data.title}</Title>
            <Description>{data.description.toLowerCase()}...</Description>
          </TopContainer>
          <MiddleContainer>
            <ProfileImage
              profile_image_url={
                "https://images.unsplash.com/photo-1549045337-967927d923c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
              }
            />
            <ProfileContainer>
              <ProfileName>{data.user.toLowerCase()}</ProfileName>
              <Date>
                {moment(data.date.toDate()).startOf("hour").fromNow()}
              </Date>
            </ProfileContainer>
          </MiddleContainer>
        </LinkArticle>
        <BottomContainer>
          {data.categories.map((category) => {
            return (
              <Category
                onClick={() => search(category)}
                category={category}
                name={category}
                key={category}
              />
            );
          })}
        </BottomContainer>
      </ArticleCardContainer>
    </>
  );
};

export default ArticleCard;
