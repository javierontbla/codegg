import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import { colors } from "../../colors/colors";
import { fonts } from "../../fonts/fonts";

const { black, yellow } = colors;
const { navbar_font } = fonts;

export const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  position: sticky;
  width: 100%;
  height: 100%;

  @media (max-width: 500px) {
  }
`;

// containers
export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  height: 100%;
  margin: 0rem 3rem 0rem 2rem;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 500px) {
    width: fit-content;
    height: 100%;
    justify-content: center;
    flex-direction: row;
    padding-left: 1.2rem;
  }
`;

export const Img = styled.img`
  width: 4.5rem;

  &:hover {
    text-decoration: none;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

export const PagesContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: fit-content;
`;

export const PageLink = styled.div`
  margin: 0rem 1rem 0rem 1rem;
  letter-spacing: 0.75px;
  font-weight: 600;
  font-size: 1.1rem;
  font-family: ${navbar_font};
  color: ${black};

  &:hover {
    cursor: pointer;
  }
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  align-content: center;
  width: fit-content;
  margin: 0rem 2rem 0rem 0rem;
  height: 100%;
  width: fit-content;

  @media (max-width: 500px) {
  }
`;

// buttons
export const MediaIcon = styled(FontAwesomeIcon)`
  font-size: 1.6rem;
  color: ${black};
  height: 100%;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 500px) {
  }
`;

export const LinkContainer = styled(Link)`
  &&& {
    &::after {
      background-color: transparent;
      content: " ";
      height: 0%;
      position: absolute;
      left: 0;
      top: 0%;
      width: calc(100%);
      z-index: -1;
    }
  }
  &:hover {
    cursor: pointer;
    text-decoration: none;
  }
`;

export const External = styled.a`
  &&& {
    &::after {
      background-color: transparent;
      height: 0%;
      position: relative;
      left: 0;
      top: 0%;
      width: calc(100%);
      z-index: -1;
    }
  }
  &:hover {
    cursor: pointer;
    text-decoration: none;
  }
`;
