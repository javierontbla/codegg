import React, { useEffect } from "react";
import Masonry from "react-masonry-css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import InvestorCard from "./components/investor_card/InvestorCard";
import TopInvestorCard from "./components/top_investor_card/TopInvestorCard";
import {
  TradersPageContainer,
  TopTradersContainer,
  AllTradersContainer,
  SearchBarContainer,
  SearchBar,
  SearchIcon,
  LinkContainer,
  Title,
} from "./InvestorsPage_styles";
import "./InvestorsPage.css";

const InvestorsPage = () => {
  useEffect(() => {
    document.title = `Codegg | Investors`;
  }, []);

  const breakpoints = {
    default: 2,
    1100: 2,
    500: 1,
  };

  return (
    <TradersPageContainer className="container">
      <TopTradersContainer>
        <Title>Top Investors</Title>
        {[1, 2, 3, 4, 5].map((top_trader_card) => {
          return <TopInvestorCard />;
        })}
      </TopTradersContainer>
      <AllTradersContainer>
        <SearchBarContainer>
          <SearchBar placeholder={"Search categories, investors..."} />
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
                <InvestorCard />
              </LinkContainer>
            );
          })}
        </Masonry>
      </AllTradersContainer>
    </TradersPageContainer>
  );
};

export default InvestorsPage;
