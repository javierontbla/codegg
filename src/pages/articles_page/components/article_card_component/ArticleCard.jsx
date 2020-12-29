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
  Description,
  MiddleContainer,
  ProfileImage,
  ProfileInformation,
  Name,
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
            <Title>{data.title}</Title>
            <Description>{data.description}</Description>
          </TopContainer>
          <MiddleContainer>
            <ProfileImage />
            <ProfileInformation>
              <Name>John Magay</Name>
              <Date>
                {moment(data.date.toDate()).startOf("hour").fromNow()}
              </Date>
            </ProfileInformation>
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
