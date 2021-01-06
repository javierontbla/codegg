import styled from "styled-components";

import { colors } from "../../colors/colors";
import { fonts } from "../../fonts/fonts";

const { black } = colors;
const { roboto } = fonts;

export const PremiumContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 0.6rem;
  font-family: ${roboto};
  font-weight: 500;
  padding: 0.15rem 0.25rem 0.15rem 0.25rem;
  letter-spacing: 0.5px;
  height: fit-content;
  width: fit-content;
  border-radius: 0.15rem;
  line-height: 100%;
  background: transparent;
  color: ${black};
  border: 0.25px solid ${black};
  height: 1.4rem;
  box-shadow: -3px 4px 0px 1px ${black};
`;
