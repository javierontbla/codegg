import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors } from "../../colors/colors";
import { fonts } from "../../fonts/fonts";

const { black, white, grey_2, background } = colors;
const { open_sans } = fonts;

export const Container = styled.div`
  width: 100%;
  height: 3.65rem;
  background: ${background} !important;
  border-bottom: 0.5px solid ${grey_2};

  @media (max-width: 500px) {
    height: 4rem;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  width: 100%;
  height: 100%;
  padding: 0 !important;
`;

export const HyperLink = styled(Link)`
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
    margin: 0rem 0rem 0rem 1rem;
  }
`;

export const Logo = styled.img`
  width: 3.35rem;
  margin: 0 !important;

  &:hover {
    text-decoration: none;
  }
`;

export const PageLinksContainer = styled.div`
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
  color: ${white};
  font-weight: 500;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

export const UserProfileContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: fit-content;
  margin: 0rem 0rem 0rem 0rem;
  height: 100%;
  width: fit-content;

  @media (max-width: 500px) {
    margin: 0rem 1rem 0rem 0rem;
  }
`;

export const UserMenuContainer = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  height: fit-content;

  &:hover {
    cursor: pointer;
    text-decoration: none;
  }
`;

export const User = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  letter-spacing: 1px;
  font-size: 0.9rem;
  font-family: ${open_sans};
  color: ${white};
`;

export const DropDownIcon = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 5px 5px 0 5px;
  border-color: ${white} transparent transparent transparent;
  margin: 0rem 0rem 0rem 0.5rem;

  &:hover {
    cursor: pointer;
    opacity: 0.95;
  }
`;

export const UserMenu = styled.div`
  position: absolute;
  right: 0;
  display: ${(props) => (props.menu_active ? "block" : "none")};
  z-index: 1;
  background: ${black};
  border-radius: 15px;
  width: 10rem;
  height: fit-content;
  margin: 1.25rem 0rem 0rem 0rem;
  border: 0.5px solid ${grey_2};
`;

export const UserMenuOption = styled.div`
  display: ${(props) => (props.responsive ? "flex" : "")};
  width: 100%;
  height: fit-content;
  font-size: 0.9rem;
  font-family: ${open_sans};
  color: ${white};
  font-weight: 500;
  padding: 0.75rem 0.75rem 0.75rem 0.75rem;
  letter-spacing: 1px;
  border-bottom: ${(props) =>
    props.last_child
      ? "none"
      : props.faq && !props.user
      ? "none"
      : `0.5px solid ${grey_2}`};

  &:hover {
    cursor: pointer;
  }
`;

export const ActionButtonContainer = styled.div`
  height: fit-content;
  width: fit-content;
`;
