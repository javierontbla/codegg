import styled, { css } from "styled-components";

import { colors } from "../../colors/colors";
import { fonts } from "../../fonts/fonts";

const { white } = colors;
const { open_sans } = fonts;

const ButtonStyles = css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  line-height: 100%;
  height: 1.55rem;
  width: 5.35rem;
  background: rgb(33, 33, 32);
  background: linear-gradient(
    90deg,
    rgba(33, 33, 32, 1) 5%,
    rgba(25, 25, 24, 1) 80%
  );
  padding: 0rem 0.5rem 0rem 0.5rem;
  border-radius: 0.15rem;
  font-family: ${open_sans};
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: ${white};
`;

export const PublishButtonContainer = styled.div`
  ${ButtonStyles};
  position: relative;

  border-bottom-left-radius: ${(props) =>
    props.display_drop_down ? "0rem" : ""};
  border-bottom-right-radius: ${(props) =>
    props.display_drop_down ? "0rem" : ""};
  border-bottom: ${(props) =>
    props.display_drop_down ? "0.5px solid white" : "none"};

  &:hover {
    cursor: pointer;
  }
`;

export const Publish = styled.div`
  width: 100%;
  margin: 0rem 0.35rem 0rem 0rem;
`;

export const DropDownContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  width: fit-content;
`;

export const DropDownImage = styled.img`
  width: 0.6rem;
  height: 0.45rem;
  margin: 0.1rem 0rem 0rem 0rem;
`;

export const DropDownMenu = styled.div`
  ${ButtonStyles};
  position: absolute;
  bottom: 0;
  left: 0;
  top: 100%;
  display: ${(props) => (props.display_drop_down ? "flex" : "none")};
  width: 100%;
  margin: 0rem 0rem 0rem 0rem;
  z-index: 1;
  border-top-left-radius: ${(props) => (props.display_drop_down ? "0rem" : "")};
  border-top-right-radius: ${(props) =>
    props.display_drop_down ? "0rem" : ""};
  border-top: 0.5px solid ${white};
`;
