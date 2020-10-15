import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import { colors } from "../../../../colors/colors";

const {
  white,
  darkBlack,
  machine_learning,
  deep_learning,
  redes_neuronales,
  python,
  modelos,
  algo,
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
  border-radius: 0.2rem;
  -webkit-box-shadow: 0.4rem 0.4rem 0.4rem 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0.4rem 0.4rem 0.4rem 0px rgba(0, 0, 0, 0.5);
  box-shadow: 0.4rem 0.4rem 0.4rem 0px rgba(0, 0, 0, 0.5);
  transition: transform 0.15s;

  &:hover {
    cursor: pointer;
    transform: translateY(-0.8%);
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
  text-align: left;
  margin-top: 1vh;
  color: ${white};
`;

export const Title = styled.div`
  font-family: "Space Mono", monospace;
  font-size: 1.7rem;
  letter-spacing: 0.5px;
  color: ${white};
  line-height: 150%;

  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`;

export const BodyPreview = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  line-height: 180%;
  padding-bottom: 1.2rem;

  &::first-letter {
    text-transform: uppercase;
  }

  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const Span = styled.span``;

export const Time = styled.div`
  display: flex;
  align-items: center;
  color: ${grey};
  font-size: 0.75rem;
  font-family: "Space Mono", monospace;
  letter-spacing: 0.5px;
  padding-left: 0.6rem;

  @media (max-width: 500px) {
    font-size: 0.7rem;
  }
`;

export const Tags = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-bottom: ${(props) => (props.post ? "3.4rem" : "0.6rem")};
  padding-left: ${(props) => (props.post ? "0.5rem" : "0.2rem")};
  padding-right: 0.2rem;
  padding-top: ${(props) => (props.post ? "" : "0.2rem")};
  margin-left: ${(props) => (props.post ? "0.1rem" : "")};
  width: ${(props) => (props.post ? "65%" : "")};
  border-top: ${(props) => (props.post ? "" : `2px solid ${darkBlack}`)};

  @media (max-width: 500px) {
    padding-left: ${(props) => (props.post ? "0rem" : "")};
    margin-left: ${(props) => (props.post ? "-0.2rem" : "")};
    width: ${(props) => (props.post ? "100%" : "")};
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
  margin: 0.5rem;
  margin-bottom: ${(props) => (props.post ? "" : "0.6rem")};
  color: ${(props) =>
    props.type === "machine learning"
      ? `${machine_learning}`
      : props.type === "deep learning"
      ? `${deep_learning}`
      : props.type === "redes neuronales"
      ? `${redes_neuronales}`
      : props.type === "python"
      ? `${python}`
      : props.type === "modelos"
      ? `${modelos}`
      : `${algo}`};
  box-shadow: 0.4rem 0.4rem
    ${(props) =>
      props.type === "machine learning"
        ? `${machine_learning}`
        : props.type === "deep learning"
        ? `${deep_learning}`
        : props.type === "redes neuronales"
        ? `${redes_neuronales}`
        : props.type === "python"
        ? `${python}`
        : props.type === "modelos"
        ? `${modelos}`
        : `${algo}`};
  border: 2px solid
    ${(props) =>
      props.type === "machine learning"
        ? `${machine_learning}`
        : props.type === "deep learning"
        ? `${deep_learning}`
        : props.type === "redes neuronales"
        ? `${redes_neuronales}`
        : props.type === "python"
        ? `${python}`
        : props.type === "modelos"
        ? `${modelos}`
        : `${algo}`};

  &:hover {
    cursor: ${(props) => (props.post ? "" : "pointer")};
    opacity: ${(props) => (props.post ? "1" : "0.9")};
  }
`;

export const Date = styled.div`
  color: ${grey};
  font-size: 0.75rem;
  font-family: "Space Mono", monospace;
  letter-spacing: 0.5px;
  border-right: 2px solid ${grey};
  padding-right: 0.6rem;
`;

export const Icon = styled(FontAwesomeIcon)`
  margin-right: 0.6rem;
  font-size: 0.7rem;
  margin-top: 0.25rem;
  color: ${white};
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 0.8rem;
  padding-bottom: 1.2rem;
  padding-left: 0.1rem;
`;
