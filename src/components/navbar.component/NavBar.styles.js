import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import { colors } from "../../colors/colors";

const { darkBlack, lightBlack, darkBlue, yellow } = colors;

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
  margin-top: 1rem;
  margin-right: 1rem;
  margin-left: 1rem;
  background: ${lightBlack};
  box-shadow: 0.4rem 0.4rem ${darkBlack};
  border-radius: 0.2rem;
  border: 2px solid ${darkBlack};

  @media (max-width: 1100px) {
    height: 5.5vh;
  }

  @media (max-width: 768px) {
    margin-top: 0.5rem;
    height: 8vh;
  }
`;

// containers
export const Logo = styled.div`
  ${Center};
  width: 27.5vw;
  font-family: "Abril Fatface", cursive;
  text-transform: uppercase;
  justify-content: flex-start;
  font-size: 2.2rem;
  opacity: 0.9;
  padding-left: 2rem;
  letter-spacing: 0.5px;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    padding-left: 1rem;
  }
`;

export const PhraseContainer = styled.div`
  ${Center};
  height: 100%;
  width: 40vw;
  justify-content: center;
  font-family: "Reenie Beanie", cursive;
  font-size: 2.4rem;
  color: ${yellow};
  padding-top: 0.5rem;

  @media (max-width: 768px) {
    opacity: 0;
  }
`;

export const SocialMedia = styled.div`
  ${Center};
  justify-content: flex-end;
  width: 27.5vw;
  padding-right: 2rem;
  opacity: 0.9;

  @media (max-width: 768px) {
    padding-right: 1.5rem;
  }
`;

// buttons
export const MediaIcon = styled(FontAwesomeIcon)`
  font-size: 1.9rem;
  color: ${darkBlue};

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const LinkText = styled(Link)`
  color: ${darkBlue} !important;
  background: transparent !important;

  &:hover {
    cursor: pointer;
    text-decoration: none;
    color: ${darkBlue};
  }
`;
