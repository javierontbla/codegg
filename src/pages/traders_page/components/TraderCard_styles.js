import styled from "styled-components";

import { colors } from "../../../colors/colors";
import { fonts } from "../../../fonts/fonts";

const { grey, dark_grey, black } = colors;
const { name_font, name_link_font, price_font } = fonts;

export const TraderCardContainer = styled.div`
  border: 1px solid ${grey};
  width: 20rem;
  height: fit-content;
  margin: 0.5rem 0.5rem 0.5rem 0.5rem;
  border-radius: 0.15rem;
  padding: 0rem 0.5rem 0rem 0.5rem;
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem 1rem 1rem 1rem;
  width: 100%;
  height: 35%;
`;

export const MiddleContainer = styled.div`
  width: 100%;
  height: 50%;
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
  border-top: 0.5px solid ${grey};
  padding: 0.5rem 0.25rem 0.5rem 0.25rem;
`;

export const ImgContainer = styled.div`
  border-radius: 50%;
  border: 0.5px solid ${grey};
  width: 5rem;
  height: 5rem;
  margin: 0rem 1rem 0rem 0rem;

  background-size: cover;
  background-position: center;
  background-image: url(https://images.unsplash.com/photo-1602525962574-3bc829fbed3c?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80);
  background-repeat: no-repeat;
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: fit-content;
  width: fit-content;
  font-family: ${name_font};
  padding: 0rem 0rem 0rem 0rem;
  font-size: 2rem;
  color: ${black};
`;

export const NameLink = styled.div`
  font-size: 0.8rem;
  margin: -0.25rem 0rem 0rem 0rem;
  color: ${dark_grey};
  font-family: ${name_link_font};
  letter-spacing: 1px;
  font-weight: 600;

  &:hover {
    cursor: pointer;
  }
`;

export const DescriptionContainer = styled.div`
  width: 100%;
  height: fit-content;
  font-size: 0.9rem;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  border-top: 0.5px solid ${grey};
  color. ${black};
  letter-spacing: 0.25px;
`;

export const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0.5rem 0rem 1rem 0rem;
`;

export const Price = styled.div`
  height: fit-content;
  width: fit-content;
  color: ${dark_grey};
  font-family: ${name_link_font};
  letter-spacing: 1px;
  font-weight: 600;
`;

export const Rating = styled.div`
  height: fit-content;
  width: fit-content;
  color: ${dark_grey};
  font-family: ${name_link_font};
  letter-spacing: 1px;
  font-weight: 600;
`;
