import styled from "styled-components";

import { colors } from "../../colors/colors";
import { fonts } from "../../fonts/fonts";

const { black } = colors;
const { roboto } = fonts;

export const BadgeContainer = styled.div`
  text-transform: capitalize;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 0.565rem;
  font-family: ${roboto};
  font-weight: 500;
  padding: 0.25rem 0.35rem 0.25rem 0.35rem;
  letter-spacing: 0.5px;
  margin: 0rem 0.25rem 0rem 0.25rem;
  height: fit-content;
  width: fit-content;
  border-radius: 0.15rem;
  line-height: 100%;
  background: transparent;
  color: ${black};
  border: 0.25px solid ${black};
  background: transparent;

  &:hover {
    cursor: pointer;
    opacity: 0.95;
  }
`;
