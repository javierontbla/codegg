import React from "react";
import moment from "moment";

import {
  CallCardContainer,
  TopContainer,
  Title,
  InformationContainer,
  Action,
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

const CallCard = ({ home_page, data }) => {
  moment.locale("en");
  return (
    <>
      <CallCardContainer home_page={home_page}>
        <TopContainer>
          <Title>{data.symbol.toUpperCase()}</Title>
          <InformationContainer>
            <Action action={data.action.toLowerCase()}>
              {data.action.toUpperCase()}
            </Action>
            <Date>{moment(data.date.toDate()).format("LL")}</Date>
          </InformationContainer>
        </TopContainer>
        <MiddleContainer>
          <OrderContainer>
            <LeftText>Company:</LeftText>
            <RightText>{data.company}</RightText>
          </OrderContainer>
          <OrderContainer>
            <LeftText>No. of Shares:</LeftText>
            <RightText>{data.no_of_shares}</RightText>
          </OrderContainer>
          <OrderContainer>
            <LeftText>Price:</LeftText>
            <RightText>
              ${data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </RightText>
          </OrderContainer>
          <CommentContainer>"{data.comment.toLowerCase()}"</CommentContainer>
        </MiddleContainer>
        <BottomContainer>
          <TrendsContainer>
            <UpTrend>
              <TrendIcon src={up_button} />
            </UpTrend>
            <Count>{data.votes}</Count>
            <DownTrend>
              <TrendIcon src={down_button} />
            </DownTrend>
          </TrendsContainer>
          <NameLink>@{data.username}</NameLink>
        </BottomContainer>
      </CallCardContainer>
    </>
  );
};

export default CallCard;
