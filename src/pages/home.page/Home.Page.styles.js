import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { colors } from "../../colors/colors";

const { white, lightBlack, darkBlack, react, javascript, redux, node } = colors;

export const Container = styled.div``;

export const Time = styled.div`
  color: ${white};
  border-bottom: 2px solid ${darkBlack};
  margin-top: 3.5vh;
  padding: 0.4rem;
  font-family: "Abril Fatface", cursive;
  font-size: 1rem;
  opacity: 0.9;
  letter-spacing: 0.5px;
`;

export const LoadMore = styled.button`
  width: 10vw;
  border: 2px solid ${darkBlack};
  box-shadow: 0.4rem 0.4rem ${darkBlack};
  border-radius: 0.2rem;
  background: ${lightBlack};
  margin: 0 auto;
  font-family: "Roboto", sans-serif;
  margin-top: 2rem;
  margin-bottom: 4rem;
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
    margin-top: 1rem;
    margin-bottom: 2rem;
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
  font-size: 1.2rem;

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
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
  margin-top: 1rem;
  padding-right: 1.2rem;
`;

export const Icon = styled(FontAwesomeIcon)`
  color: ${white};
  font-size: ${(props) => (props.cross ? "1rem" : "1.5rem")};
  opacity: ${(props) => (props.cross ? "0.4" : "0.3")};

  &:hover {
    cursor: pointer;
    opacity: ${(props) => (props.cross ? "0.3" : "0.2")};
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-left: 0.4rem;
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  height: 5vh;
  margin-top: 0.7rem;
`;
export const Tag = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
  background: ${(props) =>
    props.type === "react"
      ? `${react}`
      : props.type === "redux"
      ? `${redux}`
      : props.type === "javascript"
      ? `${javascript}`
      : `${node}`};
  color: ${white};
  border-radius: 0.2rem;
  padding: 0.4rem;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  letter-spacing: 1px;
  margin-left: 0.4rem;
  height: fit-content;

  &:first-child {
    margin-left: 0;
  }
`;
