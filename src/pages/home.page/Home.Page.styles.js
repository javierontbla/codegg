import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { colors } from "../../colors/colors";
import { fonts } from "../../fonts/fonts";

const { primary_font } = fonts;

const {
  green,
  grey,
  black,
  machine_learning,
  deep_learning,
  redes_neuronales,
  python,
  modelos,
  algo,
} = colors;

export const Container = styled.div``;

export const LoadMore = styled.button`
  width: fit-content;
  border: 0.5px solid ${grey};
  border-radius: 2.5px;
  background: transparent;
  margin: 0px 0px 35px 35px;
  font-family: ${primary_font};
  font-size: 1rem;
  letter-spacing: 0.5px;
  color: black;
  padding: 0px 10px 0px 10px;
  font-size: 20px;
  height: 45px;

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
  justify-content: flex-start;
  width: 100%;
`;

export const AvailableTagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: transparent;
  width: 100%;
  height: 90px;
  border-bottom: 0.5px solid ${grey};
  justify-content: left;
  padding: 0px 10px 0px 10px;

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

export const FilteredCategories = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  height: fit-content;
  padding: 22.5px 10px 0px 10px;

  @media (max-width: 500px) {
    padding-left: ${(props) => (props.post ? "0rem" : "")};
    margin-left: ${(props) => (props.post ? "-0.3rem" : "")};
    padding-top: ${(props) => (props.post ? "" : "0.6rem")};
  }
`;

export const NoMoreButton = styled.button`
  visibility: visible;
  width: fit-content;
  border: 0.5px solid ${grey};
  border-radius: 2.5px;
  background: transparent;
  font-family: ${primary_font};
  font-size: 20px;
  letter-spacing: 0.5px;
  color: ${black};
  margin: 0px 0px 35px 35px;
  padding: 0px 10px 0px 10px;
  height: 45px;
  transition: visibility 0.5s;

  @media (max-width: 500px) {
    width: fit-content;
  }

  &:hover {
    cursor: default;
  }
`;

export const HomeIcon = styled(FontAwesomeIcon)`
  font-size: 38px;
  color: ${green};
  margin: 0px 10px 0px 10px;
  padding: 0;
`;
