import styled from "styled-components";

import { colors } from "../../../colors/colors";
import { LoadingStyles } from "../loading_styles";

const { black } = colors;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LeftContainer = styled.div`
  ${LoadingStyles};
  height: 100vh;
  background: ${black};
  border-radius: 15px;
  width: calc(100% - 20rem);
  margin: 0rem 2rem 0rem 0rem;
`;

export const RightContainer = styled.div`
  ${LoadingStyles};
  height: 100vh;
  background: ${black};
  border-radius: 15px;
  width: 20rem;
`;
