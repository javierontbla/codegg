import styled from "styled-components";

import { colors } from "../../colors/colors";
import { fonts } from "../../fonts/fonts";

const { grey } = colors;
const { source_sans_pro } = fonts;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  width: 100%;
  height: 2.85rem;
  background: transparent;
  border-bottom: 0.5px solid ${grey};
  font-family: ${source_sans_pro};
  font-size: 1.6rem;
  letter-spacing: 1px;
  padding: 0.65rem 0rem 0.65rem 0rem;
  line-height: 100%;
  margin: 0rem 0rem 0.75rem 0rem;
  text-transform: uppercase;
`;
