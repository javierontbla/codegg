import styled from "styled-components";

import { colors } from "../../../colors/colors";
import { fonts } from "../../../fonts/fonts";

const { orange, black, grey } = colors;
const { open_sans } = fonts;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
  padding: 1rem 1rem 1rem 1rem;
  margin: ${(props) =>
    props.post ? " 1rem 0rem 0rem 0rem" : " 0rem 0rem 1rem 0rem"};
  background: ${black};
  border-radius: 15px;
`;

export const Error = styled.span`
  font-family: ${open_sans};
  font-size: 0.85rem;
  color: ${grey};
  letter-spacing: 1px;
`;

export const CloseIcon = styled.img`
  width: 0.75rem;
  margin: 0rem 0rem 0rem 0rem;

  &:hover {
    cursor: pointer;
  }
`;
