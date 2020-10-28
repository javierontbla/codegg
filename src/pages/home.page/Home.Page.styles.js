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
  padding-bottom: 0.4rem;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  font-family: "Space Mono", monospace;
  font-size: 0.9rem;
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
  font-family: "Roboto", sans-serif;
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
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  background: transparent;
  border-bottom: 2px solid ${darkBlack};
  border-top: 2px solid ${darkBlack};
  width: 100%;
  height: fit-content;
  justify-content: left;
  padding-top: 0.4rem;
  padding-bottom: 0.8rem;

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
  padding-top: ${(props) => (props.post ? "0rem" : "0.5rem")};
  padding-left: ${(props) => (props.post ? "0.5rem" : "")};

  @media (max-width: 500px) {
    padding-left: ${(props) => (props.post ? "0rem" : "")};
    margin-left: ${(props) => (props.post ? "-0.3rem" : "")};
    padding-top: ${(props) => (props.post ? "" : "0.6rem")};
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

  @media (max-width: 500px) {
    width: fit-content;
  }
`;
