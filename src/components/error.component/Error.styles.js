import styled from "styled-components";

import { colors } from "../../colors/colors";

const { yellow, darkBlack, white, lightBlack } = colors;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20vh;
  color: ${yellow};
  font-family: "Reenie Beanie", cursive;
  font-size: 4.8rem;
  margin-top: 8vh;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

export const LoadAgain = styled.button`
  width: fit-content;
  border: 2px solid ${darkBlack};
  box-shadow: 0.4rem 0.4rem ${darkBlack};
  border-radius: 0.2rem;
  background: ${lightBlack};
  font-family: "Roboto", sans-serif;
  margin-top: 6vh;
  font-size: 1rem;
  letter-spacing: 0.5px;
  color: ${white};
  opacity: 0.9;
  padding: 0.4rem;
  padding-left: 0.6rem;
  padding-right: 0.6rem;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;
