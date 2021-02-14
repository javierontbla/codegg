import styled, { createGlobalStyle } from "styled-components";

import { colors } from "./colors/colors";
import { fonts } from "./fonts/fonts";

const { white, grey, background, blue } = colors;
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
    margin: 0rem 0rem 2rem 0rem;
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
    margin: 0rem 0rem 0.75rem 0rem;

    @media (max-width: 500px) {
      font-size: 1.4rem;
    }
  }

  h2 {
    color: ${white};
    font-size: 1.3rem;
    font-family: ${montserrat};
    line-height: 115%;
    margin: 0rem 0rem 0.75rem 0rem;
  }

  h3 {
    color: ${white};
    font-size: 1.15rem;
    font-family: ${montserrat};
    line-height: 115%;
    margin: 0rem 0rem 0.75rem 0rem;
  }

  p {
    font-family: "Roboto", sans-serif;
    font-size: 1.1rem;
    letter-spacing: 0.5px;
    text-align: left;
    color: ${white};
    line-height: 120%;
    width: 100%;
    margin: 0rem 0rem 2rem 0rem;

    @media (max-width: 500px) {
    }
  }

  li { 
    color: ${white};
  }

  a {
    color: ${blue};

    &:hover {
      color: ${blue};
      text-decoration: none;
      opacity: 0.9;
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

export const PagesContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  @media (max-width: 500px) {
  }
`;
