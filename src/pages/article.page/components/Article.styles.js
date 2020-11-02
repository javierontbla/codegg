import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import { colors } from "../../../colors/colors";

const { darkBlack, yellow, white, grey } = colors;

export const Container = styled.div`
  margin-bottom: 6rem;

  @media (max-width: 500px) {
    margin-bottom: 3rem;
    padding-left: 0.15rem;
    padding-right: 0.15rem;
  }
`;

export const Title = styled.div`
  color: ${white};
  font-size: 3.5rem;
  font-family: "Space Mono", monospace;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 6rem;
  opacity: 0.95;
  text-transform: normal;
  padding: 1rem;
  height: fit-content;
  line-height: 150%;
  width: 65%;
  letter-spacing: 0.5px;

  @media (max-width: 500px) {
    padding: 0.4rem;
    text-align: left;
    font-size: 2.2rem;
    width: 100%;
    margin-bottom: 3rem;
    margin-top: 1.5rem;
  }
`;

export const AuthorContainer = styled.div`
  width: fit-content;
  border: 2px solid ${darkBlack};
  border-radius: 0.2rem;
  padding-top: 0.4rem;
  padding-bottom: 0.6rem;
  padding-left: 0.6rem;
  padding-right: 0.6rem;
  box-shadow: 0.4rem 0.4rem ${darkBlack};
  letter-spacing: 0.5px;
  color: ${yellow};
  font-family: "Space Mono", monospace;
  margin-left: 0.9rem;
  margin-bottom: 0.9rem;

  @media (max-width: 500px) {
    margin-left: 0.1rem;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding-left: 1.1rem;
  letter-spacing: 0.5px;
  color: ${grey};
  margin-bottom: 1.6rem;

  @media (max-width: 500px) {
    padding-left: 0.4rem;
  }
`;

export const Author = styled.div`
  font-size: 1.45rem;
  letter-spacing: 0.5px;
  @media (max-width: 500px) {
    font-size: 1.4rem;
  }
`;

export const Date = styled.div`
  color: ${grey};
  font-size: 0.75rem;
  font-family: "Space Mono", monospace;
  letter-spacing: 0.5px;
`;

export const ReadTime = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${grey};
  font-size: 0.75rem;
  font-family: "Space Mono", monospace;
  letter-spacing: 0.5px;
`;

export const Body = styled.div`
  background: transparent;
  padding: 0.9rem;
  margin-top: 3rem;
  margin-bottom: 2vh;
  width: 50%;
  text-align: left;

  @media (max-width: 500px) {
    width: 100%;
    padding-left: 0.3rem;
    padding-right: 0.3rem;
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  margin-right: 0.65rem;
  margin-top: 0.25rem;
  font-size: 0.8rem;
  color: ${grey};
`;

export const Separator = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  padding-bottom: 0.2rem;
`;

export const QueryLink = styled(Link)`
  &&& {
    &::after {
      background-color: transparent;
      content: " ";
      height: 40%;
      position: absolute;
      left: 0;
      top: 65%;
      width: calc(100%);
      z-index: -1;
    }
  }

  &:hover {
    text-decoration: none;
  }
`;
