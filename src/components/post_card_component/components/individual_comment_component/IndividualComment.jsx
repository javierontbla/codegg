import React from "react";
import moment from "moment";

import {
  IndividualCommentContainer,
  ProfileImageContainer,
  ProfileImage,
  UserContainer,
  User,
  Date,
  ContentContainer,
  Comment,
  TrendsContainer,
  TrendIcon,
  Votes,
} from "./IndividualComment_styles";
import UpIcon from "../../media/up_button.svg";
import DownIcon from "../../media/down_button.svg";

const IndividualComment = ({ data }) => {
  return (
    <>
      <IndividualCommentContainer>
        <ProfileImageContainer>
          <ProfileImage profile_image_url={data.profile_image} />
        </ProfileImageContainer>
        <ContentContainer>
          <UserContainer>
            <User>{data.user}</User>
            <Date>{moment(data.date.toDate()).startOf("hour").fromNow()}</Date>
          </UserContainer>
          <Comment>{data.comment}</Comment>
          <TrendsContainer>
            <TrendIcon src={UpIcon} />
            <Votes>{data.up_trends - data.down_trends}</Votes>
            <TrendIcon src={DownIcon} />
          </TrendsContainer>
        </ContentContainer>
      </IndividualCommentContainer>
    </>
  );
};

export default IndividualComment;
