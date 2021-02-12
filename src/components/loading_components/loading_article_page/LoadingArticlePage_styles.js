import styled from "styled-components";

import { colors } from "../../../colors/colors";
import { LoadingStyles } from "../loading_styles";

const { black } = colors;

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 500px) {
    margin: -2rem 0rem 0rem 0rem;
  }
`;

export const LeftContainer = styled.div`
  ${LoadingStyles};
  height: 80vh;
  background: ${black};
  border-radius: 15px;
  width: calc(100% - 20rem);
  margin: 0rem 2rem 0rem 0rem;

  @media (max-width: 500px) {
    display: none;
  }
`;

export const RightContainer = styled.div`
  ${LoadingStyles};
  height: 80vh;
  background: ${black};
  border-radius: 15px;
  width: 20rem;

  @media (max-width: 500px) {
    width: 100%;
    border-radius: 0;
    height: 100vh;
  }
`;
