import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { colors } from "../../colors/colors";
import { fonts } from "../../fonts/fonts";

const { button_font } = fonts;

const { white, black } = colors;

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
  border-radius: 0.25rem;
  font-family: ${button_font};
  letter-spacing: 0.5px;
  height: 1.8rem;
  color: ${black};
  border: none;
  background: rgb(221, 227, 232);
  background: linear-gradient(
    45deg,
    rgba(221, 227, 232, 1) 0%,
    rgba(220, 224, 227, 1) 100%
  );
  transition: opacity 0.15s;
  padding: 0rem 0.5rem 0rem 0.5rem;
  margin: 0.4rem 0.4rem 0.4rem 0.4rem;
  font-size: 0.8rem;
  font-weight: 600;

  &:hover {
    cursor: pointer;
    opacity: 0.95;
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
