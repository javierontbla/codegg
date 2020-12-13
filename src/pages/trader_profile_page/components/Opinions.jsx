import React from "react";

import {
  OpinionsContainer,
  Rating,
  AllRatings,
  Price,
} from "./Opinions_styles";

const Opinions = () => {
  return (
    <>
      <OpinionsContainer>
        <Rating>
          4.8
          <AllRatings>(14)</AllRatings>
        </Rating>

        <Price>$7.89</Price>
      </OpinionsContainer>
    </>
  );
};

export default Opinions;
