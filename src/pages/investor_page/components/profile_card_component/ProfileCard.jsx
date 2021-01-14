import React, { useEffect } from "react";

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

const ProfileCard = ({ data }) => {
  useEffect(() => {
    document.title = `Codegg - @${data.username}`;
  }, []);

  return (
    <>
      <ProfileCardContainer>
        <TopContainer>
          <CoverImage cover_image={data.cover_image} />
          <ProfileImage profile_image={data.profile_image} />
        </TopContainer>
        <MiddleContainer>
          <RankContainer>
            <Rank badge={data.rank} />
          </RankContainer>
          <User>{data.user}</User>
          <Username>@{data.username}</Username>
          <Description>{data.description}</Description>
          <CategoriesContainer>
            {data.categories.map((category) => {
              return <Category category={category} />;
            })}
          </CategoriesContainer>
        </MiddleContainer>
        <BottomContainer>
          <Subscribers>{data.subscribers} subscribers</Subscribers>
          <ActionButton action={"Subscribe"} />
        </BottomContainer>
      </ProfileCardContainer>
    </>
  );
};

export default ProfileCard;
