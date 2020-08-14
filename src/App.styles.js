import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
body {
  background-color: #282C35;
  margin: 0;
  padding: 0;
  height: 100vh;
}
  blockquote {
    color: #666;
    margin: 0;
    padding-left: 3em;
    border-left: 0.5em solid black;
  }

  img {
    display: block;
    margin: 0 auto;
    margin-top: 1vh;
    margin-bottom: 1vh;
  }

`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
