import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  body {
    background-color: #3a3d45;
    margin: 0;
    padding: 0;
    height: 100vh;
  }
  
  blockquote {
    color: #666;
    margin: 0;
    padding: 0.2em;
    padding-left: 0.5rem;
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
    max-width: 95%;
  }

  code {
    display: flex; 
    width: 100%;
    border: 2px solid #21252b;
    box-shadow: 0.4rem 0.4rem #21252b;
    padding: 0.6rem;
    border-radius: 0.2rem;
    font-family: Consolas,monaco,monospace; 
    font-size: 1.2rem;
    color: #ffa630;
  }

  h1 {
    color: #faf9f9;
    text-transform: uppercase;
    font-family: "Abril Fatface", cursive;
    font-size: 2.6rem;
    letter-spacing: 0.5px;
    margin-bottom: 3vh;
  }
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
