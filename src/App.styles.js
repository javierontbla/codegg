import styled, { createGlobalStyle } from "styled-components";

import { colors } from "./colors/colors";
import { fonts } from "./fonts/fonts";

const { white, grey, background } = colors;
const { montserrat } = fonts;

export const GlobalStyles = createGlobalStyle`
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
    border-radius: 15px;
    max-width: 100%;
    opacity: 1;

    @media (max-width: 500px) {
      max-width: 100%;
      margin: 0 auto;
    }
  }

  h1 {
    color: ${white};
    font-size: 1.6rem;
    font-family: ${montserrat};
    line-height: 115%;
    margin: 0rem 0rem 1.5rem 0rem;

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

  input {
    &:focus {
      outline: none !important;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${background};

  @media (max-width: 500px) {
  }
`;

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  @media (max-width: 500px) {
  }
`;
