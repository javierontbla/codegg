import styled, { keyframes } from "styled-components";

import { colors } from "../../../colors/colors";

const { darkBlack } = colors;

const GradientAnimation = keyframes`
    from {
        left: -150px;
    }

    to {
        left: 100%;
    }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 580px 580px;
  gap: 15px 15px;
  margin: 0.25rem;
  margin-top: 0.45rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 580px;
  }
`;

export const Element = styled.div`
  width: 100%;
  box-shadow: 0 4px 10px 0 rgba(33, 33, 33, 0.15);
  border-radius: 0.2rem;
  position: relative;
  overflow: hidden;
  background: ${darkBlack};
  opacity: 0.65;

  &::before {
    content: "";
    display: block;
    position: absolute;
    left: -150px;
    top: 0;
    height: 100%;
    width: 300px;
    background: linear-gradient(315deg, #2d3436 0%, #000000 74%);
    animation: ${GradientAnimation} 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    opacity: 0.05;
  }
`;

/*
&::before {
    content: "";
    display: block;
    position: absolute;
    left: -150px;
    top: 0;
    height: 100%;
    width: 150px;
  background: linear-gradient(315deg, #2d3436 0%, #000000 74%);
    animation: ${GradientAnimation} 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    opacity: 0.8;
  }
  */
