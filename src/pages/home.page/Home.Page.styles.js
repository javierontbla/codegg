import styled from "styled-components";

import { colors } from "../../colors/colors";

const { black } = colors;

export const Container = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
  margin-bottom: 10vh;
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
