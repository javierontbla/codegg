import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import { colors } from "../../colors/colors";

const { darkBlack, lightBlack, yellow } = colors;

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
  background: ${lightBlack};
  position: sticky;
  top: 0;
  -webkit-box-shadow: 0.4rem 0px 0.4rem 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0.4rem 0px 0.4rem 0px rgba(0, 0, 0, 0.5);
  box-shadow: 0.4rem 0px 0.4rem 0px rgba(0, 0, 0, 0.5);

  @media (max-width: 500px) {
    flex-direction: row;
    height: 100%;
    width: 100%;
    position: "";
    -webkit-box-shadow: 0.4rem 0.4rem 0.4rem 0.1rem rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0.4rem 0.4rem 0.4rem 0.1rem rgba(0, 0, 0, 0.5);
    box-shadow: 0.4rem 0.4rem 0.4rem 0.1rem rgba(0, 0, 0, 0.5);
  }
`;

// containers
export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  letter-spacing: 0.5px;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
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
  margin-bottom: 1.2rem;

  @media (max-width: 500px) {
    flex-direction: row;
    width: 30%;
    height: 100%;
    margin-bottom: 0rem;
  }
`;

// buttons
export const MediaIcon = styled(FontAwesomeIcon)`
  font-size: ${(props) => (props.comment ? "1.6rem" : "1.9rem")};
  color: ${yellow};
  margin: 0;
  margin-bottom: ${(props) => (props.comment ? "0.6rem" : "")};

  &:hover {
    cursor: pointer;
    opacity: 0.9;
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
  margin-top: 0.8rem;
  width: 4.2rem;
  height: 4.2rem;

  &:hover {
    text-decoration: none;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

export const External = styled.a`
  color: ${yellow};
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

export const Text = styled.div`
  display: none;

  @media (max-width: 500px) {
    display: inline;
    font-family: "Space Mono", monospace;
    color: ${yellow};
    letter-spacing: 0.5px;
    width: fit-content;
    height: 100%;
    font-size: 2.4rem;
  }
`;
