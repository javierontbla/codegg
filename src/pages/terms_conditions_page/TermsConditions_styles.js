import styled from "styled-components";

import { colors } from "../../colors/colors";
import { fonts } from "../../fonts/fonts";

const { white } = colors;
const { montserrat } = fonts;

export const Container = styled.div`
  margin: 2rem 0rem 0rem 0rem;
  padding: 0rem 12.5rem 0rem 12.5rem !important;

  @media (max-width: 500px) {
    padding: 0rem 1rem 0rem 1rem !important;
  }
`;

export const Title = styled.div`
  color: ${white};
  font-size: 2.2rem;
  font-family: ${montserrat};
  margin: 0rem 0rem 1rem 0rem;
`;
