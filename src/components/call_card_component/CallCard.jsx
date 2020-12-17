import React from "react";

import {
  CallCardContainer,
  TopContainer,
  Title,
  InformationContainer,
  Action,
  Risk,
  Date,
  MiddleContainer,
  OrderContainer,
  LeftText,
  RightText,
  CommentContainer,
  BottomContainer,
  TrendsContainer,
  UpTrend,
  DownTrend,
  Count,
  TrendIcon,
  NameLink,
} from "./CallCard_styles";
import up_button from "./media/up_button.svg";
import down_button from "./media/down_button.svg";

const CallCard = ({ home_page }) => {
  return (
    <>
      <CallCardContainer home_page={home_page}>
        <TopContainer>
          <Title>AMZN</Title>
          <InformationContainer>
            <Action action={"buy"}>BUY</Action>
            <Date>November 13, 2020 12:12 PM</Date>
          </InformationContainer>
        </TopContainer>
        <MiddleContainer>
          <OrderContainer>
            <LeftText>Company:</LeftText>
            <RightText>Amazon</RightText>
          </OrderContainer>
          <OrderContainer>
            <LeftText>Price:</LeftText>
            <RightText>$129.45</RightText>
          </OrderContainer>
          <OrderContainer>
            <LeftText>Shares:</LeftText>
            <RightText>25</RightText>
          </OrderContainer>
          <CommentContainer>"Amazing company"</CommentContainer>
        </MiddleContainer>
        <BottomContainer>
          <TrendsContainer>
            <UpTrend>
              <TrendIcon src={up_button} />
            </UpTrend>
            <Count>64</Count>
            <DownTrend>
              <TrendIcon src={down_button} />
            </DownTrend>
          </TrendsContainer>
          <NameLink>@john_mayer</NameLink>
        </BottomContainer>
      </CallCardContainer>
    </>
  );
};

export default CallCard;
