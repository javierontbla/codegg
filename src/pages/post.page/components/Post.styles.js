import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SyntaxHighlighter from "react-syntax-highlighter";

import { colors } from "../../../colors/colors";

const { darkBlack, darkBlue, white, grey } = colors;

export const Container = styled.div``;

export const Title = styled.div`
  color: ${white};
  font-size: 4rem;
  text-transform: uppercase;
  font-family: "Abril Fatface", cursive;
  text-align: center;
  margin-top: 2vh;
  letter-spacing: 0.5px;
  opacity: 0.9;
`;

export const AuthorContainer = styled.div`
  margin-top: 2vh;
  width: fit-content;
  border: 2px solid ${darkBlack};
  border-radius: 0.2rem;
  padding: 0.4rem;
  box-shadow: 0.4rem 0.4rem ${darkBlack};
  opacity: 0.9;
  letter-spacing: 0.5px;
  color: ${darkBlue};
  font-family: "Abril Fatface", cursive;
  text-transform: uppercase;
  margin-left: 0.9rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding-left: 0.9rem;
  margin-top: 2vh;
  letter-spacing: 0.5px;
  opacity: 0.9;
  color: ${white};
  font-family: "Abril Fatface", cursive;
`;

export const Author = styled.div`
  font-size: 1.3rem;
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
  font-family: "Roboto", sans-serif;
  font-size: 1.7rem;
  letter-spacing: 0.5px;
  text-align: justify;
  margin-top: 1vh;
  margin-bottom: 8vh;
  color: ${white};
`;

export const Icon = styled(FontAwesomeIcon)`
  margin-right: 0.4rem;
  font-size: 0.75rem;
  color: ${white};
  opacity: 0.9;
`;
