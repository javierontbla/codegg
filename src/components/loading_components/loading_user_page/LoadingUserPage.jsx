import React from "react";

import {
  Container,
  LeftContainer,
  ProfileCard,
  RightContainer,
  TopContainer,
  BottomContainer,
  PostsContainer,
  ArticlesContainer,
} from "./LoadingUserPage_styles";

const LoadingUserPage = () => {
  return (
    <>
      <Container>
        <LeftContainer>
          <ProfileCard />
        </LeftContainer>
        <RightContainer>
          <TopContainer />
          <BottomContainer>
            <PostsContainer />
            <ArticlesContainer />
          </BottomContainer>
        </RightContainer>
      </Container>
    </>
  );
};

export default LoadingUserPage;
