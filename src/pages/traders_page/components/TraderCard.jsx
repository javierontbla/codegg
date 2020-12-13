import React from "react";

import Category from "../../../components/category_component/Category";
import Badge from "../../../components/badge_component/Badge";
import {
  TraderCardContainer,
  TopContainer,
  MiddleContainer,
  BottomContainer,
  ImgContainer,
  NameContainer,
  BadgesContainer,
  Name,
  NameLink,
  DescriptionContainer,
  ViewButton,
  Subscribers,
  CategoriesContainer,
} from "./TraderCard_styles";

const TraderCard = () => {
  return (
    <>
      <TraderCardContainer>
        <TopContainer>
          <ImgContainer />
          <NameContainer>
            <BadgesContainer>
              {["quant", "united states", "english"].map((badge) => {
                return (
                  <Badge
                    badge={badge}
                    rank={badge === "quant" ? "true" : null}
                  />
                );
              })}
            </BadgesContainer>
            <Name>Marco Rubio</Name>
            <NameLink>@marco_rubio</NameLink>
          </NameContainer>
        </TopContainer>
        <MiddleContainer>
          <DescriptionContainer>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </DescriptionContainer>
          <CategoriesContainer>
            {["forex", "stocks"].map((category) => {
              return <Category category={category} />;
            })}
          </CategoriesContainer>
        </MiddleContainer>
        <BottomContainer>
          <Subscribers>123k subscribers</Subscribers>
          <ViewButton>View</ViewButton>
        </BottomContainer>
      </TraderCardContainer>
    </>
  );
};

export default TraderCard;
