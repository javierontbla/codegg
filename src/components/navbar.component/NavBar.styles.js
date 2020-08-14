import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import { colors } from "../../colors/colors";

const { darkBlack, lightBlack, darkBlue, white } = colors;

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
  margin-right: 2.5vh;
  margin-left: 2.5vh;
  background: ${lightBlack};
  box-shadow: 0.4rem 0.4rem ${darkBlack};
  border-radius: 0.2rem;
  border: 2px solid ${darkBlack};
`;

// containers
export const Logo = styled.div`
  ${Center};
  width: 27.5vw;
  font-family: "Abril Fatface", cursive;
  text-transform: uppercase;
  justify-content: flex-start;
  padding-left: 0.2rem;
  font-size: 2.2rem;
  opacity: 0.9;
  padding-left: 2rem;
  letter-spacing: 0.5px;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
export const SearchContainer = styled.div`
  ${Center};
  width: 40vw;
  justify-content: center;
`;

export const SocialMedia = styled.div`
  ${Center};
  justify-content: flex-end;
  width: 27.5vw;
  padding-right: 2rem;
`;

// buttons
export const MediaIcon = styled(FontAwesomeIcon)`
  font-size: 1.9rem;
  color: ${darkBlue};

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

export const LinkText = styled(Link)`
  color: ${darkBlue};

  &:hover {
    cursor: pointer;
    opacity: 0.9;
    text-decoration: none;
    color: ${darkBlue};
  }
`;

// search box
export const SearchBox = styled.input`
  background: ${lightBlack};
  border: 2px solid ${darkBlack};
  padding: 0.4rem;
  border-radius: 0.2rem;
  width: 100%;
  height: 80%;
  padding-left: 0.8rem;
  color: ${white};
  opacity: 0.9;

  &:focus {
    outline: none;
  }
`;
