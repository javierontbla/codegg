import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { colors } from "../../colors/colors";

const { white, lightBlack, darkBlack } = colors;

export const Container = styled.div``;

export const Time = styled.div`
  color: ${white};
  border-bottom: 2px solid ${darkBlack};
  margin-top: 3.5vh;
  padding: 0.4rem;
  font-family: "Abril Fatface", cursive;
  font-size: 1rem;
  opacity: 0.9;
`;

export const LoadMore = styled.button`
  width: 10vw;
  border: 2px solid ${darkBlack};
  box-shadow: 0.4rem 0.4rem ${darkBlack};
  border-radius: 0.2rem;
  background: ${lightBlack};
  margin: 0 auto;
  font-family: "Roboto", sans-serif;
  margin-top: 2.5vh;
  margin-bottom: 7vh;
  font-size: 1rem;
  letter-spacing: 0.5px;
  color: ${white};
  opacity: 0.9;
  padding: 0.4rem;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    width: 32vw;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

// search box
export const SearchBox = styled.input`
  background: transparent;
  border: none;
  padding: 0.4rem;
  width: 95%;
  height: 100%;
  padding-left: 0.8rem;
  opacity: 0.9;
  color: ${white};

  &:focus {
    outline: none;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${lightBlack};
  border: 2px solid ${darkBlack};
  border-radius: 0.2rem;
  width: 100%;
  height: 6.5vh;
  margin-top: 0.5rem;
  padding-right: 1.2rem;
`;

export const Icon = styled(FontAwesomeIcon)`
  color: ${white};
  font-size: 1.5rem;
  opacity: 0.3;

  &:hover {
    cursor: pointer;
    opacity: 0.2;
  }
`;
