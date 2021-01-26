import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { colors } from "../../colors/colors";
import { fonts } from "../../fonts/fonts";

const { open_sans } = fonts;

const { white, grey } = colors;

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  font-family: ${open_sans};
  font-weight: 500;
  padding: 0rem 0rem 0rem 0rem;
  letter-spacing: 0.75px;
  margin: ${(props) =>
    props.article ? "0.75rem 1rem 0rem 0rem" : "0.5rem 1rem 0rem 0rem"};
  height: fit-content;
  width: fit-content;
  line-height: 100%;
  background: none;
  color: ${grey};

  &:hover {
    cursor: pointer;
  }
`;

export const IconContainer = styled.div`
  display: ${(props) => (props.active_category ? "flex" : "none")};
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
