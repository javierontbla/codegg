import styled from "styled-components";

import { colors } from "../../colors/colors";
import { fonts } from "../../fonts/fonts";

const { white, blue } = colors;
const { open_sans } = fonts;

export const ActionButtonContainer = styled.div`
  display: flex;
  align-items: center;
  line-height: 100%;
  height: ${(props) =>
    props.action === "Write a Review" || props.action === "Log In"
      ? "1.85rem"
      : "1.75rem"};
  width: fit-content;
  margin: 0rem 0rem 0rem 0rem;
  padding: ${(props) =>
    props.action === "Write a Review" || props.action === "Log In"
      ? "0rem 0.75rem 0rem 0.75rem"
      : "0rem 0.65rem 0rem 0.65rem"};
  border-radius: 20px;
  font-family: ${open_sans};
  font-size: ${(props) =>
    props.action === "Write a Review" || props.action === "Log In"
      ? "0.9rem"
      : "0.8rem"};
  font-weight: 500;
  letter-spacing: 0.5px;
  color: ${white};
  background: ${blue};

  &:hover {
    cursor: pointer;
  }
`;
