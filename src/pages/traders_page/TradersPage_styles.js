import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { colors } from "../../colors/colors";
import { fonts } from "../../fonts/fonts";

const { dark_grey, grey, white } = colors;
const {} = fonts;

export const TradersPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 2rem 0rem 0rem 0rem;
  padding: 0rem 0rem 0rem 0rem;
  height: fit-content;
`;

export const TopTradersContainer = styled.div`
  border: 1px solid ${grey};
  height: 50rem;
  width: 25rem;
  background: ${white};
  border-radius: 0.15rem;
  box-shadow: 1px 1px 3px -1px #ced4da;
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
  width: 15rem;
  height: 3rem;
  padding: 0rem 0rem 0rem 0rem;
  margin: 0rem 0rem 0rem 0.5rem;
  border: 0.5px solid ${grey};
  border-radius: 2rem;
`;

export const SearchBar = styled.input`
  height: 100%;
  background: transparent;
  padding: 0rem 1rem 0rem 1rem;
  color: ${dark_grey};
  letter-spacing: 0.25px;
  border: none;

  &:focus {
    outline: none !important;
  }
`;

export const SearchIcon = styled(FontAwesomeIcon)`
  color: ${grey};
  font-size: 1rem;
`;
