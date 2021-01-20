import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import moment from "moment";
import "moment/locale/es";

import ProfileBox from "../../../../components/profile_box_component/ProfileBox";
import Category from "../../../../components/category_component/Category";
import {
  Container,
  LinkArticle,
  ArticleImage,
  TopContainer,
  Title,
  Description,
  MiddleContainer,
  CategoriesContainer,
  BottomContainer,
  Trends,
  TrendIcon,
  Votes,
} from "./ArticleCard_styles";
import UpTrendSVG from "./media/up_button.svg";
import DownTrendSVG from "./media/down_button.svg";

const ArticleCard = ({ match, data, id, request_filtered_articles_fun }) => {
  const url = data.title_link.split(" ").join("-").toLowerCase();

  useEffect(() => {
    moment.locale("es");
  }, []);

  return (
    <>
      <Container>
        <LinkArticle to={`${match.path}/${url}-${id}`}>
          <ArticleImage source={data.article_image} />
          <TopContainer>
            <Title>{data.title}</Title>
            <Description>{data.description.toLowerCase()}...</Description>
          </TopContainer>
        </LinkArticle>
        <MiddleContainer>
          <CategoriesContainer>
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
          </CategoriesContainer>
          <ProfileBox
            profile_image={data.profile_image}
            user={data.user}
            date={data.date}
          />
        </MiddleContainer>
        <BottomContainer>
          <Trends>
            <TrendIcon src={UpTrendSVG} />
            <Votes>{"12"}</Votes>
            <TrendIcon src={DownTrendSVG} />
          </Trends>
        </BottomContainer>
      </Container>
    </>
  );
};

export default withRouter(ArticleCard);
