import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import { colors } from "../../../../colors/colors";

const {
  white,
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
  grey,
} = colors;

export const LinkArticle = styled(Link)`
  &:hover {
    text-decoration: none;
  }
`;

export const Container = styled.div`
  width: 100%;
  border: 2px solid ${darkBlack};
  box-shadow: 0.4rem 0.4rem ${darkBlack};
  border-radius: 0.2rem;

  &:hover {
    cursor: pointer;
  }
`;

export const Img = styled.div`
  width: 100%;
  min-height: 30vh;
  border-top-left-radius: 0.2rem;
  border-top-right-radius: 0.2rem;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.source});
  background-repeat: no-repeat;

  &:hover {
    opacity: 0.9;
  }
`;

export const Text = styled.div`
  padding-right: 0.6rem;
  padding-left: 0.6rem;
  padding-top: 0.6rem;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  letter-spacing: 0.5px;
  text-align: left;
  margin-top: 1vh;
  color: ${white};

  &:hover {
    opacity: 0.9;
  }
`;

export const Title = styled.div`
  font-family: "VT323", monospace;
  font-size: 2.3rem;
  letter-spacing: 0.5px;
  color: ${white};
  line-height: 120%;

  @media (max-width: 500px) {
    font-size: 2rem;
  }
`;

export const BodyPreview = styled.div`
  font-family: "Roboto", sans-serif;
  padding-top: 0.6rem;
  font-size: 1.2rem;

  &::first-letter {
    text-transform: uppercase;
  }

  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const Span = styled.span``;

export const Time = styled.div`
  padding-left: 0.6rem;
  padding-bottom: 0.6rem;
  padding-top: 0.3rem;
  margin-bottom: 0.3rem;
  color: ${white};
  font-size: 0.9rem;
  font-family: "Abril Fatface", cursive;
  border-bottom: 2px solid #000000;
  letter-spacing: 0.5px;

  @media (max-width: 500px) {
    font-size: 0.9rem;
  }
`;

export const Tags = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: ${(props) => (props.post ? "0.9rem" : "")};
  padding-top: ${(props) => (props.post ? "1rem" : "0rem")};
  padding-bottom: ${(props) => (props.post ? "1rem" : "0.6rem")};
  padding-left: ${(props) => (props.post ? "0.5rem" : "0.2rem")};
  padding-right: 0.2rem;

  @media (max-width: 768px) {
    padding-left: ${(props) => (props.post ? "0rem" : "")};
    margin-left: ${(props) => (props.post ? "-0.2rem" : "")};
  }
`;

export const Tag = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
  border-radius: 0.2rem;
  padding: 0.4rem;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  letter-spacing: 1px;
  height: fit-content;
  margin: 0.4rem;
  margin-bottom: ${(props) => (props.post ? "" : "0.6rem")};
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

  &:hover {
    cursor: ${(props) => (props.post ? "" : "pointer")};
    opacity: ${(props) => (props.post ? "1" : "0.9")};
  }
`;

export const Date = styled.div`
  color: ${grey};
  font-size: 0.8rem;
  font-family: "Roboto", sans-serif;
  letter-spacing: 0.5px;
  text-decoration: underline;
  padding-top: 0.3rem;
`;

export const Icon = styled(FontAwesomeIcon)`
  margin-right: 0.4rem;
  font-size: 0.75rem;
  color: ${white};
`;
