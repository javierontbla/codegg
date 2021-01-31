import React, { useState, useRef } from "react";
import moment from "moment";
import { connect } from "react-redux";

import ProfileBox from "../../../../components/profile_box_component/ProfileBox";
import {
  ArticlePreviewContainer,
  HyperLink,
  ImageContainer,
  TopContainer,
  Title,
  MiddleContainer,
  BottomContainer,
  Trends,
  TrendIcon,
  Votes,
} from "./ArticleCardPreview_styles";
import UpTrend from "./media/up_button.svg";
import { votes_async } from "../../../../firebase/functions/votes";

const ArticleCardPreview = ({ data, id, user_firebase }) => {
  moment.locale("es");
  const [votes, set_votes] = useState(data.votes);
  const vote_ref = useRef(false);

  const vote_article_card_preview_to_firebase = async () => {
    if (user_firebase) {
      const { user_id } = user_firebase.user_data;
      if (vote_ref.current === true) return;

      vote_ref.current = true; // start
      const response = await votes_async({
        doc_path: `articles/${id}`,
        doc_votes_path: `articles/${id}/votes/${user_id}`,
      });
      set_votes(response[0].votes);
      vote_ref.current = false; // end
    } else {
      // user isn't logged in
    }
  };

  return (
    <>
      <ArticlePreviewContainer>
        <HyperLink to={`/reviews/${id}`}>
          <ImageContainer article_preview_image={data.article_image} />
          <TopContainer>
            <Title>{data.title}</Title>
          </TopContainer>
          <MiddleContainer>
            <ProfileBox
              profile_image={data.profile_image}
              user={data.user}
              user_id={data.user_id}
              date={data.date}
              article_card_preview={"true"}
            />
          </MiddleContainer>
        </HyperLink>
        <BottomContainer>
          <Trends>
            <TrendIcon
              src={UpTrend}
              onClick={() => vote_article_card_preview_to_firebase()}
            />
            <Votes>{votes}</Votes>
          </Trends>
        </BottomContainer>
      </ArticlePreviewContainer>
    </>
  );
};

// redux
const mapStateToProps = ({ user_reducer: { user_firebase } }) => ({
  user_firebase,
});

export default connect(mapStateToProps, null)(ArticleCardPreview);
