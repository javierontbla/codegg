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
    color: #076bcf;
    margin: 0;
    padding: 0.6rem;
    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
    border-radius: 0.2rem;
    border: 2px solid #21252b;
    opacity: 0.9;
    text-transform: lowercase;
    letter-spacing: 0.5px;
    background: #21252b; 
    width: 100%;
    opacity: 0.9;

    @media (max-width: 768px) {
      font-size: 1.3rem;
    }
  }

  img {
    display: block;
    margin: 0 auto;
    margin-top: 0.7vh;
    margin-bottom: 0.7vh;
    border-radius: 0.2rem;
    max-width: 100%;
  }

  h1 {
    color: #faf9f9;
    text-transform: uppercase;
    font-family: "Abril Fatface", cursive;
    font-size: 2.4rem;
    letter-spacing: 0.5px;
    margin-bottom: 1vh;

    @media (max-width: 768px) {
      font-size: 1.9rem;
      text-align: left;
    }
  }

  h2 {
    color: #faf9f9;
    text-transform: uppercase;
    font-family: "Abril Fatface", cursive;
    font-size: 2rem;
    letter-spacing: 0.5px;
    margin-bottom: 3vh;

    @media (max-width: 768px) {
      font-size: 1.5rem;
      text-align: left;
    }
  }

  h3 {
    color: #faf9f9;
    text-transform: uppercase;
    font-family: "Abril Fatface", cursive;
    font-size: 1.6rem;
    letter-spacing: 0.5px;
    margin-bottom: 3vh;

    @media (max-width: 768px) {
      font-size: 1.1rem;
      text-align: left;
    }
  }

  p {
    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
    letter-spacing: 0.5px;
    text-align: left;
    color: #faf9f9;

    @media (max-width: 768px) {
      font-size: 1.3rem;
    }
  }

  strong {
    font-size: 1.7rem;
    letter-spacing: 0.5px;
    font-family: "Roboto", sans-serif;
    color: #faf9f9;
    font-weight: bold;
    background: #076bcf;
    border-radius: 0.2rem;
    padding: 0.2rem;

    @media (max-width: 768px) {
      font-size: 1.4rem;
    }
  } 

  li {
    font-family: "Roboto", sans-serif;
    color: #faf9f9;
    font-size: 1.6rem;
    margin-bottom: 0.2rem;
    text-transform: lowercase;
    letter-spacing: 0.5px;
    margin-left: 1rem;

    @media (max-width: 768px) {
      font-size: 1.3rem;
    }
  }
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
