import styled, { keyframes } from "styled-components";

import { colors } from "../../colors/colors";

const { grey_2, white } = colors;

const Spinner = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  display: inline-block;
  width: 15px;
  height: 15px;
  border: 0.5px solid ${grey_2};
  border-radius: 50%;
  border-top-color: ${white};
  animation: ${Spinner} 1s ease-in-out infinite;
  -webkit-animation: ${Spinner} 1s ease-in-out infinite;
  margin: 0rem 0.5rem 0rem 0.5rem;
`;
