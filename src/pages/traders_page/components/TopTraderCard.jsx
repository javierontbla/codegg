import React from "react";

import Category from "../../../components/category_component/Category";
import Badge from "../../../components/badge_component/Badge";
import {
  TopTraderCardContainer,
  TopContainer,
  MiddleContainer,
  BottomContainer,
  ProfileImg,
  NameContainer,
  NameLink,
  CategoriesContainer,
  Subscribers,
  ViewButton,
  BadgesContainer,
  Name,
} from "./TopTraderCard_styles";

const TopTraderCard = () => {
  return (
    <>
      <TopTraderCardContainer>
        <TopContainer>
          <ProfileImg />
          <NameContainer>
            <BadgesContainer>
              {["quant", "united states", "english"].map((badge) => {
                return (
                  <Badge
                    badge={badge}
                    rank={badge === "quant" ? "true" : null}
                    top={"true"}
                  />
                );
              })}
            </BadgesContainer>
            <Name>Marco Rubio</Name>
            <NameLink>@marco_rubio</NameLink>
          </NameContainer>
        </TopContainer>
        <MiddleContainer>
          <CategoriesContainer>
            {["stocks", "futures", "crypto", "bitcoin"].map((category) => {
              return <Category top={"true"} category={category} />;
            })}
          </CategoriesContainer>
        </MiddleContainer>
        <BottomContainer>
          <Subscribers>123k subscribers</Subscribers>
          <ViewButton>View</ViewButton>
        </BottomContainer>
      </TopTraderCardContainer>
    </>
  );
};

export default TopTraderCard;
