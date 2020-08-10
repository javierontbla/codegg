import styled from "styled-components";

import { colors } from "../../colors/colors";

const { darkGreen, white } = colors;

export const FooterContainer = styled.footer`
  position: fixed;
  width: 100%;
  background: ${darkGreen};
  opacity: 0.9;
  color: ${white};
  margin: 0 auto;
`;
