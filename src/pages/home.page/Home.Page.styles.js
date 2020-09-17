import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { colors } from "../../colors/colors";

const {
  white,
  lightBlack,
  darkBlack,
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

export const Container = styled.div`
  margin-top: -0.4rem;
`;

export const Time = styled.div`
  color: ${white};
  border-bottom: 2px solid ${darkBlack};
  margin-top: 3.5vh;
  padding: 0.2rem;
  font-family: "Abril Fatface", cursive;
  font-size: 1rem;
  opacity: 0.9;
  letter-spacing: 0.5px;
`;

export const LoadMore = styled.button`
  width: fit-content;
  border: 2px solid ${darkBlack};
  box-shadow: 0.4rem 0.4rem ${darkBlack};
  border-radius: 0.2rem;
  background: ${lightBlack};
  margin: 0 auto;
  font-family: "Roboto", sans-serif;
  margin-top: 3rem;
  margin-bottom: 3.4rem;
  font-size: 1rem;
  letter-spacing: 0.5px;
  color: ${white};
  padding: 0.4rem;
  padding-left: 0.6rem;
  padding-right: 0.6rem;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    margin-top: 2rem;
    margin-bottom: 2.4rem;
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
  padding-top: 0.3rem;
  padding-bottom: 0.8rem;
  justify-content: left;
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
  margin-top: 0.4rem;
`;

export const Tag = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
  border-radius: 0.2rem;
  padding: 0.4rem;
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  letter-spacing: 1px;
  height: fit-content;
  margin: 0.5rem;
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

  &:hover {
    cursor: ${(props) => (props.search ? "pointer" : "auto")};
    opacity: ${(props) => (props.search ? "0.9" : "1")};
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const Message = styled.div`
  width: fit-content;
  border: 2px solid ${darkBlack};
  box-shadow: 0.4rem 0.4rem ${darkBlack};
  border-radius: 0.2rem;
  background: ${lightBlack};
  margin: 0 auto;
  font-family: "Roboto", sans-serif;
  margin-top: 3rem;
  margin-bottom: 3.4rem;
  font-size: 1rem;
  letter-spacing: 0.5px;
  color: ${white};
  padding: 0.4rem;
  padding-left: 0.6rem;
  padding-right: 0.6rem;

  @media (max-width: 768px) {
    width: fit-content;
    margin-top: 2rem;
    margin-bottom: 2.4rem;
  }
`;
