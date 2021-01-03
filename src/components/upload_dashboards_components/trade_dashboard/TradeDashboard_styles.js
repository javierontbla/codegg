import styled, { css } from "styled-components";

import { colors } from "../../../colors/colors";
import { fonts } from "../../../fonts/fonts";

const { grey, white, black } = colors;
const { roboto, open_sans } = fonts;

const ButtonStyles = css`
  display: flex;
  align-items: center;
  line-height: 100%;
  height: 1.55rem;
  width: fit-content;
  margin: 0rem 0rem 0rem 0rem;
  padding: 0rem 0.5rem 0rem 0.5rem;
  border-radius: 0.15rem;
  font-family: ${open_sans};
  font-size: 0.7rem;
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

export const CallDashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${grey};
  background: ${white};
  border-radius: 0.35rem;
  height: fit-content;
  width: 100%;
  margin: 0rem 0rem 0.5rem 0rem;
  box-shadow: 1.5px 1.5px 1.5px -1px #ced4da;
  line-height: 100%;
`;

export const SymbolInputContainer = styled.input`
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

export const CreateButton = styled.div`
  ${ButtonStyles};
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
  margin: -0.4rem 0.15rem 0rem 0rem;

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
      ? "0.75rem 0rem 0.75rem 0.75rem"
      : "0.75rem 0.75rem 0.75rem 0.75rem"};
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
  margin: 0.55rem 0rem 0rem 0rem;
`;

export const ActionOverlay = styled.div`
  width: 3.75rem;
`;

export const Action = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 0.565rem;
  font-family: ${roboto};
  color: ${white};
  text-transform: capitalize;
  font-weight: 500;
  padding: 0.25rem 0.35rem 0.25rem 0.35rem;
  letter-spacing: 0.5px;
  margin: 0rem 0rem 0rem 0rem;
  width: fit-content;
  border-radius: 0.15rem;
  border: none;
  line-height: 100%;
  background: ${(props) =>
    props.action === "sell" ? "rgb(67, 170, 139)" : "rgb(249, 104, 106)"};
  background: ${(props) =>
    props.action === "sell"
      ? "linear-gradient(45deg,rgba(249, 104, 106, 1) 5%,rgba(185, 32, 34, 1) 95%)"
      : "linear-gradient(45deg, rgba(67, 170, 139, 1) 0%, rgba(55, 139, 136, 1) 100%)"};
`;

export const ActionChange = styled.div`
  &:hover {
    cursor: pointer;
    opacity: 0.95;
  }
`;

export const ChangeIcon = styled.img`
  width: 1.2rem;
  margin: 0rem 0rem 0rem 0rem;
  transform: rotate(180deg);
`;

export const MiddleContainer = styled.div`
  display: ${(props) => (props.active_dashboard ? "flex" : "none")};
  flex-direction: column;
  width: 100%;
  margin: 0rem 0rem 0.75rem 0rem;
  padding: 0.75rem 0.75rem 0rem 0.75rem;
`;

export const OptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: ${(props) =>
    props.first_container ? "0rem 0rem 0rem 0rem" : "0.35rem 0rem 0rem 0rem"};
  padding: 0rem 0rem 0rem 0rem;
  width: 100%;
  height: 1.85rem;
  line-height: 100%;
`;

export const Subtitle = styled.div`
  font-size: 0.85rem;
  color: ${black};
  font-family: ${roboto};
`;

export const SubtitleInput = styled.input`
  width: 6.5rem;
  border: 0.5px solid ${grey};
  border-radius: 0.15rem;
  height: 100%;
  padding: 0rem 0.275rem 0rem 0.275rem;
  font-size: 0.7rem;
  color: ${black};
  font-family: ${roboto};
  letter-spacing: 0.25px;

  &&& {
    ::placeholder {
      font-size: 0.7rem;
    }
  }

  &:focus {
    outline: none !important;
  }
`;

export const CommentInput = styled.input`
  width: 100%;
  height: 1.85rem;
  border: 0.5px solid ${grey};
  margin: 0.75rem 0rem 0rem 0rem;
  border-radius: 0.15rem;
  font-size: 0.7rem;
  resize: none !important;
  padding: 0rem 0.3rem 0rem 0.3rem;
  color: ${black};
  font-family: ${roboto};
  letter-spacing: 0.25px;

  &&& {
    ::placeholder {
      font-size: 0.7rem;
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
  padding: 0.65rem 0.75rem 0.65rem 0.75rem;
`;
