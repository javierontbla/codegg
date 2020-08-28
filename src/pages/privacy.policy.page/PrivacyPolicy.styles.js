import styled from "styled-components";

import { colors } from "../../colors/colors";

const { darkBlack, darkBlue, white, grey } = colors;

export const Title = styled.div`
  font-family: "Abril Fatface", cursive;
  font-size: 4.2rem;
  color: ${white};
  margin-top: 4vh;
  letter-spacing: 0.5px;
  text-align: left;
  width: 100%;
`;

export const Author = styled.div`
  margin-top: 4vh;
  margin-bottom: 2vh;
  width: fit-content;
  border: 2px solid ${darkBlack};
  border-radius: 0.2rem;
  padding: 0.4rem;
  box-shadow: 0.4rem 0.4rem ${darkBlack};
  letter-spacing: 0.5px;
  color: ${darkBlue};
  font-family: "Abril Fatface", cursive;
  text-transform: uppercase;
  font-size: 1.4rem;
  margin-left: 0.8rem;

  @media (max-width: 768px) {
  }
`;

export const DateContainer = styled.div`
  font-family: "Roboto", sans-serif;
  text-decoration: underline;
  color: ${grey};
  font-size: 1rem;
  padding: 0.8rem;
  margin-bottom: 2vh;
  width: 100%;
`;

export const Subtitle = styled.div`
  font-family: "Abril Fatface", cursive;
  font-size: 2.2rem;
  color: ${white};
  letter-spacing: 0.5px;
  margin-bottom: 0.5vh;
  margin-top: 2vh;
`;

export const Content = styled.div`
  color: ${white};
  letter-spacing: 0.5px;
  margin-bottom: 4vh;
  padding: 0.4rem;
  font-family: "Roboto", sans-serif;
  font-size: 1.6rem;
`;

export const Bold = styled.strong`
  font-size: 1.4rem;
`;
