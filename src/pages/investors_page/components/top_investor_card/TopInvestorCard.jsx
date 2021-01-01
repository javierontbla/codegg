import React from "react";

import Category from "../../../../components/category_component/Category";
import Rank from "../../../../components/rank_component/Rank";
import {
  TopInvestorContainer,
  TopContainer,
  RankContainer,
  ProfileImage,
  NameContainer,
  Name,
  NameLink,
  MiddleContainer,
  CategoriesContainer,
  BottomContainer,
  Subscribers,
} from "./TopInvestorCard_styles";

const TopInvestorCard = ({ data }) => {
  return (
    <>
      <TopInvestorContainer>
        <TopContainer>
          <ProfileImage profile_image_url={data.profile_image} />
          <NameContainer>
            <RankContainer>
              <Rank badge={data.rank} top={"true"} />
            </RankContainer>
            <Name>{data.user.toLowerCase()}</Name>
            <NameLink>@{data.username}</NameLink>
          </NameContainer>
        </TopContainer>
        <MiddleContainer>
          <CategoriesContainer>
            {data.categories.map((category) => {
              return <Category top={"true"} category={category} />;
            })}
          </CategoriesContainer>
        </MiddleContainer>
        <BottomContainer>
          <Subscribers>
            {data.subscribers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
            subscribers
          </Subscribers>
        </BottomContainer>
      </TopInvestorContainer>
    </>
  );
};

export default TopInvestorCard;
