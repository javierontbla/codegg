import styled, { keyframes } from "styled-components";

import { colors } from "../../../colors/colors";

const { black } = colors;

const LoadingAnimation = keyframes`
  from {
    left: -150px;
  }
  to {
    left: 100%;
  }
`;

export const LoadingArticlesPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
`;

export const ArticlePreview = styled.div`
  display: flex;
  width: 100%;
  border-radius: 0.5rem;
  height: 17.5rem;
  border: none;
  margin: 0rem 0rem 0.75rem 0rem;
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
