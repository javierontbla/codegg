import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import { colors } from "../../colors/colors";
import { fonts } from "../../fonts/fonts";

const { dark_grey, grey } = colors;
const { search_bar_font } = fonts;

export const TradersPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 2rem 0rem 0rem 0rem;
  padding: 0rem 0rem 0rem 0rem;
  height: fit-content;
`;

export const TopTradersContainer = styled.div`
  border: none;
  height: fit-content;
  width: 25rem;
  background: transparent;
  padding: 0rem 0.5rem 0rem 0.5rem;
  margin: -0.5rem 0rem 0rem 0rem;
`;

export const AllTradersContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 0rem 0.5rem 0rem 0.5rem;
  margin: 0rem 0rem 0rem 1rem;
`;

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 18rem;
  height: 3rem;
  padding: 0rem 1rem 0rem 0rem;
  margin: 0rem 0rem 0rem 0.5rem;
  border: 0.5px solid ${grey};
  border-radius: 2rem;
`;

export const SearchBar = styled.input`
  height: 100%;
  width: 100%;
  background: transparent;
  padding: 0rem 1rem 0rem 1rem;
  color: ${dark_grey};
  letter-spacing: 0.25px;
  border: none;
  font-family: ${search_bar_font};

  &:focus {
    outline: none !important;
  }
`;

export const SearchIcon = styled(FontAwesomeIcon)`
  color: ${grey};
  font-size: 1rem;
  opacity: 0.9;
`;

export const LinkContainer = styled(Link)`
  width: 100% !important;
  &:hover {
    text-decoration: none;
  }
`;
