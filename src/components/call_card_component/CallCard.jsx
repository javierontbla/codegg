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
          <Title>AMZN</Title>
          <InformationContainer>
            <Action action={"buy"}>BUY</Action>
            <Risk>2% RISK</Risk>
            <Date>November 13, 2020 12:12 PM</Date>
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
          <OrderContainer last_child={"true"}>
            <Subtitle>Take Profit No.2:</Subtitle>
            <Price>$92.45</Price>
          </OrderContainer>
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
