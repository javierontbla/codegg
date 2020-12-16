import React, { useEffect } from "react";
import Masonry from "react-masonry-css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import TraderCard from "./components/TraderCard";
import TopTraderCard from "./components/TopTraderCard";
import {
  TradersPageContainer,
  TopTradersContainer,
  AllTradersContainer,
  SearchBarContainer,
  SearchBar,
  SearchIcon,
  LinkContainer,
  Title,
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
      <TopTradersContainer>
        <Title>Elite Users</Title>
        {[1, 2, 3, 4, 5].map((top_trader_card) => {
          return <TopTraderCard />;
        })}
      </TopTradersContainer>
      <AllTradersContainer>
        <SearchBarContainer>
          <SearchBar placeholder={"Search categories, users..."} />
          <SearchIcon icon={faSearch} />
        </SearchBarContainer>
        <Masonry
          breakpointCols={breakpoints}
          className="traders-grid"
          columnClassName="traders-grid-column"
        >
          {[1, 2, 3, 4, 5, 6].map((card) => {
            return (
              <LinkContainer to="/profile-page">
                <TraderCard />
              </LinkContainer>
            );
          })}
        </Masonry>
      </AllTradersContainer>
    </TradersPageContainer>
  );
};

export default TradersPage;
