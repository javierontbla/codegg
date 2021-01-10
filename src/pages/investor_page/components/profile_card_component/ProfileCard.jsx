import React from "react";

import Category from "../../../../components/category_component/Category";
import Rank from "../../../../components/rank_component/Rank";
import ActionButton from "../../../../components/action_button_component/ActionButton";
import {
  ProfileCardContainer,
  TopContainer,
  CoverImage,
  ProfileImage,
  RankContainer,
  User,
  Username,
  MiddleContainer,
  Description,
  CategoriesContainer,
  BottomContainer,
  Subscribers,
} from "./ProfileCard_styles";

const ProfileCard = () => {
  return (
    <>
      <ProfileCardContainer>
        <TopContainer>
          <CoverImage />
          <ProfileImage />
        </TopContainer>
        <MiddleContainer>
          <RankContainer>
            {["rookie"].map((badge) => {
              return (
                <Rank badge={badge} rank={badge === "quant" ? "true" : null} />
              );
            })}
          </RankContainer>
          <User>John Mayer</User>
          <Username>@john_mayer</Username>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Description>
          <CategoriesContainer>
            {["stocks", "futures"].map((category) => {
              return <Category category={category} />;
            })}
          </CategoriesContainer>
        </MiddleContainer>
        <BottomContainer>
          <Subscribers>123,108 subscribers</Subscribers>
          <ActionButton action={"Subscribe"} />
        </BottomContainer>
      </ProfileCardContainer>
    </>
  );
};

export default ProfileCard;
