import styled, { keyframes } from "styled-components";

import { colors } from "../../colors/colors";

const { darkBlack, yellow, darkBlue } = colors;

const Circular = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

export const Container = styled.div`
  width: 200px;
  height: 200px;
  box-sizing: border-box;
  border-radius: 50%;
  border-top: 10px solid ${darkBlack};
  position: relative;
  animation: ${Circular} 2s linear infinite;
  margin: 0 auto;
  margin-top: 10vh;
  margin-bottom: 100vh;

  &::before,
  &::after {
    content: "";
    width: 200px;
    height: 200px;
    position: absolute;
    left: 0;
    top: -10px;
    box-sizing: border-box;
    border-radius: 50%;
  }

  &::before {
    border-top: 10px solid ${yellow};
    transform: rotate(120deg);
  }

  &::after {
    border-top: 10px solid ${darkBlue};
    transform: rotate(240deg);
  }
`;
