import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { colors } from "../../../colors/colors";

const { darkBlack, darkBlue, white, grey } = colors;

export const Container = styled.div``;

export const Title = styled.div`
  color: ${white};
  font-size: 4rem;
  font-family: "Abril Fatface", cursive;
  text-align: center;
  margin-top: 2vh;
  letter-spacing: 0.5px;
  margin-bottom: 4vh;
  opacity: 0.95;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const AuthorContainer = styled.div`
  width: fit-content;
  border: 2px solid ${darkBlack};
  border-radius: 0.2rem;
  padding: 0.4rem;
  box-shadow: 0.4rem 0.4rem ${darkBlack};
  letter-spacing: 0.5px;
  color: ${darkBlue};
  font-family: "Abril Fatface", cursive;
  text-transform: uppercase;
  margin-left: 0.9rem;

  @media (max-width: 768px) {
    margin-left: 0.1rem;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding-left: 1rem;
  margin-bottom: 4vh;
  letter-spacing: 0.5px;
  color: ${white};
  font-family: "Abril Fatface", cursive;

  @media (max-width: 768px) {
    padding-left: 0.25rem;
  }
`;

export const Author = styled.div`
  font-size: 1.4rem;
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const Date = styled.div`
  color: ${grey};
  font-size: 0.85rem;
  font-family: "Roboto", sans-serif;
  letter-spacing: 0.5px;
  text-decoration: underline;
`;

export const ReadTime = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${grey};
  font-size: 0.95rem;
  font-family: "Abril Fatface", cursive;
  letter-spacing: 0.5px;
  margin-top: 0.4rem;
`;

export const Body = styled.div`
  background: transparent;
  padding: 0.9rem;
  margin-bottom: 2vh;

  @media (max-width: 768px) {
    padding: 0.1rem;
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  margin-right: 0.4rem;
  font-size: 0.75rem;
  color: ${white};
`;

export const Test = styled.a`
  color: green;
  background: white;
`;
