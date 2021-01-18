import styled, { css } from "styled-components";

import { colors } from "../../colors/colors";
import { fonts } from "../../fonts/fonts";

const { grey, black, white } = colors;
const { source_sans_pro, roboto, open_sans } = fonts;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0rem 0rem 0rem 0rem !important;
  height: 100vh;
  border: 1px solid orange;
`;
