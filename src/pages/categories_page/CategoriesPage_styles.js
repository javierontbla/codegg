import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { colors } from "../../colors/colors";
import { fonts } from "../../fonts/fonts";

const { button_font } = fonts;

const { grey, black } = colors;

export const Container = styled.div``;

export const LoadMoreButton = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  border: 1px solid ${grey};
  border-radius: 1rem;
  background: transparent;
  margin: 0 auto;
  font-family: ${button_font};
  font-size: 1rem;
  letter-spacing: 1px;
  color: ${black};
  padding: 0px 0.65rem 0px 0.65rem;
  height: 2rem;

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

export const NoMoreButton = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  border: none;
  background: transparent;
  font-size: 2.2rem;
  color: ${grey};
  margin: 0 auto;
  padding: 0rem;
  height: 2rem;

  @media (max-width: 500px) {
    width: fit-content;
  }

  &:hover {
    cursor: default;
  }
`;
