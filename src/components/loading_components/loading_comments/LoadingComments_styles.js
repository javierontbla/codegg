import styled, { keyframes, css } from "styled-components";

import { colors } from "../../../colors/colors";
import { fonts } from "../../../fonts/fonts";

const { grey } = colors;
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
  background: ${grey};
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
      #e8e8e8 50%,
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
  border-bottom-left-radius: 0.15rem;
  border-bottom-right-radius: 0.15rem;
  border-left: 1px solid ${grey};
  border-right: 1px solid ${grey};
  border-bottom: 1px solid ${grey};
`;

export const ProfileImage = styled.div`
  ${BackgroundStyles};
  width: 1.65rem;
  height: 1.65rem;
  border-radius: 50%;
  margin: 0rem 0.6rem 0rem 0rem;
`;

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 1.65rem);
  margin: 0rem 0rem 0rem 0rem;
`;

export const Comment = styled.div`
  ${BackgroundStyles};
  width: 100%;
  height: 4.25rem;
  resize: none !important;
  border-radius: 0.15rem;
  font-family: ${roboto};
  font-size: 0.8rem;

  &:focus {
    outline: none !important;
  }
`;

export const Button = styled.div`
  ${BackgroundStyles};
  display: flex;
  align-items: center;
  line-height: 100%;
  height: 1.55rem;
  width: fit-content;
  margin: 0.5rem 0rem 0rem 0rem;
  padding: 0rem 0.5rem 0rem 0.5rem;
  border-radius: 0.15rem;
  font-family: ${open_sans};
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: transparent;
`;
