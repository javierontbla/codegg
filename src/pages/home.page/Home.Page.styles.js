import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { colors } from "../../colors/colors";

const {
  white,
  lightBlack,
  darkBlack,
  yellow,
  react,
  javascript,
  redux,
  node,
  graphql,
  html,
  css,
  algo,
  firebase,
} = colors;

export const Container = styled.div``;

export const Time = styled.div`
  color: ${white};
  border-bottom: 2px solid ${darkBlack};
  margin-top: 3.5vh;
  padding: 0.4rem;
  font-family: "Abril Fatface", cursive;
  font-size: 1rem;
  opacity: 0.9;
  letter-spacing: 0.5px;
`;

export const LoadMore = styled.button`
  width: 10vw;
  border: 2px solid ${darkBlack};
  box-shadow: 0.4rem 0.4rem ${darkBlack};
  border-radius: 0.2rem;
  background: ${lightBlack};
  margin: 0 auto;
  font-family: "Roboto", sans-serif;
  margin-top: 2rem;
  margin-bottom: 4rem;
  font-size: 1rem;
  letter-spacing: 0.5px;
  color: ${white};
  opacity: 0.9;
  padding: 0.4rem;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    width: 32vw;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const AvailableTagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background: ${lightBlack};
  border-bottom: 2px solid ${darkBlack};
  width: 100%;
  height: fit-content;
  padding-top: 0.8rem;
  padding-bottom: 1.2rem;
  justify-content: left;

  @media (max-width: 768px) {
    padding-top: 0rem;
    padding-bottom: 0.7rem;
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  color: ${(props) =>
    props.type === "react"
      ? `${react}`
      : props.type === "redux"
      ? `${redux}`
      : props.type === "javascript"
      ? `${javascript}`
      : props.type === "node"
      ? `${node}`
      : props.type === "graphql"
      ? `${graphql}`
      : props.type === "html5"
      ? `${html}`
      : props.type === "css3"
      ? `${css}`
      : props.type === "firebase"
      ? `${firebase}`
      : `${algo}`};
  font-size: ${(props) => (props.cross ? "1.1rem" : "1.5rem")};

  &:hover {
    cursor: pointer;
    opacity: ${(props) => (props.cross ? "0.9" : "0.8")};
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-left: 0.4rem;
  margin-right: 0.2rem;
  width: fit-content;
  height: fit-content;
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  height: fit-content;
  margin-top: 0.8rem;
`;

export const Tag = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
  color: ${(props) =>
    props.type === "react"
      ? `${react}`
      : props.type === "redux"
      ? `${redux}`
      : props.type === "javascript"
      ? `${javascript}`
      : props.type === "node"
      ? `${node}`
      : props.type === "graphql"
      ? `${graphql}`
      : props.type === "html5"
      ? `${html}`
      : props.type === "css3"
      ? `${css}`
      : props.type === "firebase"
      ? `${firebase}`
      : `${algo}`};
  border-radius: 0.2rem;
  padding: 0.4rem;
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  letter-spacing: 1px;
  margin-left: 1rem;
  height: fit-content;
  box-shadow: 0.4rem 0.4rem
    ${(props) =>
      props.type === "react"
        ? `${react}`
        : props.type === "redux"
        ? `${redux}`
        : props.type === "javascript"
        ? `${javascript}`
        : props.type === "node"
        ? `${node}`
        : props.type === "graphql"
        ? `${graphql}`
        : props.type === "html5"
        ? `${html}`
        : props.type === "css3"
        ? `${css}`
        : props.type === "firebase"
        ? `${firebase}`
        : `${algo}`};
  border: 2px solid
    ${(props) =>
      props.type === "react"
        ? `${react}`
        : props.type === "redux"
        ? `${redux}`
        : props.type === "javascript"
        ? `${javascript}`
        : props.type === "node"
        ? `${node}`
        : props.type === "graphql"
        ? `${graphql}`
        : props.type === "html5"
        ? `${html}`
        : props.type === "css3"
        ? `${css}`
        : props.type === "firebase"
        ? `${firebase}`
        : `${algo}`};
  margin-bottom: ${(props) => (props.filter ? "0.6rem" : "none")};

  &:first-child {
    margin-left: 0.2rem;
  }

  &:hover {
    cursor: ${(props) => (props.search ? "pointer" : "auto")};
    opacity: ${(props) => (props.search ? "0.9" : "1")};
  }

  @media (max-width: 768px) {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    margin-top: 0.8rem;
    font-size: 1.1rem;
  }
`;

export const Message = styled.div`
  width: fit-content;
  background: none;
  margin: 0 auto;
  margin-top: 2rem;
  margin-bottom: 4rem;
  font-size: 2.4rem;
  letter-spacing: 0.5px;
  color: ${yellow};
  font-family: "Reenie Beanie", cursive;

  @media (max-width: 768px) {
    width: fit-content;
    font-size: 2rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
`;
