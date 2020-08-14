import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors } from "../../../colors/colors";

const { darkBlue, darkGreen, white, grey, darkBlack, lightBlack } = colors;

export const Container = styled.div`
  min-width: 20vw;
  border: 2px solid ${darkBlack};
  box-shadow: 0.4rem 0.4rem ${darkBlack};
  border-radius: 0.2rem;
`;

export const Img = styled.div`
  width: 100%;
  height: 30vh;
  border-top-left-radius: 0.2rem;
  border-top-right-radius: 0.2rem;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.source});
  background-repeat: no-repeat;
`;

export const Text = styled.div`
  padding: 0.6rem;
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
  margin-top: 0.5vh;
`;

export const Span = styled.span`
  margin-left: 0.4rem;
`;

export const ReadMore = styled(Link)`
  font-family: "Abril Fatface", cursive;
  color: ${darkBlue};
  opacity: 0.9;

  &:hover {
    color: ${darkBlue};
    opacity: 0.9;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const Time = styled.div`
  padding: 0.6rem;
  color: ${darkBlue};
  font-size: 0.9rem;
  font-family: "Abril Fatface", cursive;
  border-bottom: 2px solid ${darkBlack};
  letter-spacing: 0.5px;
  opacity: 0.9;
`;

export const Hashtags = styled.div`
  padding: 0.4rem;
`;
export const Hashtag = styled.div`
  width: fit-content;
  background: ${darkBlue};
  color: ${white};
  border-radius: 0.2rem;
  padding: 0.3rem;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  letter-spacing: 1px;
  opacity: 0.9;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const Date = styled.div`
  color: ${white};
  opacity: 0.9;
  font-size: 0.8rem;
  font-family: "Roboto", sans-serif;
  letter-spacing: 0.5px;
  text-decoration: underline;
`;
