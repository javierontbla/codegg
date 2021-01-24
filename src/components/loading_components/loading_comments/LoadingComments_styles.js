import styled, { keyframes, css } from "styled-components";
import TextareaAutosize from "react-textarea-autosize";

import { colors } from "../../../colors/colors";
import { fonts } from "../../../fonts/fonts";

const { grey_2, black } = colors;
const { roboto, open_sans } = fonts;

const LoadingAnimation = keyframes`
  from {
    left: -150px;
  }
  to {
    left: 100%;
  }
`;

const BackgroundStyles = css`
  display: flex;
  border: none;
  margin: 0rem 0rem 0rem 0rem;
  position: relative;
  overflow: hidden;
  background: ${black};
  opacity: 0.45;

  &::before {
    content: "";
    display: block;
    position: absolute;
    left: -150px;
    top: 0;
    height: 100%;
    width: 150px;
    background: linear-gradient(
      to right,
      transparent 0%,
      #403c3c 50%,
      transparent 100%
    );
    animation: ${LoadingAnimation} 1.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
`;

export const LoadingCommentsContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: fit-content;
  width: 100%;
  padding: 0.75rem 0.75rem 0.75rem 0.75rem;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-top: 0.5px solid ${grey_2};
`;

export const ProfileImage = styled.div`
  ${BackgroundStyles};
  width: 1.65rem;
  height: 1.65rem;
  border-radius: 50%;
  margin: 0rem 0.5rem 0rem 0rem;
`;

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 1.65rem);
  margin: 0rem 0rem 0rem 0rem;
`;

export const TextInput = styled.div`
  ${BackgroundStyles};
  width: 100%;
  border-radius: 20px;
  font-family: ${roboto};
  font-size: 0.8rem;
  padding: 0.35rem 0.5rem 0.35rem 0.5rem;
  border: none;

  &&& {
    ::placeholder {
      font-size: 0.8rem;
    }
  }

  &:focus {
    outline: none !important;
  }
`;

export const CommentButton = styled.div`
  ${BackgroundStyles};
  display: flex;
  align-items: center;
  line-height: 100%;
  height: 1.55rem;
  width: fit-content;
  margin: 0.75rem 0rem 0rem 0rem;
  padding: 0rem 0.5rem 0rem 0.5rem;
  border-radius: 20px;
  font-family: ${open_sans};
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: transparent;
`;
