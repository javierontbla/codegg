import React from "react";
import moment from "moment";

import {
  TradeCardContainer,
  TopContainer,
  Title,
  InformationContainer,
  Action,
  Date,
  Premium,
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
} from "./TradeCard_styles";
import up_button from "./media/up_button.svg";
import down_button from "./media/down_button.svg";

const TradeCard = ({ home_page, data }) => {
  moment.locale("en");
  return (
    <>
      <TradeCardContainer home_page={home_page}>
        <TopContainer>
          <Title>{data.symbol.toUpperCase()}</Title>
          <InformationContainer>
            <Action action={data.action.toLowerCase()}>
              {data.action.toLowerCase()}
            </Action>
            <Date>{moment(data.date.toDate()).format("LL")}</Date>
            <Premium>Premium</Premium>
          </InformationContainer>
        </TopContainer>
        <MiddleContainer>
          <OrderContainer>
            <LeftText>Company:</LeftText>
            <RightText>{data.company}</RightText>
          </OrderContainer>
          <OrderContainer>
            <LeftText>No. of Shares:</LeftText>
            <RightText>
              {data.number_of_shares
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </RightText>
          </OrderContainer>
          <OrderContainer>
            <LeftText>Price per Share:</LeftText>
            <RightText>
              $
              {data.price_per_share
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </RightText>
          </OrderContainer>
          <CommentContainer>"{data.comment.toLowerCase()}"</CommentContainer>
        </MiddleContainer>
        <BottomContainer>
          <TrendsContainer>
            <UpTrend>
              <TrendIcon src={up_button} />
            </UpTrend>
            <Count>{data.up_trends - data.down_trends}</Count>
            <DownTrend>
              <TrendIcon src={down_button} />
            </DownTrend>
          </TrendsContainer>
          <NameLink>@{data.username}</NameLink>
        </BottomContainer>
      </TradeCardContainer>
    </>
  );
};

export default TradeCard;
