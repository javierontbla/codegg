import styled, { keyframes } from "styled-components";

import { colors } from "../../../colors/colors";
import { fonts } from "../../../fonts/fonts";

const { grey } = colors;
const { open_sans } = fonts;

const LoadingAnimation = keyframes`
  from {
    left: -150px;
  }
  to {
    left: 100%;
  }
`;

export const LoadingCategoriesContainer = styled.div`
  height: fit-content;
  width: 100%;
  margin: 0rem 0rem 0rem 0rem;
  padding: 0rem 0rem 0.35rem 0rem;
  display: flex;
  align-items: center;
  border-bottom: 0.5px solid ${grey};
`;

export const Category = styled.div`
  display: flex;
  width: 100%;
  border-radius: 0.15rem;
  height: 1.6rem;
  border: none;
  padding: 0.4rem 0.5rem 0.4rem 0.5rem;
  margin: 0.4rem 0.4rem 0.4rem 0.4rem;
  position: relative;
  overflow: hidden;
  background: ${grey};
  opacity: 0.45;
  font-family: ${open_sans};
  letter-spacing: 0.5px;
  height: fit-content;
  color: transparent;
  font-size: 0.8rem;
  font-weight: 500;
  line-height: 100%;

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
