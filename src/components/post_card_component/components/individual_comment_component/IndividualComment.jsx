import React from "react";
import moment from "moment";

import {
  IndividualCommentContainer,
  TopContainer,
  ProfileImage,
  UserDataContainer,
  UserName,
  Date,
  MiddleContainer,
  CommentText,
  BottomContainer,
  TrendsContainer,
  UpTrend,
  VotesCount,
  DownTrend,
} from "./IndividualComment_styles";
import UpIcon from "../../media/up_button.svg";
import DownIcon from "../../media/down_button.svg";

const IndividualComment = ({ data }) => {
  return (
    <>
      <IndividualCommentContainer>
        <TopContainer>
          <ProfileImage profile_image_url={data.profile_image} />
          <UserDataContainer>
            <UserName>{data.user}</UserName>
            <Date>{moment(data.date.toDate()).startOf("hour").fromNow()}</Date>
          </UserDataContainer>
        </TopContainer>
        <MiddleContainer>
          <CommentText>{data.comment}</CommentText>
        </MiddleContainer>
        <BottomContainer>
          <TrendsContainer>
            <UpTrend src={UpIcon} />
            <VotesCount>{data.up_trends - data.down_trends}</VotesCount>
            <DownTrend src={DownIcon} />
          </TrendsContainer>
        </BottomContainer>
      </IndividualCommentContainer>
    </>
  );
};

export default IndividualComment;
