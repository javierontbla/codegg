import styled from "styled-components";

import { colors } from "../../colors/colors";
import { fonts } from "../../fonts/fonts";

const { button_font } = fonts;

const { grey, black, white } = colors;

export const ArticlesPageContainer = styled.div`
  padding: 0rem 0rem 0rem 0rem;
  margin: 1.6rem 0rem 0rem 0rem;
`;

export const Container = styled.div`
  margin: 0rem 0rem 0rem 0rem;
`;

export const AvailableCategoriesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: transparent;
  width: 100%;
  height: fit-content;
  border-bottom: 0.5px solid ${grey};
  justify-content: left;
  padding: 0rem 0rem 0.35rem 0rem;
  margin: 0rem 0rem 0rem 0rem;

  @media (max-width: 500px) {
  }
`;

export const AvailableCategoriesActiveContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  height: fit-content;
  padding: 1rem 0rem 0rem 0rem;

  @media (max-width: 500px) {
  }
`;

export const LoadMoreButton = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  border: 1px solid ${grey};
  border-radius: 1rem;
  background: ${white};
  margin: 0 auto;
  font-family: ${button_font};
  font-size: 0.9rem;
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

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;
