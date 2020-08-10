import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { colors } from "../../colors/colors";

const { darkGreen, black } = colors;

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
  -webkit-box-shadow: 0 8px 6px -6px #999;
  -moz-box-shadow: 0 8px 6px -6px #999;
  box-shadow: 0 8px 6px -6px #999;
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
  font-size: 1.3rem;
  letter-spacing: 0.5px;
  font-family: "Roboto", sans-serif;
  color: ${black};

  &:after {
    display: block;
    content: "";
    border-bottom: solid 2px ${black};
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
