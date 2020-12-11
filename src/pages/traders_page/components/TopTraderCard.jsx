import React from "react";

import {
  TopTraderCardContainer,
  TopContainer,
  MiddleContainer,
  BottomContainer,
  ImgContainer,
  NameContainer,
  NameLink,
  CategoriesContainer,
  Category,
  Rating,
  Price,
  BadgesContainer,
  Badge,
  Name,
  AllRatings,
} from "./TopTraderCard_styles";

const TopTraderCard = () => {
  return (
    <>
      <TopTraderCardContainer>
        <TopContainer>
          <ImgContainer />
          <NameContainer>
            <BadgesContainer>
              <Badge>Rookie</Badge>
              <Badge country={"true"}>India</Badge>
              <Badge language={"true"}>English</Badge>
            </BadgesContainer>
            <Name>Marco Rubio</Name>
            <NameLink>@marco_rubio</NameLink>
          </NameContainer>
        </TopContainer>
        <MiddleContainer>
          <CategoriesContainer>
            {["stocks", "futures", "crypto", "bitcoin"].map((category) => {
              return <Category>#{category}</Category>;
            })}
          </CategoriesContainer>
        </MiddleContainer>
        <BottomContainer>
          <Rating>
            4.8<AllRatings>(14)</AllRatings>
          </Rating>
          <Price>$8.99</Price>
        </BottomContainer>
      </TopTraderCardContainer>
    </>
  );
};

export default TopTraderCard;
