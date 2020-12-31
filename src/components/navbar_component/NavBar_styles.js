import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import { colors } from "../../colors/colors";
import { fonts } from "../../fonts/fonts";

const { black, white, grey } = colors;
const { open_sans } = fonts;

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  width: 100%;
  height: 100%;
  padding: 0 !important;
  @media (max-width: 500px) {
  }
`;

// containers
export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: 100%;
  margin: 0rem 1.5rem 0rem 0rem;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 500px) {
  }
`;

export const Img = styled.img`
  width: 3.35rem;
  margin: 0 !important;

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
  font-size: 0.9rem;
  font-family: ${open_sans};
  color: ${black};
  font-weight: 600;

  &:hover {
    cursor: pointer;
  }
`;

export const UserContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: fit-content;
  margin: 0rem 0rem 0rem 0rem;
  height: 100%;
  width: fit-content;

  @media (max-width: 500px) {
  }
`;

export const ProfileContainer = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  height: 50%;
`;

export const ProfileIcon = styled.img`
  width: 1.6rem;
  height: 1.6rem;
  margin: 0rem 0rem 0rem 0rem;

  &:hover {
    cursor: pointer;
    opacity: 0.95;
  }
`;

export const Menu = styled.div`
  position: absolute;
  right: 0;
  display: ${(props) => (props.menu_active ? "block" : "none")};
  z-index: 1;
  background: ${white};
  border-radius: 0.35rem;
  border: 1px solid ${grey};
  width: 8rem;
  height: fit-content;
  margin: 0.5rem 0rem 0rem 0rem;
  box-shadow: 1.35px 1.35px 1.35px -1px #ced4da;
`;

export const MenuOption = styled.div`
  width: 100%;
  height: fit-content;
  font-size: 0.8rem;
  font-family: ${open_sans};
  color: ${black};
  font-weight: 600;
  padding: 0.7rem 0.4rem 0.7rem 0.4rem;
  border-bottom: ${(props) =>
    props.last_child ? "none" : `0.5px solid ${grey}`};

  &:hover {
    cursor: pointer;
  }
`;

export const LogIn = styled.div`
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
  font-family: ${open_sans};
  padding: 0rem 0.65rem 0rem 0.65rem;
  color: ${white};
  font-size: 0.9rem;
  border-radius: 0.15rem;
  margin: 0rem 0rem 0rem 0rem;
  letter-spacing: 1px;
  font-weight: 600;

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
      width: calc(100%);
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
