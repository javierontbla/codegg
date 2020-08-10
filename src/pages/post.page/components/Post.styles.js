import styled, { keyframes } from "styled-components";

import { colors } from "../../../colors/colors";

const { darkGreen, black } = colors;

const TextAnimation = keyframes`
  0% {
    margin-top: 16vh;
  }

  25% {
    margin-top: 12vh;
  }

  50% {
    margin-top: 8vh;
  }

  75% {
    margin-top: 4vh;
  }

  100% {
    margin-top: 0vh;
  }
`;

export const Container = styled.div`
  animation: ${TextAnimation} 1.1s linear;
`;

export const Title = styled.div`
  color: black;
  font-size: 4rem;
  text-transform: uppercase;
  font-family: "Abril Fatface", cursive;
  text-align: center;
  margin-top: 2vh;
  letter-spacing: 0.5px;
`;

export const AuthorContainer = styled.div`
  margin-top: 1vh;
  width: 100%;
  padding-left: 0.4rem;
  border-left: 0.5rem solid ${darkGreen};
  opacity: 0.9;
  letter-spacing: 0.5px;
  color: ${darkGreen};
  font-family: "Roboto", sans-serif;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding-left: 0.9rem;
  margin-top: 0.8vh;
  justify-content: flex-start;
  letter-spacing: 0.5px;
  opacity: 0.9;
  color: ${black};
  font-family: "Abril Fatface", cursive;
`;

export const Author = styled.div`
  font-size: 1.3rem;
`;
export const Date = styled.div`
  font-size: 1.1rem;
`;

export const ReadTime = styled.div`
  font-size: 1.1rem;
  margin-left: 1.6vw;
`;

export const Body = styled.div`
  background: transparent;
  padding: 1.7rem;
  font-family: "Roboto", sans-serif;
  font-size: 1.7rem;
  letter-spacing: 0.5px;
  text-align: justify;
  margin-top: 1vh;
  margin-bottom: 8vh;
`;
