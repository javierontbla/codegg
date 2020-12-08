import styled from "styled-components";

import { colors } from "../../../colors/colors";
import { fonts } from "../../../fonts/fonts";

const { grey, dark_grey, black, green, white } = colors;
const {
  name_font,
  name_link_font,
  price_font,
  rating_font,
  badge_font,
} = fonts;

export const TraderCardContainer = styled.div`
  border: 1px solid ${grey};
  width: 50%;
  height: fit-content;
  margin: 0.5rem 0.5rem 0.5rem 0.5rem;
  border-radius: 0.5rem;
  padding: 0rem 0.5rem 0rem 0.5rem;
  background: ${white} !important;
  box-shadow: 3px 3px 3px -1px #ced4da;
  transition: box-shadow 0.2s;

  &:hover {
    cursor: pointer;
    box-shadow: 6.5px 6.5px 6.5px -3px #ced4da;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1.5rem 1rem 1.5rem 1rem;
  width: 100%;
  height: fit-content;
`;

export const MiddleContainer = styled.div`
  width: 100%;
  height: fit-content;
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
  border-top: 0.5px solid ${grey};
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
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

export const Name = styled.div`
  padding: 0rem 0rem 0rem 0rem !important;
  margin: -0.4rem 0rem 0rem 0rem;
`;

export const BadgesContainer = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: row;
  margin: 0rem 0rem 0rem -0.2rem;
`;

export const Badge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${black};
  font-family: ${badge_font};
  font-size: 0.55rem;
  height: fit-content;
  width: fit-content;
  border: none;
  border-radius: 0.25rem;
  background: rgb(254, 206, 93);
  background: linear-gradient(
    45deg,
    rgba(254, 206, 93, 1) 0%,
    rgba(235, 191, 84, 1) 90%
  );
  padding: 0.1rem 0.4rem 0.1rem 0.4rem;
  letter-spacing: 0.25px;
  margin: 0rem 0.2rem 0rem 0.2rem;
  font-weight: 600;
`;

export const NameLink = styled.div`
  font-size: 0.8rem;
  margin: -0.5rem 0rem 0rem 0rem;
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
  font-size: 1rem;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  border-top: 0.5px solid ${grey};
  color: ${black};
  letter-spacing: 0.25px;
`;

export const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding: 0.6rem 0rem 1.1rem 0rem;
`;

export const Price = styled.div`
  height: fit-content;
  width: fit-content;
  color: ${dark_grey};
  font-family: ${price_font};
  letter-spacing: 1px;
  font-weight: 600;
  font-size: 0.9rem;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  height: fit-content;
  width: fit-content;
  color: ${black};
  font-family: ${rating_font};
  letter-spacing: 1px;
  font-weight: 600;
  font-size: 0.9rem;
`;

export const AllRatings = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 0.6rem;
  margin: 0rem 0rem 0rem 0.25rem;
  color: ${grey};
`;
