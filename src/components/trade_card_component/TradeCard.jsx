import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import moment from "moment";

import {
  Container,
  TopContainer,
  Name,
  TagsContainer,
  Tag,
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
    const { user_id } = user_firebase.user_data;
    if (vote_ref.current === true) return;

    vote_ref.current = true; // start
    const response = await votes_async({
      doc_path: `trades/${id}`,
      doc_votes_path: `trades/${id}/votes/${user_id}`,
    });

    set_votes(response[0].votes);
    vote_ref.current = false; // end
  };

  return (
    <>
      <Container home_page={home_page}>
        <TopContainer>
          <Name>{data.symbol}</Name>
          <TagsContainer>
            <Tag action={data.action.toLowerCase()}>
              #{data.action.toLowerCase()}
            </Tag>
          </TagsContainer>
        </TopContainer>
        <MiddleContainer>
          <ArtistImage
            profile_image_url={
              "https://miro.medium.com/max/900/1*qhKdx3DUOo26etSKJhnxWw.jpeg"
            }
          />
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Description>
        </MiddleContainer>
        <BottomContainer>
          <TrendsContainer>
            <TrendIcon
              src={up_button}
              onClick={() => vote_recommended_card_to_firebase()}
            />
            <Votes>{votes}</Votes>
          </TrendsContainer>
          <Username>@{data.username}</Username>
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
