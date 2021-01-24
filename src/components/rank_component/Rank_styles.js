import styled from "styled-components";

import { colors } from "../../colors/colors";
import { fonts } from "../../fonts/fonts";

const { orange } = colors;
const { open_sans } = fonts;

export const RankContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-family: ${open_sans};
  font-weight: 500;
  padding: 0rem 0rem 0rem 0rem;
  letter-spacing: 0.75px;
  margin: 0rem 0rem 0rem 0rem;
  height: fit-content;
  width: fit-content;
  line-height: 100%;
  color: ${orange};

  &:hover {
    cursor: pointer;
    opacity: 0.95;
  }
`;
