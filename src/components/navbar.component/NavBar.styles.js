import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import { colors } from "../../colors/colors";
import { fonts } from "../../fonts/fonts";

const { black, white } = colors;
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
  margin: 0rem 2rem 0rem 0rem;

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
  letter-spacing: 1px;
  font-size: 1rem;
  font-family: ${navbar_font};
  color: ${black};

  font-weight: 500;

  &:hover {
    cursor: pointer;
  }
`;

export const SuscribeContainer = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  margin: 0rem 0rem 0rem 0rem;
  height: 100%;
  width: fit-content;

  @media (max-width: 500px) {
  }
`;

export const Suscribe = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  border: none;
  height: 2rem;
  background: rgb(33, 33, 32);
  background: linear-gradient(
    90deg,
    rgba(33, 33, 32, 1) 5%,
    rgba(25, 25, 24, 1) 80%
  );
  font-family: ${navbar_font};
  padding: 0rem 0.65rem 0rem 0.65rem;
  color: ${white};
  font-size: 1rem;
  border-radius: 0.15rem;
  margin: 0rem 0rem 0rem 0rem;
  letter-spacing: 1px;

  &:hover {
    cursor: pointer;
    opacity: 0.95;
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
