import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { colors } from "../../colors/colors";

const {
  darkBlack,
  machine_learning,
  deep_learning,
  redes_neuronales,
  python,
  modelos,
  algo,
} = colors;

export const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
  border-radius: 0.2rem;
  padding: 0.4rem;
  padding-right: 0.6rem;
  padding-left: 0.6rem;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  letter-spacing: 1px;
  height: fit-content;
  margin: 0.4rem;
  box-shadow: 0.4rem 0.4rem ${darkBlack};
  border: 2px solid ${darkBlack};
  transition: border 0.4s;
  color: ${(props) =>
    props.name === "machine learning"
      ? `${machine_learning}`
      : props.name === "deep learning"
      ? `${deep_learning}`
      : props.name === "redes neuronales"
      ? `${redes_neuronales}`
      : props.name === "python"
      ? `${python}`
      : props.name === "modelos"
      ? `${modelos}`
      : `${algo}`};

  &:hover {
    cursor: pointer;
    opacity: 0.9;
    border: 2px solid
      ${(props) =>
        props.name === "machine learning"
          ? `${machine_learning}`
          : props.name === "deep learning"
          ? `${deep_learning}`
          : props.name === "redes neuronales"
          ? `${redes_neuronales}`
          : props.name === "python"
          ? `${python}`
          : props.name === "modelos"
          ? `${modelos}`
          : `${algo}`};
  }
`;

export const IconContainer = styled.div`
  display: ${(props) => (props.filter ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-left: 0.5rem;
  margin-right: 0.1rem;
  width: fit-content;
  height: fit-content;
`;

export const Icon = styled(FontAwesomeIcon)`
  color: ${(props) =>
    props.name === "machine learning"
      ? `${machine_learning}`
      : props.name === "deep learning"
      ? `${deep_learning}`
      : props.name === "redes neuronales"
      ? `${redes_neuronales}`
      : props.name === "python"
      ? `${python}`
      : props.name === "modelos"
      ? `${modelos}`
      : `${algo}`};
  font-size: 1rem;
`;
