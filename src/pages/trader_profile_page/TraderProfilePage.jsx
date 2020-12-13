import React from "react";

import ProfileCard from "./components/ProfileCard";
import CallCard from "./components/CallCard";
import {
  TraderProfilePageContainer,
  ProfileInformationContainer,
  ProfileCardContainer,
  ProfileReviewsContainer,
  TimelineContainer,
  CallsContainer,
  PostsContainer,
} from "./TraderProfilePage_styles";

const TraderProfilePage = () => {
  return (
    <>
      <TraderProfilePageContainer className="container">
        <ProfileInformationContainer>
          <ProfileCardContainer>
            <ProfileCard />
          </ProfileCardContainer>
          <ProfileReviewsContainer></ProfileReviewsContainer>
        </ProfileInformationContainer>
        <TimelineContainer>
          <CallsContainer>
            {[1, 2, 3, 4, 5].map((card) => {
              return <CallCard />;
            })}
          </CallsContainer>
          <PostsContainer></PostsContainer>
        </TimelineContainer>
      </TraderProfilePageContainer>
    </>
  );
};

export default TraderProfilePage;
