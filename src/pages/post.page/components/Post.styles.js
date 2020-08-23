import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { colors } from "../../../colors/colors";

const { darkBlack, darkBlue, white, grey } = colors;

export const Container = styled.div`
  opacity: 0.9;
`;

export const Title = styled.div`
  color: ${white};
  font-size: 4.5rem;
  text-transform: uppercase;
  font-family: "Abril Fatface", cursive;
  text-align: center;
  margin-top: 4vh;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const AuthorContainer = styled.div`
  margin-top: 4vh;
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
  padding-left: 0.9rem;
  margin-top: 2vh;
  letter-spacing: 0.5px;
  color: ${white};
  font-family: "Abril Fatface", cursive;

  @media (max-width: 768px) {
    padding-left: 0.1rem;
  }
`;

export const Author = styled.div`
  font-size: 1.4rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Date = styled.div`
  color: ${grey};
  font-size: 0.8rem;
  font-family: "Roboto", sans-serif;
  letter-spacing: 0.5px;
  text-decoration: underline;
`;

export const ReadTime = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${white};
  font-size: 0.9rem;
  font-family: "Abril Fatface", cursive;
  letter-spacing: 0.5px;
  margin-top: 0.4rem;
`;

export const Body = styled.div`
  background: transparent;
  padding: 0.9rem;
  margin-top: 4vh;
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
