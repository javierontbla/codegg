import styled from "styled-components";

import { colors } from "../../colors/colors";

const { darkGreen, white } = colors;

export const FooterContainer = styled.div`
  margin-bottom: 0;
  width: 100%;
  background: ${darkGreen};
  height: 30vh;
  opacity: 0.95;
  color: ${white};
  margin: 0 auto;
`;
