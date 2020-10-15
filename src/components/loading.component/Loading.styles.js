import styled, { keyframes } from "styled-components";

import { colors } from "../../colors/colors";

const { darkBlack } = colors;

const Circular = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

export const Container = styled.div`
  width: 7rem;
  height: 7rem;
  box-sizing: border-box;
  border-radius: 50%;
  border-top: 10px solid ${darkBlack};
  position: relative;
  animation: ${Circular} 2s linear infinite;
  margin: 0 auto;
  margin-top: 30vh;
  margin-bottom: 80vh;

  &::before,
  &::after {
    content: "";
    width: 7rem;
    height: 7rem;
    position: absolute;
    left: 0;
    top: -10px;
    box-sizing: border-box;
    border-radius: 50%;
  }

  &::before {
    border-top: 10px solid ${darkBlack};
    transform: rotate(120deg);
  }

  &::after {
    border-top: 10px solid ${darkBlack};
    transform: rotate(240deg);
  }
`;
