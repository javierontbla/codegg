import styled from "styled-components";

import { colors } from "../../colors/colors";

const { black, white } = colors;

export const Container = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 1.5vh;
`;

export const Time = styled.div`
  color: ${black};
  border-bottom: 2px solid ${black};
  margin-top: 3.5vh;
  padding: 0.4rem;
  font-family: "Abril Fatface", cursive;
  font-size: 1rem;
`;

export const LoadMore = styled.button`
  width: 10vw;
  border: 2px solid black;
  box-shadow: 0.4rem 0.4rem ${black};
  border-radius: 0.2rem;
  background: ${white};
  margin: 0 auto;
  font-family: "Roboto", sans-serif;
  margin-top: 2vh;
  margin-bottom: 7vh;
  font-size: 1rem;
  letter-spacing: 0.5px;

  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
