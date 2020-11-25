import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { colors } from "../../colors/colors";
import { fonts } from "../../fonts/fonts";

const { primary_font } = fonts;

const { grey, black } = colors;

export const Container = styled.div``;

export const LoadMoreButton = styled.button`
  width: fit-content;
  border: 1px solid ${grey};
  border-radius: 1rem;
  background: transparent;
  margin: 0 auto;
  font-family: ${primary_font};
  font-size: 1rem;
  letter-spacing: 0.5px;
  color: ${black};
  padding: 0px 0.55rem 0px 0.55rem;
  height: 2rem;
  transition: opacity 0.15s;

  &:hover {
    cursor: pointer;
    opacity: 0.95;
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
  font-size: 2rem;
  color: ${black};
  margin: 0rem 0.5rem 0rem 0.5rem;
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
  height: 4rem;
  border-bottom: 0.5px solid ${grey};
  justify-content: left;
  padding: 0rem 0rem 0rem 0rem;

  @media (max-width: 500px) {
  }
`;

export const FilteredCategories = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  height: fit-content;
  padding: 1rem 0rem 0rem 0rem;

  @media (max-width: 500px) {
  }
`;

export const NoMoreButton = styled.button`
  visibility: visible;
  width: fit-content;
  border: 0.5px solid ${grey};
  border-radius: 1rem;
  background: transparent;
  font-family: ${primary_font};
  font-size: 1rem;
  letter-spacing: 0.5px;
  color: ${black};
  margin: 1rem 0rem 2rem 0.5rem;
  padding: 0rem 0.55rem 0rem 0.55rem;
  height: 2rem;
  transition: visibility 0.5s;

  @media (max-width: 500px) {
    width: fit-content;
  }

  &:hover {
    cursor: default;
  }
`;
