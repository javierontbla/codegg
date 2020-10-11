import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { colors } from "../../colors/colors";

const {
  white,
  lightBlack,
  darkBlack,
  machine_learning,
  deep_learning,
  redes_neuronales,
  python,
  modelos,
  algo,
} = colors;

export const Container = styled.div``;

export const Des = styled.div`
  color: ${white};
  border-bottom: 2px solid ${darkBlack};
  padding-bottom: 0.4rem;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  font-family: "Space Mono", monospace;
  font-size: 1rem;
  opacity: 0.9;
  letter-spacing: 0.5px;

  @media (max-width: 500px) {
    margin-top: 3rem;
  }
`;

export const LoadMore = styled.button`
  width: fit-content;
  border: 2px solid ${darkBlack};
  box-shadow: 0.4rem 0.4rem ${darkBlack};
  border-radius: 0.2rem;
  background: ${lightBlack};
  margin: 0 auto;
  font-family: "Space Mono", monospace;
  margin-top: 3rem;
  margin-bottom: 3.4rem;
  font-size: 1rem;
  letter-spacing: 0.5px;
  color: ${white};
  padding: 0.4rem;
  padding-left: 0.6rem;
  padding-right: 0.6rem;
  padding-bottom: 0.6rem;

  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }

  &:focus {
    outline: none;
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

  @media (max-width: 500px) {
    padding-top: 0.5rem;
    padding-bottom: 1rem;
  }
`;

export const Icon = styled(FontAwesomeIcon)`
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
  font-size: ${(props) => (props.cross ? "1rem" : "1.5rem")};

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
  font-size: 1rem;
  letter-spacing: 1px;
  height: fit-content;
  margin: 0.5rem;
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
    cursor: ${(props) => (props.search ? "pointer" : "auto")};
    opacity: ${(props) => (props.search ? "0.9" : "1")};
  }
`;

export const Message = styled.div`
  width: fit-content;
  border: 2px solid ${darkBlack};
  box-shadow: 0.4rem 0.4rem ${darkBlack};
  border-radius: 0.2rem;
  background: ${lightBlack};
  margin: 0 auto;
  font-family: "Space Mono", monospace;
  margin-top: 3rem;
  margin-bottom: 3.4rem;
  font-size: 1rem;
  letter-spacing: 0.5px;
  color: ${white};
  padding: 0.4rem;
  padding-left: 0.6rem;
  padding-right: 0.6rem;

  @media (max-width: 500px) {
    width: fit-content;
  }
`;
