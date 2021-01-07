import styled from "styled-components";

import { colors } from "../../colors/colors";
import { fonts } from "../../fonts/fonts";

const { white } = colors;
const { open_sans } = fonts;

export const ActionButtonContainer = styled.div`
  display: flex;
  align-items: center;
  line-height: 100%;
  height: ${(props) => (props.navbar ? "1.8rem" : "1.55rem")};
  width: fit-content;
  margin: 0rem 0rem 0rem 0rem;
  padding: 0rem 0.5rem 0rem 0.5rem;
  border-radius: 0.15rem;
  font-family: ${open_sans};
  font-size: ${(props) => (props.navbar ? "0.85rem" : "0.8rem")};
  font-weight: 500;
  letter-spacing: 0.5px;
  color: ${white};
  background: rgb(33, 33, 32);
  background: linear-gradient(
    90deg,
    rgba(33, 33, 32, 1) 5%,
    rgba(25, 25, 24, 1) 80%
  );

  &:hover {
    cursor: pointer;
    opacity: 0.95;
  }
`;
