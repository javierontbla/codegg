import React from "react";
import moment from "moment";

import {
  BottomContainer,
  MiddleContainer,
  ProfileImageContainer,
  Date,
  Name,
  NameLink,
  NamesContainer,
  PostContainer,
  TopContainer,
  Description,
  PostImageContainer,
  TrendsContainer,
  TrendContainer,
  UserDataContainer,
  TrendIcon,
  CountContainer,
  CommentsContainer,
} from "./Post_styles";
import UpIcon from "./media/up_button.svg";
import DownIcon from "./media/down_button.svg";
import CommentsIcon from "./media/comments_button.svg";

const Post = ({ data }) => {
  moment.locale("es");
  return (
    <>
      <PostContainer>
        <TopContainer>
          <ProfileImageContainer profile_image_url={data.profile_image} />
          <UserDataContainer>
            <NamesContainer>
              <Name>{data.user.toLowerCase()}</Name>
              <NameLink>@{data.username}</NameLink>
            </NamesContainer>
            <Date>{moment(data.date.toDate()).startOf("hour").fromNow()}</Date>
          </UserDataContainer>
        </TopContainer>
        <MiddleContainer>
          <Description>{data.description}</Description>
          <PostImageContainer post_image_url={data.post_image} />
        </MiddleContainer>
        <BottomContainer>
          <TrendsContainer>
            <TrendContainer>
              <TrendIcon src={UpIcon} />
            </TrendContainer>
            <CountContainer>{data.votes}</CountContainer>
            <TrendContainer>
              <TrendIcon src={DownIcon} />
            </TrendContainer>
          </TrendsContainer>
          <CommentsContainer>
            <TrendIcon src={CommentsIcon} comment={"true"} />
          </CommentsContainer>
        </BottomContainer>
      </PostContainer>
    </>
  );
};

export default Post;
