import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import { colors } from "../../../colors/colors";

const { white, darkBlack, react, javascript, redux, grey, node } = colors;

export const LinkArticle = styled(Link)`
  &:hover {
    text-decoration: none;
  }
`;

export const Container = styled.div`
  width: 96%;
  border: 2px solid ${darkBlack};
  box-shadow: 0.4rem 0.4rem ${darkBlack};
  border-radius: 0.2rem;
  margin-top: 1rem;
  margin-left: 0.25rem;
  opacity: 0.9;

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
    opacity: 0.8;
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
    opacity: 0.8;
  }
`;

export const Title = styled.div`
  font-family: "Abril Fatface", cursive;
  text-transform: uppercase;
  font-size: 1.6rem;
  letter-spacing: 0.5px;
  color: ${white};
`;

export const BodyPreview = styled.div`
  font-family: "Roboto", sans-serif;
  padding-top: 0.6rem;
  font-size: 1rem;
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
  border-bottom: 2px solid ${darkBlack};
  letter-spacing: 0.5px;
`;

export const Hashtags = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0.4rem;
`;

export const Hashtag = styled.div`
  width: fit-content;
  background: ${(props) =>
    props.type === "react"
      ? `${react}`
      : props.type === "redux"
      ? `${redux}`
      : props.type === "javascript"
      ? `${javascript}`
      : `${node}`};
  color: ${white};
  border-radius: 0.2rem;
  padding: 0.4rem;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  letter-spacing: 1px;
  margin-left: 0.4rem;

  &:first-child {
    margin-left: 0;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.8;
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
