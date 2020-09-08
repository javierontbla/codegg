import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import { colors } from "../../colors/colors";

const { darkBlack, lightBlack, darkBlue, yellow } = colors;

const Center = css`
  display: flex;
  flex-direction: row;
  align-items: center;
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
    width: 100%;
  }
`;

// containers
export const Logo = styled.div`
  ${Center};
  width: 27.5vw;
  justify-content: flex-start;
  opacity: 0.9;
  padding-left: 2rem;
  letter-spacing: 0.5px;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    padding-left: 1rem;
    width: 70%;
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
    width: 0%;
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  ${Center};
  justify-content: flex-end;
  align-items: center;
  width: 27.5vw;
  padding-right: 2rem;
  opacity: 0.9;

  @media (max-width: 768px) {
    padding-right: 1rem;
    width: 30%;
  }
`;

// buttons
export const MediaIcon = styled(FontAwesomeIcon)`
  font-size: ${(props) => (props.comment ? "1.6rem" : "1.9rem")};
  color: ${darkBlue};
  margin-right: ${(props) => (props.comment ? "1rem" : "")};

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    margin-right: ${(props) => (props.comment ? "0.8rem" : "")};
  }
`;

export const LinkContainer = styled(Link)`
  &:hover {
    cursor: pointer;
    text-decoration: none;
    color: ${darkBlue};
  }
`;

export const Img = styled.img`
  margin: 0;
  margin-right: 0.3rem;
  width: 50px;
  height: 50px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Text = styled.div`
  font-family: "Abril Fatface", cursive;
  text-transform: uppercase;
  font-size: 2.2rem;
  color: ${darkBlue} !important;
  background: transparent !important;
  letter-spacing: 0.5px;
`;
