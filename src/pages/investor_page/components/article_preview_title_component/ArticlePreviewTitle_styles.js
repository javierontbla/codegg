import styled from "styled-components";

import { colors } from "../../../../colors/colors";
import { fonts } from "../../../../fonts/fonts";

const { white, black, grey } = colors;
const { source_sans_pro } = fonts;

export const Container = styled.div`
  height: fit-content;
  width: 100%;
  background: ${white};
  color: ${black};
  font-family: ${source_sans_pro};
  font-size: 1.2rem;
  border-radius: 0.15rem;
  border: 1px solid ${grey};
  box-shadow: 0px 1.5px 1.5px -1px #ced4da;
`;
