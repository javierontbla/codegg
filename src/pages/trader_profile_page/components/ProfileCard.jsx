import React from "react";
import {
  faTwitter,
  faYoutube,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

import Category from "../../../components/category_component/Category";
import Badge from "../../../components/badge_component/Badge";
import {
  ProfileCardContainer,
  TopContainer,
  MiddleContainer,
  BottomContainer,
  CoverPhoto,
  ProfileImage,
  Name,
  NameLink,
  Description,
  CategoriesContainer,
  SubscribersContainer,
  SubscribeButton,
  BadgesContainer,
} from "./ProfileCard_styles";

const ProfileCard = () => {
  return (
    <>
      <ProfileCardContainer>
        <TopContainer>
          <CoverPhoto />
          <ProfileImage />
        </TopContainer>
        <MiddleContainer>
          <BadgesContainer>
            {["quant", "united states", "english"].map((badge) => {
              return (
                <Badge badge={badge} rank={badge === "quant" ? "true" : null} />
              );
            })}
          </BadgesContainer>
          <Name>John Mayer</Name>
          <NameLink>@john_mayer</NameLink>
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
          <SubscribersContainer>123,108 subscribers</SubscribersContainer>
          <SubscribeButton>Subscribe</SubscribeButton>
        </BottomContainer>
      </ProfileCardContainer>
    </>
  );
};

export default ProfileCard;
