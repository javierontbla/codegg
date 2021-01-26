import React, { useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { connect } from "react-redux";
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
  TagsContainer,
  BottomContainer,
  Trends,
  TrendIcon,
  Votes,
} from "./ArticleCard_styles";
import UpTrendSVG from "./media/up_button.svg";
import { votes_async } from "../../../../firebase/functions/votes";

const ArticleCard = ({
  data,
  id,
  request_filtered_articles_fun,
  user_firebase,
}) => {
  const { url } = useRouteMatch();
  const [votes, set_votes] = useState(data.votes);

  moment.locale("en");

  const vote_article_card_to_firebase = async () => {
    const { user_id } = user_firebase.user_data;
    const response = await votes_async({
      doc_path: `articles/${id}`,
      doc_votes_path: `articles/${id}/votes/${user_id}`,
    });

    set_votes(response[0].votes);
  };

  return (
    <>
      <Container>
        <LinkArticle to={`${url}/${data.title_link}-${id}`}>
          <ArticleImage article_image={data.article_image} />
          <TopContainer>
            <TagsContainer>
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
            </TagsContainer>
            <Title>{data.title}</Title>
            <Description>{data.description.toLowerCase()}...</Description>
          </TopContainer>
        </LinkArticle>
        <MiddleContainer>
          <ProfileBox
            profile_image={data.profile_image}
            user={data.user}
            date={data.date}
          />
        </MiddleContainer>
        <BottomContainer>
          <Trends>
            <TrendIcon
              src={UpTrendSVG}
              onClick={() => vote_article_card_to_firebase()}
            />
            <Votes>{votes}</Votes>
          </Trends>
        </BottomContainer>
      </Container>
    </>
  );
};

// redux
const mapStateToProps = ({ user_reducer: { user_firebase } }) => ({
  user_firebase,
});

export default connect(mapStateToProps, null)(ArticleCard);
