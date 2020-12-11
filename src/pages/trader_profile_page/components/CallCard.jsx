import React from "react";

import {
  CallCardContainer,
  BottomContainer,
  MiddleContainer,
  TopContainer,
  WarningsContainer,
  Name,
  Loss,
  ProfitNo1,
  ProfitNo2,
  Warning,
  UpTrend,
  DownTrend,
  TrendsContainer,
  Date,
  Count,
  TrendIcon,
  OrderContainer,
  Price,
} from "./CallCard_styles";
import up_button from "./media/up_button.svg";
import down_button from "./media/down_button.svg";

const CallCard = () => {
  return (
    <>
      <CallCardContainer>
        <TopContainer>
          <Name>GOOGL</Name>
        </TopContainer>
        <MiddleContainer>
          <OrderContainer>
            <Loss>Stop Loss:</Loss>
            <Price>$89.99</Price>
          </OrderContainer>
          <OrderContainer>
            <ProfitNo1>Take Profit #1:</ProfitNo1> <Price>$91.25</Price>
          </OrderContainer>
          <OrderContainer>
            <ProfitNo2>Take Profit #2:</ProfitNo2> <Price>$92.79</Price>
          </OrderContainer>
          <WarningsContainer>
            <Warning>BUY</Warning>
            <Warning risk={"true"}>2% RISK</Warning>
          </WarningsContainer>
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
          <Date>10/12/2020</Date>
        </BottomContainer>
      </CallCardContainer>
    </>
  );
};

export default CallCard;
