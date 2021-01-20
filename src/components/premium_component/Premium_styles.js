import styled from "styled-components";

import { colors } from "../../colors/colors";
import { fonts } from "../../fonts/fonts";

const { black, grey } = colors;
const { roboto } = fonts;

export const PremiumContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-family: ${roboto};
  font-weight: 500;
  padding: 0.45rem 0.5rem 0.35rem 0.5rem;
  letter-spacing: 0.75px;
  margin: 0rem 0.25rem 0rem 0.25rem;
  height: fit-content;
  width: fit-content;
  border-radius: 30px;
  line-height: 100%;
  background: ${grey};
  color: ${black};

  &:hover {
    cursor: auto;
  }
`;
