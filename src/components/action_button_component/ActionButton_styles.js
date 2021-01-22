import styled from "styled-components";

import { colors } from "../../colors/colors";
import { fonts } from "../../fonts/fonts";

const { black, grey } = colors;
const { open_sans } = fonts;

export const ActionButtonContainer = styled.div`
  display: flex;
  align-items: center;
  line-height: 100%;
  height: ${(props) => (props.navbar ? "1.8rem" : "1.75rem")};
  width: fit-content;
  margin: 0rem 0rem 0rem 0rem;
  padding: 0rem 0.65rem 0rem 0.65rem;
  border-radius: 15px;
  font-family: ${open_sans};
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: ${black};
  background: ${grey};

  &:hover {
    cursor: pointer;
    opacity: 0.95;
  }
`;
