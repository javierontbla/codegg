import styled from "styled-components";

import { colors } from "../../colors/colors";

const { darkBlack, darkBlue, white, grey } = colors;

export const Title = styled.div`
  font-family: "Bebas Neue", cursive;
  font-size: 5.2rem;
  color: ${white};
  margin-top: 2vh;
  margin-bottom: 4vh;
  letter-spacing: 0.5px;
  text-align: center;
  width: 100%;
  text-transform: uppercase;
  line-height: 120%;

  @media (max-width: 768px) {
    font-size: 3.2rem;
    text-align: left;
    padding: 0.2rem;
  }
`;

export const Author = styled.div`
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

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const DateContainer = styled.div`
  font-family: "Roboto", sans-serif;
  text-decoration: underline;
  color: ${grey};
  font-size: 0.85rem;
  margin-bottom: 4vh;
  width: 100%;
  padding-left: 0.2rem;
`;

export const Subtitle = styled.div`
  font-family: "Bebas Neue", cursive;
  font-size: 2.6rem;
  color: ${white};
  letter-spacing: 0.5px;
  margin-top: 2vh;
  margin-bottom: 1vh;
  line-height: 120%;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Content = styled.div`
  color: ${white};
  letter-spacing: 0.5px;
  margin-bottom: 4vh;
  font-family: "Roboto", sans-serif;
  font-size: 1.5rem;
  line-height: 150%;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Bold = styled.strong`
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
