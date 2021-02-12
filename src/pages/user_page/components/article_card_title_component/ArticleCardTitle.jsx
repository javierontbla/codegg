import React, { useState, useRef } from "react";
import { connect } from "react-redux";

import {
  Container,
  HyperLink,
  ImageContainer,
  TitleContainer,
  BottomContainer,
  Trends,
  TrendIcon,
  Votes,
} from "./ArticleCardTitle_styles";
import UpTrendSVG from "./media/up_button.svg";
import { open_modal_action } from "../../../../redux/modal/actions";
import { votes_async } from "../../../../firebase/functions/votes";

const ArticleCardTitle = ({ data, id, user_firebase, open_modal }) => {
  const [votes, set_votes] = useState(data.votes);
  const vote_ref = useRef(false);

  const vote_article_card_to_firebase = async () => {
    if (user_firebase) {
      const { user_id } = user_firebase.user_data;
      if (vote_ref.current === true) return;

      vote_ref.current = true; // start
      const response = await votes_async({
        doc_path: `articles/${id}`,
        doc_votes_path: `articles/${id}/votes/${user_id}`,
        user_id,
      });

      set_votes(response[0].votes);
      vote_ref.current = false; // end
    } else {
      open_modal();
    }
  };

  return (
    <>
      <Container>
        <HyperLink to={`/reviews/${id}`}>
          <ImageContainer article_image={data.article_image} />
          <TitleContainer>{data.title}</TitleContainer>
        </HyperLink>
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

const mapDispatchToProps = (dispatch) => ({
  open_modal: () => dispatch(open_modal_action()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleCardTitle);
