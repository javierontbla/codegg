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
  Subtitle,
  OrderContainer,
  Price,
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

const CallCard = () => {
  return (
    <>
      <CallCardContainer>
        <TopContainer>
          <Title>GOOGL</Title>
          <InformationContainer>
            <Action>BUY</Action>
            <Risk>2% RISK</Risk>
            <Date>December 11, 2020 1:30 PM</Date>
          </InformationContainer>
        </TopContainer>
        <MiddleContainer>
          <OrderContainer>
            <Subtitle>Stop Loss:</Subtitle>
            <Price>$89.23</Price>
          </OrderContainer>
          <OrderContainer>
            <Subtitle>Take Profit No.1:</Subtitle>
            <Price>$91.16</Price>
          </OrderContainer>
          <OrderContainer>
            <Subtitle>Take Profit No.2:</Subtitle>
            <Price>$92.45</Price>
          </OrderContainer>
        </MiddleContainer>
        <BottomContainer>
          <TrendsContainer>
            <UpTrend>
              <Count up={"true"}>104</Count>
              <TrendIcon src={up_button} />
            </UpTrend>
            <DownTrend>
              <TrendIcon src={down_button} />
              <Count>13</Count>
            </DownTrend>
          </TrendsContainer>
          <NameLink>@john_mayer</NameLink>
        </BottomContainer>
      </CallCardContainer>
    </>
  );
};

export default CallCard;
