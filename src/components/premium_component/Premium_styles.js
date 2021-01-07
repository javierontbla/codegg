import styled from "styled-components";

import { colors } from "../../colors/colors";
import { fonts } from "../../fonts/fonts";

const { black, grey_2 } = colors;
const { roboto } = fonts;

export const PremiumContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-family: ${roboto};
  font-weight: 500;
  padding: 0.25rem 0.35rem 0.25rem 0.35rem;
  letter-spacing: 0.75px;
  margin: 0rem 0.25rem 0rem 0.25rem;
  height: fit-content;
  width: fit-content;
  border-radius: 0.15rem;
  line-height: 100%;
  background: ${grey_2};
  color: ${black};

  &:hover {
    cursor: auto;
  }
`;
