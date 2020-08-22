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
    overflow:auto;
  }
  
  blockquote {
    color: #666;
    margin: 0;
    padding: 0.2em;
    padding-left: 0.6rem;
    font-family: "Roboto", sans-serif;
    font-size: 1.7rem;
    border-left: 0.5em solid #21252b;
  }

  img {
    display: block;
    margin: 0 auto;
    margin-top: 1vh;
    margin-bottom: 1vh;
    border-radius: 0.2rem;
    max-width: 100%;
  }

  h1 {
    color: #faf9f9;
    text-transform: uppercase;
    font-family: "Abril Fatface", cursive;
    font-size: 2.4rem;
    letter-spacing: 0.5px;
    margin-bottom: 3vh;
  }
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
