import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import moment from "moment";

import {
  Container,
  HyperLink,
  TopContainer,
  Name,
  MiddleContainer,
  Description,
  ArtistImage,
  BottomContainer,
  TrendsContainer,
  Votes,
  TrendIcon,
  Username,
} from "./TradeCard_styles";
import up_button from "./media/up_button.svg";
import { votes_async } from "../../firebase/functions/votes";

const TradeCard = ({ home_page, data, id, user_firebase }) => {
  moment.locale("en");
  const [votes, set_votes] = useState(data.votes);
  const vote_ref = useRef(false);

  const vote_recommended_card_to_firebase = async () => {
    if (user_firebase) {
      const { user_id } = user_firebase.user_data;
      if (vote_ref.current === true) return;

      vote_ref.current = true; // start
      const response = await votes_async({
        doc_path: `trades/${id}`,
        doc_votes_path: `trades/${id}/votes/${user_id}`,
      });

      set_votes(response[0].votes);
      vote_ref.current = false; // end
    }
  };

  return (
    <>
      <Container home_page={home_page}>
        <TopContainer>
          <Name>{data.title}</Name>
        </TopContainer>
        <MiddleContainer>
          <ArtistImage profile_image_url={data.image_url} />
          <Description>{data.description}</Description>
        </MiddleContainer>
        <BottomContainer>
          <TrendsContainer>
            <TrendIcon
              src={up_button}
              onClick={() => vote_recommended_card_to_firebase()}
            />
            <Votes>{votes}</Votes>
          </TrendsContainer>
          <HyperLink to={`/users/${data.user_id}`}>
            <Username>@{data.username}</Username>
          </HyperLink>
        </BottomContainer>
      </Container>
    </>
  );
};

// redux
const mapStateToProps = ({ user_reducer: { user_firebase } }) => ({
  user_firebase,
});

export default connect(mapStateToProps, null)(TradeCard);
