import styled from "styled-components";

import { colors } from "../../../colors/colors";
import { fonts } from "../../../fonts/fonts";

const { grey, dark_grey, white, yellow, black } = colors;
const {
  name_font,
  name_link_font,
  button_font,
  price_font,
  rating_font,
  badge_font,
} = fonts;

export const TopTraderCardContainer = styled.div`
  width: 100%;
  margin: 0.5rem 0rem 0rem 0rem;
  border: 0.5px solid ${grey};
  border-radius: 0.5rem;
  background: rgb(33, 33, 32);
  background: linear-gradient(
    90deg,
    rgba(33, 33, 32, 1) 5%,
    rgba(25, 25, 24, 1) 80%
  );

  &:hover {
    cursor: pointer;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
`;

export const MiddleContainer = styled.div`
  width: 100%;
  padding: 0.75rem 0.25rem 0.75rem 0.25rem;
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0.25rem 0.5rem 0.5rem 0.5rem;
`;

export const ImgContainer = styled.div`
  border-radius: 50%;
  border: none;
  width: 3rem;
  height: 3rem;
  margin: 0rem 1rem 0rem 0rem;
  background-size: cover;
  background-position: center;
  background-image: url(https://images.unsplash.com/photo-1602525962574-3bc829fbed3c?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80);
  background-repeat: no-repeat;
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
`;

export const BadgesContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0rem 0rem 0rem -0.2rem;
`;

export const Badge = styled.div`
  color: ${black};
  font-family: ${badge_font};
  font-size: 0.6rem;
  height: fit-content;
  width: fit-content;
  border: none;
  padding: 0.05rem 0.3rem 0.05rem 0.3rem;
  margin: 0rem 0.2rem 0rem 0.2rem;
  border-radius: 2rem;
  background: rgb(147, 150, 153);
  background: linear-gradient(
    90deg,
    rgba(147, 150, 153, 1) 10%,
    rgba(168, 172, 176, 1) 95%
  );
`;

export const Name = styled.div`
  color: ${white};
  font-family: ${name_font};
  font-size: 1.25rem;
  letter-spacing: 0.25px;
  height: fit-content;

  margin: -0.25rem 0rem 0rem 0rem;
`;

export const NameLink = styled.div`
  font-family: ${name_link_font};
  font-size: 0.6rem;
  font-weight: 600;
  letter-spacing: 1px;
  margin: -0.25rem 0rem 0rem 0rem;
  color: ${dark_grey};
`;

export const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Category = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 2rem;
  padding: 0rem 0.5rem 0rem 0.5rem;
  margin: 0rem 0.25rem 0rem 0.25rem;
  font-family: ${button_font};
  height: 1.6rem;
  font-size: 0.8rem;
  background: rgb(226, 180, 70);
  background: linear-gradient(
    90deg,
    rgba(226, 180, 70, 1) 8%,
    rgba(247, 205, 103, 1) 93%
  );
  border: none;
  color: ${black};
  font-weight: 600;
  letter-spacing: 0.5px;
`;

export const Rating = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: ${rating_font};
  font-size: 0.8rem;
  color: ${white};
  letter-spacing: 0.5px;
  font-weight: 600;
  height: fit-content;
`;

export const Price = styled.div`
  font-family: ${price_font};
  font-size: 0.8rem;
  color: ${white};
  letter-spacing: 0.5px;
  font-weight: 600;
`;

export const AllRatings = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 0.6rem;
  margin: 0rem 0rem 0rem 0.25rem;
  color: ${dark_grey};
`;
