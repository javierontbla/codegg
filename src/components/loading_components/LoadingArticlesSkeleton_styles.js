import styled, { keyframes } from "styled-components";

import { colors } from "../../colors/colors";

const { grey } = colors;

const LoadingAnimation = keyframes`
  from {
    left: -150px;
  }
  to {
    left: 100%;
  }
`;

export const SkeletonContainer = styled.div`
  height: 60rem;
  margin: 1rem 0rem 0rem 0rem;
  padding: 0rem 0rem 0rem 0rem;
  display: flex;
  align-items: center;
`;

export const SkeletonArticle = styled.div`
  display: flex;
  width: 33%;
  border-radius: 0.15rem;
  height: 100%;
  border: none;
  margin: 0rem 0.5rem 0rem 0.5rem;
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
