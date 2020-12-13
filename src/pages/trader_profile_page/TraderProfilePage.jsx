import React from "react";

import ProfileCard from "./components/ProfileCard";
import Opinions from "./components/Opinions";
import CallCard from "../../components/call_card_component/CallCard";
import {
  TraderProfilePageContainer,
  ProfileInformationContainer,
  ProfileCardContainer,
  ProfileOpinionsContainer,
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
          <ProfileOpinionsContainer>
            <Opinions />
          </ProfileOpinionsContainer>
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
