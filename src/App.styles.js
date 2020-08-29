import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  body {
    background-color: #3a3d45;
    margin: 0;
    padding: 0;
    height: 100vh;
  }

  body::-webkit-scrollbar {
    width: 1em;
  }

  body::-webkit-scrollbar-track {
    background-color: #3a3d45;
  }

  body::-webkit-scrollbar-thumb {
    background-color: #21252b;
    border-radius: 0.2rem;
    overflow: auto;
  }
  
  blockquote {
    color: #faf9f9;
    padding: 0.4rem;
    padding-left: 0.6rem;
    padding-right: 0.6rem;
    font-family: "Roboto", sans-serif;
    font-size: 1.5rem;
    border-radius: 0.2rem;
    box-shadow: 0.4rem 0.4rem #076bcf;
    letter-spacing: 0.5px;
    background: #21252b; 
    width: 95%;
    margin: 2vh auto;

    @media (max-width: 768px) {
      font-size: 1.2rem;
      border-left: 1.2rem solid #21252b;
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
    text-transform: uppercase;
    font-family: "Abril Fatface", cursive;
    font-size: 2.3rem;
    letter-spacing: 0.5px;
    margin-bottom: 1vh;
    text-align: left;

    @media (max-width: 768px) {
      font-size: 1.6rem;
    }
  }

  h2 {
    color: #faf9f9;
    text-transform: uppercase;
    font-family: "Abril Fatface", cursive;
    font-size: 1.8rem;
    letter-spacing: 0.5px;
    margin-bottom: 1vh;
    text-decoration: underline;

    @media (max-width: 768px) {
      font-size: 1.1rem;
      text-align: left;
    }
  }

  h3 {
    color: #faf9f9;
    text-transform: uppercase;
    font-family: "Abril Fatface", cursive;
    font-size: 1.2rem;
    letter-spacing: 0.5px;
    margin-bottom: 1vh;
    text-decoration: underline;

    @media (max-width: 768px) {
      font-size: 0.7rem;
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
    line-height: 200%;

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
    margin-bottom: 2vh;
  }
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
