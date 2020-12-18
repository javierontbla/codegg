import styled from "styled-components";

import { colors } from "../../../../colors/colors";
import { fonts } from "../../../../fonts/fonts";

const { grey, white, black } = colors;
const { name_font, name_link_font, open_sans } = fonts;

export const TopInvestorContainer = styled.div`
  width: 100%;
  margin: 0.5rem 0rem 0.5rem 0rem;
  border: 0.5px solid ${grey};
  border-radius: 0.25rem;
  background: ${white};
  box-shadow: 1.5px 1.5px 1.5px -1px #ced4da;
  transition: box-shadow 0.4s;

  &:hover {
    cursor: pointer;
    box-shadow: 2.5px 2.5px 2.5px -1.25px #ced4da;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 1rem 1rem 1rem 1rem;
`;

export const MiddleContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.1rem 0.4rem 1.1rem 0.4rem;
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.65rem 0.75rem 0.65rem 0.75rem;
  border-top: 0.5px solid ${grey};
`;

export const ProfileImg = styled.div`
  border-radius: 50%;
  border: none;
  width: 3.2rem;
  height: 3.2rem;
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
  flex-wrap: nowrap;
  margin: 0rem 0rem 0rem -0.2rem;
  font-size: 0.55rem;
`;

export const Name = styled.div`
  color: ${black};
  font-family: ${name_font};
  font-size: 1.2rem;
  letter-spacing: 0.25px;
  height: fit-content;

  line-height: 100%;
  margin: 0.25rem 0rem 0.3rem 0rem;
`;

export const NameLink = styled.div`
  font-family: ${name_link_font};
  font-size: 0.6rem;
  font-weight: 600;
  letter-spacing: 1px;
  margin: -0.25rem 0rem 0rem 0rem;
  color: ${grey};
`;

export const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Subscribers = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: ${open_sans};
  font-size: 0.7rem;
  color: ${grey};
  letter-spacing: 0.5px;
  font-weight: 600;
  height: fit-content;
`;

export const ClassButton = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  border: none;
  height: fit-content;
  background: rgb(33, 33, 32);
  background: linear-gradient(
    90deg,
    rgba(33, 33, 32, 1) 5%,
    rgba(25, 25, 24, 1) 80%
  );
  font-family: ${open_sans};
  padding: 0.45rem 0.65rem 0.45rem 0.65rem;
  color: ${white};
  font-size: 0.7rem;
  border-radius: 0.15rem;
  margin: 0rem 0rem 0rem 0rem;
  letter-spacing: 1px;
  font-weight: 600;
  line-height: 100%;
`;
