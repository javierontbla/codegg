import styled, { css } from "styled-components";

import { colors } from "../../../colors/colors";
import { fonts } from "../../../fonts/fonts";

const { grey, grey_2, white, black } = colors;
const { roboto, open_sans } = fonts;

const ButtonStyles = css`
  align-items: center;
  justify-content: space-between;
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

  &:hover {
    cursor: pointer;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${grey};
  background: ${white};
  height: fit-content;
  width: 100%;
  margin: 0rem 0rem 0.5rem 0rem;
  border-radius: 0.5rem;
  box-shadow: 0px 1.5px 1.5px -1px #ced4da;
  line-height: 100%;
`;

export const SymbolInput = styled.input`
  width: 7.5rem;
  border: 0.5px solid ${grey};
  padding: 0.375rem 0.5rem 0.25rem 0.5rem;
  margin: 0rem 0rem 0rem 0rem;
  border-radius: 0.15rem;
  font-family: ${roboto};
  font-size: 1.1rem;
  height: 2.25rem;
  line-height: 100%;
  color: ${black};
  text-transform: uppercase;

  &&& {
    ::placeholder {
      font-size: 1.1rem;
    }
  }

  &:focus {
    outline: none !important;
  }
`;

export const ActionButtonContainer = styled.div`
  width: fit-content;
  height: fit-content;
  border-radius: 0.15rem;
  background: ${(props) =>
    props.active_dashboard ? "transparent" : "rgb(33, 33, 32)"};
  background: ${(props) =>
    props.active_dashboard
      ? "transparent"
      : "linear-gradient(90deg,rgba(33, 33, 32, 1) 5%,rgba(25, 25, 24, 1) 80%)"};
`;

export const CloseIcon = styled.img`
  width: 1rem;
  height: 1rem;
  margin: -0.1rem 0.3rem 0rem 0rem;

  &:hover {
    cursor: pointer;
    opacity: 0.95;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0rem 0rem 0rem 0rem;
  padding: ${(props) =>
    props.active_dashboard
      ? "0.6rem 0rem 0.6rem 0.55rem"
      : "0.6rem 0.55rem 0.6rem 0.55rem"};
  border-bottom: ${(props) =>
    props.active_dashboard ? `0.5px solid ${grey}` : "none"};
`;

export const PreviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${(props) =>
    props.active_dashboard ? "flex-start" : "flex-end"};
  justify-content: space-between;
`;

export const ActionContainer = styled.div`
  display: ${(props) => (props.active_dashboard ? "flex" : "none")};
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin: 0.6rem 0rem 0rem 0rem;
`;

export const ActionOverlay = styled.div`
  width: 3rem;
`;

export const Action = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-family: ${roboto};
  font-weight: 500;
  padding: 0.25rem 0.35rem 0.25rem 0.35rem;
  letter-spacing: 0.75px;
  margin: 0rem 0rem 0rem 0rem;
  height: fit-content;
  width: fit-content;
  border-radius: 0.15rem;
  line-height: 100%;
  background: ${grey_2};
  color: ${black};
  text-transform: uppercase;
  border: none;
`;

export const ActionChange = styled.div`
  &:hover {
    cursor: pointer;
    opacity: 0.95;
  }
`;

export const ChangeIcon = styled.img`
  width: 1.1rem;
  margin: 0rem 0rem 0rem 0rem;
`;

export const MiddleContainer = styled.div`
  display: ${(props) => (props.active_dashboard ? "flex" : "none")};
  flex-direction: column;
  width: 100%;
  margin: 0rem 0rem 0rem 0rem;
  padding: 0.75rem 0.55rem 0.75rem 0.55rem;
`;

export const OptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  margin: ${(props) =>
    props.first_container ? "0rem 0rem 0rem 0rem" : "0.35rem 0rem 0rem 0rem"};
  padding: 0rem 0rem 0rem 0rem;
  width: 100%;
  height: 1.85rem;
  line-height: 100%;
`;

export const LeftText = styled.div`
  font-size: 0.8rem;
  color: ${black};
  font-family: ${roboto};
  font-weight: 700;
`;

export const RightInput = styled.input`
  width: 6.5rem;
  border: 0.5px solid ${grey};
  border-radius: 0.15rem;
  height: 100%;
  padding: 0rem 0.275rem 0rem 0.275rem;
  font-size: 0.8rem;
  color: ${black};
  font-family: ${roboto};
  letter-spacing: 0.25px;

  &&& {
    ::placeholder {
      font-size: 0.8rem;
    }
  }

  &:focus {
    outline: none !important;
  }
`;

export const BottomContainer = styled.div`
  display: ${(props) => (props.active_dashboard ? "flex" : "none")};
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  border-top: 0.5px solid ${grey};
  padding: 0.6rem 0.55rem 0.6rem 0.55rem;
`;

export const PublishContainer = styled.div`
  ${ButtonStyles};
  display: flex;
  position: relative;
`;

export const DropDownIconContainer = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  height: 100%;

  &:hover {
    cursor: pointer;
  }
`;

export const DropDownIcon = styled.img`
  width: 0.5rem;
  margin: 0.1rem 0rem 0rem 0rem;
`;

export const PublishButton = styled.div`
  width: fit-content;
  height: fit-content;

  &:hover {
    cursor: pointer;
  }
`;

export const DropDownMenu = styled.div`
  ${ButtonStyles};
  display: ${(props) => (props.dropdown_active ? "flex" : "none")};
  position: absolute;
  bottom: 0;
  left: 0;
  top: 105%;
  z-index: 1;
`;
