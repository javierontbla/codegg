import React, { useState } from "react";
import { connect } from "react-redux";

import {
  Container,
  ImageContainer,
  TitleContainer,
  TrendsContainer,
  Trends,
  TrendIcon,
  Votes,
} from "./ArticleCardTitle_styles";
import UpTrendSVG from "./media/up_button.svg";
import { votes_async } from "../../../../firebase/functions/votes";

const ArticleCardTitle = ({ data, id, user_firebase }) => {
  const [votes, set_votes] = useState(data.votes);

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
        <ImageContainer article_image={data.article_image} />
        <TitleContainer>{data.title}</TitleContainer>
        <TrendsContainer>
          <Trends>
            <TrendIcon
              src={UpTrendSVG}
              onClick={() => vote_article_card_to_firebase()}
            />
            <Votes>{votes}</Votes>
          </Trends>
        </TrendsContainer>
      </Container>
    </>
  );
};

// redux
const mapStateToProps = ({ user_reducer: { user_firebase } }) => ({
  user_firebase,
});

export default connect(mapStateToProps, null)(ArticleCardTitle);
