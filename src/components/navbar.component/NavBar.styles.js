import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Center = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100vw;
  height: 8vh;
  margin-top: 2.5vh;
`;

// containers
export const Logo = styled.div`
  ${Center};
  width: 22.5vw;
  font-family: "Roboto", sans-serif;
  justify-content: flex-start;
  padding-left: 1rem;
`;
export const Sections = styled.div`
  ${Center};
  width: 30vw;
`;

export const SocialMedia = styled.div`
  ${Center};
  width: 12.5vw;
`;

export const Space = styled.div`
  width: 10vw;
`;

// buttons
export const Section = styled.button`
  display: inline-block;
  position: relative;
  margin: 0;
  background: transparent;
  border: none;
  font-size: 1.2rem;
  letter-spacing: 1px;
  font-family: "Roboto", sans-serif;

  &:after {
    display: block;
    content: "";
    border-bottom: solid 4px black;
    transform: scaleX(0);
    transition: transform 0.5s ease-in-out;
  }

  &:hover:after {
    transform: scaleX(1);
  }

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;

export const MediaIcon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  color: black;

  &:hover {
    cursor: pointer;
  }
`;
