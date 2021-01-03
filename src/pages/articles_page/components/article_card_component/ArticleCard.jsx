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

const ArticleCard = ({ data, id, request_filtered_articles_fun }) => {
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
            <ProfileImage profile_image={data.profile_image} />
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
                onClick={() => request_filtered_articles_fun(category)}
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
