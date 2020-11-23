import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import { colors } from "../../colors/colors";

const { white, grey, yellow, green } = colors;

const Center = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Navbar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: transparent;
  position: sticky;
  top: 0;
  border-right: 0.5px solid ${grey};

  @media (max-width: 500px) {
  }
`;

// containers
export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  letter-spacing: 0.5px;
  margin: 0.5rem 0rem 0rem 0rem;

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

export const SocialMedia = styled.div`
  ${Center};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: 500px) {
    flex-direction: row;
    width: 30%;
    height: 100%;
    margin-bottom: 0rem;
  }
`;

// buttons
export const MediaIcon = styled(FontAwesomeIcon)`
  font-size: 2rem;
  color: ${green};
  margin: 0px 0px 1rem 0px;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 500px) {
    margin-bottom: 0rem;
    margin-top: ${(props) => (props.comment ? "0.6rem" : "0.4rem")};
    margin-right: ${(props) => (props.comment ? "1rem" : "0.2rem")};
  }
`;

export const LinkContainer = styled(Link)`
  &&& {
    &::after {
      background-color: transparent;
      content: " ";
      height: 40%;
      position: absolute;
      left: 0;
      top: 65%;
      width: calc(100%);
      z-index: -1;
    }
  }
  &:hover {
    cursor: pointer;
    text-decoration: none;
    color: ${yellow};
  }
`;

export const Img = styled.img`
  width: 4rem;

  &:hover {
    text-decoration: none;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

export const External = styled.a`
  &&& {
    &::after {
      background-color: transparent;
      content: " ";
      height: 40%;
      position: absolute;
      left: 0;
      top: 65%;
      width: calc(100%);
      z-index: -1;
    }
  }
  &:hover {
    cursor: pointer;
    text-decoration: none;
  }
`;
