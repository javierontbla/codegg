import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  body {
    background-color: #1e232b;
    margin: 0;
    padding: 0;
    height: 100vh;
  }

  body::-webkit-scrollbar {
    width: 0.6rem;
  }

  body::-webkit-scrollbar-track {
    background-color: #1e232b;
  }

  body::-webkit-scrollbar-thumb {
    background-color: #000000;
    border-radius: 0.4rem;
    overflow: auto;
  }

  b {
    color: green;
  }
  
  blockquote {
    color: #faf9f9;
    padding: 0.8rem;
    font-family: "Roboto", sans-serif;
    font-size: 1.5rem;
    border-top-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
    border-top-left-radius: 0.2rem;
    border-bottom-right-radius: 0.2rem;
    letter-spacing: 0.5px;
    background: #000000; 
    width: 100%;
    margin-bottom: 2vh;

    @media (max-width: 768px) {
      font-size: 1.2rem;
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
    font-family: "VT323", monospace;
    font-size: 2.8rem;
    letter-spacing: 0.5px;
    margin-bottom: 1vh;
    text-align: left;
    width: 100%;
    line-height: 120%;

    @media (max-width: 500px) {
      font-size: 2.2rem;
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
    background: #ffd933;
    border-radius: 0.2rem;
    padding-left: 0.3rem;
    padding-right: 0.3rem;
    color: #000000;
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
    background: #000000; 
    margin-bottom: 2vh;
    width: 100%;
    
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
      background: #fad530;
      content: ' ';
      height: 30%;
      position: absolute;
      left: 0;
      top: 90%;
      width: calc(100%);
      z-index:-1;
      transition: top 0.25s, height 0.25s;
      border-radius: 0.2rem;
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
