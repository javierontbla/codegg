import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  body {
    background-color: #3a3d45;
    margin: 0;
    padding: 0;
    height: 100vh;
  }

  body::-webkit-scrollbar {
    width: 0.6em;
  }

  body::-webkit-scrollbar-track {
    background-color: #3a3d45;
  }

  body::-webkit-scrollbar-thumb {
    background-color: #21252b;
    border-radius: 0.4rem;
    overflow: auto;
  }
  
  blockquote {
    color: #d9d9d9;
    padding: 0.8rem;
    font-family: "Roboto", sans-serif;
    font-size: 1.5rem;
    border-top-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
    border-top-left-radius: 0.2rem;
    border-bottom-right-radius: 0.2rem;
    letter-spacing: 0.5px;
    background: #21252b; 
    width: 100%;
    margin-bottom: 2vh;

    @media (max-width: 768px) {
      font-size: 1.2rem;
      width: 100%;
    }
  }

  img {
    display: block;
    margin: 0 auto;
    margin-bottom: 2vh;
    border-radius: 0.2rem;
    max-width: 100%;
    opacity: 1;
  }

  h1 {
    color: #faf9f9;
    font-family: "Bebas Neue", cursive;
    font-size: 2.6rem;
    letter-spacing: 0.5px;
    margin-bottom: 1vh;
    text-align: left;
    width: 100%;

    @media (max-width: 500px) {
      font-size: 2rem;
      margin-bottom: 1vh;
    }
  }

  h2 {
    color: #faf9f9;
    font-family: "Abril Fatface", cursive;
    font-size: 1.5rem;
    letter-spacing: 0.5px;
    margin-bottom: 1vh;

    @media (max-width: 768px) {
      font-size: 1.2rem;
      text-align: left;
    }
  }

  h3 {
    color: #faf9f9;
    font-family: "Abril Fatface", cursive;
    font-size: 1.7rem;
    letter-spacing: 0.5px;
    margin-bottom: 1vh;

    @media (max-width: 768px) {
      font-size: 1.1rem;
      text-align: left;
    }
  }

  p {
    font-family: "Roboto", sans-serif;
    font-size: 1.5rem;
    letter-spacing: 0.5px;
    text-align: left;
    color: #faf9f9;
    margin-bottom: 2vh;
    line-height: 150%;
    width: 100%;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  strong {
    background: #21252b;
    border-radius: 0.2rem;
    padding-left: 0.3rem;
    padding-right: 0.3rem;
    color: #faf9f9;
    font-weight: normal;
  }

  li {
    color: #faf9f9;
    font-family: "Roboto", sans-serif;
    font-size: 1.5rem;
    margin-bottom: 0.2vh;
    letter-spacing: 0.5px;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  ul {
    width: 100%;
    margin: 0;
    margin-bottom: 2vh;
  }

  pre {
    color: #faf9f9;
    padding: 0.6rem;
    padding-left: 0.8rem;
    padding-right: 0.8rem;
    font-size: 1.2rem;
    border-radius: 0.2rem;
    letter-spacing: 0.5px;
    background: #21252b; 
    margin-bottom: 2vh;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  code {
    font-family: Consolas, monaco, monospace; 
  }

  a {
    position: relative;
    color: #faf9f9;
    font-size: 1.5rem;

    &::after {
      background-color: #21252b;
      content: ' ';
      height: 45%;
      position: absolute;
      left: 0;
      top: 65%;
      width: calc(100%);
      z-index:-1;
    }

    &:hover {
      color: #faf9f9;
      text-decoration: none;

      &::after {
      background-color: #076bcf;
      content: ' ';
      height: 45%;
      position: absolute;
      left: 0;
      top: 65%;
      width: calc(100%);
      z-index:-1;
    }
    }

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
