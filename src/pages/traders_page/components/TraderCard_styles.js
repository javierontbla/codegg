import styled from "styled-components";

import { colors } from "../../../colors/colors";
import { fonts } from "../../../fonts/fonts";

const { grey, black, white } = colors;
const { name_font, open_sans } = fonts;

export const TraderCardContainer = styled.div`
  border: 1px solid ${grey};
  width: 100%;
  height: fit-content;
  margin: 1rem 0rem 1rem 0rem;
  border-radius: 0.25rem;
  padding: 0rem 0rem 0rem 0rem;
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
  padding: 1.5rem 1.5rem 1.5rem 1.5rem;
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
  align-items: center;
  width: 100%;
  height: fit-content;
  border-top: 0.5px solid ${grey};
  padding: 0.5rem 1rem 0.5rem 1rem;
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
  line-height: 100%;
  margin: 0.25rem 0rem 0.55rem 0rem;
`;

export const BadgesContainer = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: row;
  margin: 0rem 0rem 0rem -0.2rem;
`;

export const NameLink = styled.div`
  font-size: 0.8rem;
  margin: -0.5rem 0rem 0rem 0rem;
  color: ${grey};
  font-family: ${open_sans};
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
  padding: 0.5rem 1rem 0.5rem 1rem;
  border-top: 0.5px solid ${grey};
  color: ${black};
  line-height: 125%;
`;

export const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding: 0.6rem 0.5rem 1.1rem 0.5rem;
`;

export const ViewButton = styled.div`
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
  padding: 0.2rem 0.65rem 0.2rem 0.65rem;
  color: ${white};
  font-size: 0.8rem;
  border-radius: 0.15rem;
  margin: 0rem 0rem 0rem 0rem;
  letter-spacing: 1px;
  font-weight: 600;
`;

export const Subscribers = styled.div`
  display: flex;
  align-items: center;
  height: fit-content;
  width: fit-content;
  color: ${grey};
  font-family: ${open_sans};
  letter-spacing: 0.5px;
  font-weight: 600;
  font-size: 0.8rem;
`;
