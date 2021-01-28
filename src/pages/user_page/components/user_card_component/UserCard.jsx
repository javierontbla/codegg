import React, { useEffect } from "react";

import Rank from "../../../../components/rank_component/Rank";
import ActionButton from "../../../../components/action_button_component/ActionButton";
import {
  Container,
  TopContainer,
  CoverImage,
  ProfileImage,
  RankContainer,
  User,
  Username,
  MiddleContainer,
  Description,
  BottomContainer,
  Subscribers,
} from "./UserCard_styles";

const UserCard = ({ data }) => {
  useEffect(() => {
    document.title = `Codegg - @${data.username}`;
  }, []);

  return (
    <>
      <Container>
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
        </MiddleContainer>
        <BottomContainer>
          <Subscribers>{data.subscribers} subscribers</Subscribers>
          <ActionButton action={"Subscribe"} />
        </BottomContainer>
      </Container>
    </>
  );
};

export default UserCard;
