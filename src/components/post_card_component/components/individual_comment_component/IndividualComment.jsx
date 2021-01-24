import React from "react";
import moment from "moment";

import {
  IndividualCommentContainer,
  TopContainer,
  ProfileImage,
  UserContainer,
  User,
  Date,
  CommentContainer,
  Comment,
  Trends,
  TrendIcon,
  Votes,
} from "./IndividualComment_styles";
import UpIcon from "../../media/up_button.svg";
import DownIcon from "../../media/down_button.svg";

const IndividualComment = ({ data }) => {
  return (
    <>
      <IndividualCommentContainer>
        <TopContainer>
          <ProfileImage profile_image_url={data.profile_image} />
          <UserContainer>
            <User>{data.user}</User>
            <Date>{moment(data.date.toDate()).startOf("hour").fromNow()}</Date>
          </UserContainer>
        </TopContainer>
        <CommentContainer>
          <Comment>{data.comment}</Comment>
          <Trends>
            <TrendIcon src={UpIcon} />
            <Votes>{data.up_trends - data.down_trends}</Votes>
            <TrendIcon src={DownIcon} />
          </Trends>
        </CommentContainer>
      </IndividualCommentContainer>
    </>
  );
};

export default IndividualComment;
