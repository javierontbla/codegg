import styled, { createGlobalStyle } from "styled-components";

import { colors } from "./colors/colors";

const { white, grey, grey_2, background } = colors;

export const Global = createGlobalStyle`
  body {
    background-color: ${white};
    margin: 0;
    padding: 0;
    height: 100vh;
  }

  ::placeholder { 
   color: ${grey};
   font-family: 'Roboto', sans-serif;
   letter-spacing: 0.25px;
   font-size: 0.9rem;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  img {
    display: block;
    margin-bottom: 2vh;
    border-radius: 0.2rem;
    max-width: 100%;
    opacity: 1;

    @media (max-width: 500px) {
      max-width: 100%;
      margin: 0 auto;
    }
  }

  h1 {
    color: ${white};
    font-size: 1.5rem;
    letter-spacing: 0.5px;
    text-align: left;
    width: 100%;
    line-height: 100%;
    text-decoration: underline;

    @media (max-width: 500px) {

    }
  }

  p {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    letter-spacing: 0.5px;
    text-align: left;
    color: ${white};
    line-height: 100%;
    width: 100%;

    @media (max-width: 500px) {
    }
  }
`;

export const FullContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${background};

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  @media (max-width: 500px) {
  }
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 3.65rem;
  background: ${background} !important;
  border-bottom: 0.5px solid ${grey_2};

  @media (max-width: 500px) {
  }
`;
