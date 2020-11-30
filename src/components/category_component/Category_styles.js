import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { colors } from "../../colors/colors";
import { fonts } from "../../fonts/fonts";

const { button_font } = fonts;

const { white } = colors;

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
  border-radius: 1rem;
  font-family: ${button_font};
  letter-spacing: 1px;
  height: 2rem;
  color: ${white};
  border: none;
  background: rgb(67, 170, 139);
  background: linear-gradient(
    45deg,
    rgba(67, 170, 139, 1) 0%,
    rgba(55, 139, 136, 1) 100%
  );
  transition: opacity 0.15s;
  padding: 0rem 0.65rem 0rem 0.65rem;
  margin: 0rem 0.5rem 0rem 0.5rem;
  font-size: 0.9rem;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

export const IconContainer = styled.div`
  display: ${(props) => (props.filter ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0rem 0rem 0rem 0.35rem;

  &:hover {
    cursor: pointer;
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  color: ${white};
  font-size: 0.8rem;
`;
