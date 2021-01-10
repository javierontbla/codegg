import React, { useEffect } from "react";
import Masonry from "react-masonry-css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

import InvestorCard from "../investor_card/InvestorCard";
import TopInvestorCard from "../top_investor_card/TopInvestorCard";
import { request_top_investors_start_action } from "../../../../redux/investors_page/actions";
import {
  TradersPageContainer,
  TopTradersContainer,
  AllTradersContainer,
  SearchBarContainer,
  SearchBar,
  SearchIcon,
  LinkContainer,
  Title,
} from "./InvestorsCollection_styles";
import "./InvestorsCollection.css";

const InvestorsPage = ({ top_investors, request_top_investors }) => {
  useEffect(() => {
    document.title = `Codegg - Explore New Investors`;
    request_top_investors();
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
        {top_investors.map((top_investor) => {
          return (
            <TopInvestorCard data={top_investor[0]} id={top_investor[1]} />
          );
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

// redux
const mapStateToProps = ({ investors_page_reducer: { top_investors } }) => ({
  top_investors,
});

const mapDispatchToProps = (dispatch) => ({
  request_top_investors: () => dispatch(request_top_investors_start_action()),
});

export default connect(mapStateToProps, mapDispatchToProps)(InvestorsPage);
