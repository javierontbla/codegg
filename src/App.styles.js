import styled, { createGlobalStyle } from "styled-components";

import { colors } from "./colors/colors";

const { white, grey } = colors;

export const Global = createGlobalStyle`
  body {
    background-color: ${white};
    margin: 0;
    padding: 0;
    height: 100vh;
  }

  b {
    color: #faf9f9;
    font-family: "Roboto", sans-serif;
    letter-spacing: 0.5px;
  }

  i {
    color: #faf9f9;
    font-family: "Roboto", sans-serif;
    letter-spacing: 0.5px;
  }

  sub {
    color: #faf9f9;
    font-family: "Roboto", sans-serif;
    letter-spacing: 0.5px;
  }
  
  sup {
    color: #faf9f9;
    font-family: "Roboto", sans-serif;
    letter-spacing: 0.5px;
  }
  
  blockquote {
    color: #faf9f9;
    padding: 0.8rem;
    font-family: "Roboto", sans-serif;
    font-size: 1.3rem;
    border-top-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
    border-top-left-radius: 0.2rem;
    border-bottom-right-radius: 0.2rem;
    letter-spacing: 0.5px;
    background: #000000; 
    width: 100%;
    margin-bottom: 2vh;

    @media (max-width: 500px) {
      font-size: 1.1rem;
    }
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
    color: #faf9f9;
    font-family: "Space Mono", monospace;
    font-size: 1.6rem;
    letter-spacing: 0.5px;
    margin-bottom: 2vh;
    text-align: left;
    width: 100%;
    line-height: 150%;

    @media (max-width: 500px) {
      font-size: 1.4rem;
    }
  }

  p {
    font-family: "Roboto", sans-serif;
    font-size: 1.3rem;
    letter-spacing: 0.5px;
    text-align: left;
    color: #faf9f9;
    margin-bottom: 2vh;
    line-height: 180%;
    width: 100%;

    @media (max-width: 500px) {
      font-size: 1.1rem;
    }
  }

  strong {
    background: #ffd933;
    border-radius: 0.2rem;
    padding-left: 0.3rem;
    padding-right: 0.3rem;
    color: #000000;
    font-weight: normal;
    font-size: 1.3rem;
    line-height: 180%;

    @media (max-width: 500px) {
      font-size: 1.1rem;
    }
  }

  li {
    color: #faf9f9;
    font-family: "Roboto", sans-serif;
    font-size: 1.3rem;
    margin-bottom: 0.5vh;
    letter-spacing: 0.5px;

    @media (max-width: 500px) {
      font-size: 1.1rem;
    }
  }

  ul {
    width: 100%;
    margin: 0;
    margin-bottom: 2vh;
    line-height: 200%;
  }

  pre {
    color: #faf9f9;
    padding: 0.6rem;
    padding-left: 0.8rem;
    padding-right: 0.8rem;
    font-size: 1.1rem;
    border-radius: 0.2rem;
    letter-spacing: 0.5px;
    background: #000000; 
    margin-bottom: 2vh;
    width: 100%;
    
    @media (max-width: 500px) {
      font-size: 1rem;
    }
  }

  code {
    font-family: Consolas, monaco, monospace; 
  }

  a {
    position: relative;
    color: #faf9f9;
    font-size: 1.3rem;

    &::after {
      background: #fad530;
      content: ' ';
      height: 30%;
      position: absolute;
      left: 0;
      top: 90%;
      width: calc(100%);
      z-index:-1;
      transition: top 0.25s, height 0.25s;
    }

    &:hover {
      color: #000000;
      text-decoration: none;
      
      &::after {
      background-color: #fad530;
      content: ' ';
      height: 100%;
      position: absolute;
      left: 0;
      top: 0%;
      width: calc(100%);
      z-index: -1;
      }
    }

    @media (max-width: 500px) {
      font-size: 1.1rem;
    }
  }

  table {
    width: fit-content;
    color: #faf9f9;
    text-align: center;
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    margin-bottom: 2vh;

    @media (max-width: 500px) {
      margin: 0 auto;
    }
  }

  table, th, td {
      border: 2px solid #faf9f9;
      border-radius: 0.2rem;
      padding: 1rem;
  }
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 7rem;

  @media (max-width: 500px) {
  }
`;

export const FullContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const Container = styled.div`
  margin: 2rem 2rem 2rem 2rem;
  border: 0.5px solid ${grey};
  border-radius: 0.15rem;
  width: 100%;

  @media (max-width: 500px) {
  }
`;
