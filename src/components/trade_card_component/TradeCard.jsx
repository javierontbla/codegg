import React from "react";
import moment from "moment";

import {
  Container,
  TopContainer,
  Name,
  InformationContainer,
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
import down_button from "./media/down_button.svg";

const TradeCard = ({ home_page, data }) => {
  moment.locale("en");
  return (
    <>
      <Container home_page={home_page}>
        <TopContainer>
          <Name>{data.symbol.toUpperCase()}</Name>
          <InformationContainer>
            <Tag action={data.action.toLowerCase()}>
              #{data.action.toLowerCase()}
            </Tag>
          </InformationContainer>
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
            <TrendIcon src={up_button} />
            <Votes>{data.up_trends - data.down_trends}</Votes>
            <TrendIcon src={down_button} />
          </TrendsContainer>
          <Username>@{data.username}</Username>
        </BottomContainer>
      </Container>
    </>
  );
};

export default TradeCard;
