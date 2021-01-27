import styled from "styled-components";

import { colors } from "../../../colors/colors";

const { black } = colors;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LeftContainer = styled.div`
  width: 24.5rem !important;
  padding: 0rem 2rem 0rem 0rem;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 24.5rem);
`;

export const StatisticsContainer = styled.div`
  background: ${black};
  border-radius: 15px;
  height: 20rem;
`;
