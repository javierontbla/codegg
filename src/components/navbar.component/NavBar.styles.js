import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { colors } from "../../colors/colors";

const { darkGreen, black, white } = colors;

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
  background: ${white};
  box-shadow: 0.4rem 0.4rem ${darkGreen};
  border-radius: 0.2rem;
  border: 2px solid ${darkGreen};
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
  background: transparent;
  border: none;
  font-size: 1.2rem;
  letter-spacing: 0.5px;
  font-family: "Abril Fatface", cursive;
  text-transform: uppercase;
  color: ${black};
  transition: color 0.5s linear;

  &:hover {
    cursor: pointer;
    color: ${darkGreen};
    opacity: 0.9;
  }

  &:focus {
    outline: none;
  }
`;

export const MediaIcon = styled(FontAwesomeIcon)`
  font-size: 1.9rem;
  color: ${darkGreen};
  opacity: 0.9;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

/*

  -webkit-box-shadow: 0 8px 6px -6px #999;
  -moz-box-shadow: 0 8px 6px -6px #999;
  box-shadow: 0 8px 6px -6px #999;
  */

/* 
    &:after {
    display: block;
    content: "";
    border-left: solid 5px ${black};
    transform: scaleX(0);
    transition: transform 0.5s ease-in-out;
  }

  &:hover:after {
    transform: scaleX(1);
  }

  */
