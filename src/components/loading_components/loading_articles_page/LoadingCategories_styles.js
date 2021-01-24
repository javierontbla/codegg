import styled, { keyframes } from "styled-components";

import { colors } from "../../../colors/colors";
import { fonts } from "../../../fonts/fonts";

const { black } = colors;
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
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  margin: 0rem 1rem 0rem 0rem;
  padding: 0rem 0rem 0rem 0rem;
  overflow: hidden;
`;

export const Category = styled.div`
  display: flex;
  width: ${(props) => (props.top ? "100%" : props.middle ? "75%" : "50%")};
  border: none;
  margin: 0.5rem 0rem 0.5rem 0rem;
  position: relative;
  overflow: hidden;
  background: ${black};
  opacity: 0.45;
  border-radius: 20px;
  height: 1.55rem;

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
