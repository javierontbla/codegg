import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import { colors } from "../../../colors/colors";

const { white, darkBlack, react, javascript, redux, grey } = colors;

export const LinkArticle = styled(Link)`
  &:hover {
    text-decoration: none;
  }
`;

export const Container = styled.div`
  width: 95%;
  border: 2px solid ${darkBlack};
  box-shadow: 0.4rem 0.4rem ${darkBlack};
  border-radius: 0.2rem;
  margin-top: 0.7rem;

  &:hover {
    opacity: 0.95;
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
`;

export const Text = styled.div`
  padding-right: 0.6rem;
  padding-left: 0.6rem;
  padding-top: 0.6rem;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  letter-spacing: 0.5px;
  text-align: justify;
  margin-top: 1vh;
  color: ${white};
  opacity: 0.9;
`;

export const Title = styled.div`
  font-family: "Abril Fatface", cursive;
  text-transform: uppercase;
  font-size: 1.6rem;
  letter-spacing: 0.5px;
  color: ${white};
`;

export const BodyPreview = styled.div`
  margin-top: 0.6rem;
`;

export const Span = styled.span``;

export const Time = styled.div`
  padding-left: 0.6rem;
  padding-bottom: 0.6rem;
  padding-top: 0.6rem;
  color: ${white};
  font-size: 0.9rem;
  font-family: "Abril Fatface", cursive;
  border-bottom: 2px solid ${darkBlack};
  letter-spacing: 0.5px;
  opacity: 0.9;
`;

export const Hashtags = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.4rem;
`;

export const Hashtag = styled.div`
  width: fit-content;
  background: ${(props) =>
    props.type === "react"
      ? `${react}`
      : props.type === "redux"
      ? `${redux}`
      : `${javascript}`};
  color: ${white};
  border-radius: 0.2rem;
  padding: 0.3rem;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  letter-spacing: 1px;
  margin-left: 0.4rem;
  opacity: 1;

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
  opacity: 0.9;
  font-size: 0.8rem;
  font-family: "Roboto", sans-serif;
  letter-spacing: 0.5px;
  text-decoration: underline;
`;

export const Icon = styled(FontAwesomeIcon)`
  margin-right: 0.4rem;
  font-size: 0.75rem;
  color: ${white};
  opacity: 0.9;
`;
