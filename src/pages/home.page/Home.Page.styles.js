import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { colors } from "../../colors/colors";
import { fonts } from "../../fonts/fonts";

const { primary_font } = fonts;

const { green, grey, black, white } = colors;

export const Container = styled.div``;

export const LoadMoreButton = styled.button`
  width: fit-content;
  border: 1px solid ${grey};
  border-radius: 2.5px;
  background: transparent;
  margin: 0px 0px 35px 35px;
  font-family: ${primary_font};
  font-size: 1rem;
  letter-spacing: 0.5px;
  color: ${green};
  padding: 0px 10px 0px 10px;
  font-size: 18px;
  height: 45px;
  transition: color 0.2s, background 0.2s, border 0.2s;

  &:hover {
    cursor: pointer;
    border: 1px solid ${green};
    color: ${white};
    background: ${green};
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

export const HomeIcon = styled(FontAwesomeIcon)`
  font-size: 38px;
  color: ${green};
  margin: 0px 10px 0px 10px;
  padding: 0;

  &:hover {
    cursor: pointer;
  }
`;

export const AvailableCategories = styled.div`
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
  color: ${green};
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
