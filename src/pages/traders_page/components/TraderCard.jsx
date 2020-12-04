import React from "react";

import Category from "../../../components/category_component/Category";
import {
  TraderCardContainer,
  TopContainer,
  MiddleContainer,
  BottomContainer,
  ImgContainer,
  NameContainer,
  NameLink,
  DescriptionContainer,
  Price,
  Rating,
  CategoriesContainer,
} from "./TraderCard_styles";

const TraderCard = () => {
  return (
    <>
      <TraderCardContainer>
        <TopContainer>
          <ImgContainer />
          <NameContainer>
            Marco Rubio <NameLink>@marco_rubio</NameLink>
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
          <Rating>4.8 (14)</Rating>
          <Price>$6.99</Price>
        </BottomContainer>
      </TraderCardContainer>
    </>
  );
};

export default TraderCard;
