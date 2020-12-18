import React from "react";

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

const Post = ({ no_image }) => {
  return (
    <>
      <PostContainer>
        <TopContainer>
          <ProfileImageContainer />
          <UserDataContainer>
            <NamesContainer>
              <Name>Tom Sprank</Name>
              <NameLink>@tom_sprank</NameLink>
            </NamesContainer>
            <Date>4 hours ago</Date>
          </UserDataContainer>
        </TopContainer>
        <MiddleContainer>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Description>
          <PostImageContainer no_image={no_image} />
        </MiddleContainer>
        <BottomContainer>
          <TrendsContainer>
            <TrendContainer>
              <TrendIcon src={UpIcon} />
            </TrendContainer>
            <CountContainer>74</CountContainer>
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
