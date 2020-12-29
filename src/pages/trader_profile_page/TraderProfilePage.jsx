import React from "react";

import ProfileCard from "./components/ProfileCard";
import Opinions from "./components/Opinions";
import TradeCard from "../../components/trade_card_component/TradeCard";
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
              return <TradeCard />;
            })}
          </CallsContainer>
          <PostsContainer></PostsContainer>
        </TimelineContainer>
      </TraderProfilePageContainer>
    </>
  );
};

export default TraderProfilePage;
