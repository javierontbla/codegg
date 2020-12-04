import React, { useEffect } from "react";
import Masonry from "react-masonry-css";

import TraderCard from "./components/TraderCard";
import {
  TradersPageContainer,
  TopTradersContainer,
  AllTradersContainer,
} from "./TradersPage_styles";
import "./TradersPage.css";

const TradersPage = () => {
  useEffect(() => {}, []);

  const breakpoints = {
    default: 2,
    1100: 2,
    500: 1,
  };

  return (
    <TradersPageContainer className="container">
      <TopTradersContainer></TopTradersContainer>
      <AllTradersContainer>
        <Masonry
          breakpointCols={breakpoints}
          className="traders-grid"
          columnClassName="traders-grid-column"
        >
          {[1, 2, 3, 4, 5, 6].map((card) => {
            return <TraderCard />;
          })}
        </Masonry>
      </AllTradersContainer>
    </TradersPageContainer>
  );
};

export default TradersPage;
