import styled from "styled-components";

import { colors } from "../../../../colors/colors";
import { fonts } from "../../../../fonts/fonts";

const { grey, white, black } = colors;
const { name_font, name_link_font, open_sans } = fonts;

export const TopInvestorContainer = styled.div`
  width: 100%;
  margin: 0rem 0rem 0rem 0rem;
  border: 0.5px solid ${grey};
  border-radius: 0.25rem;
  background: ${white};
  box-shadow: 1.5px 1.5px 1.5px -1px #ced4da;
  transition: box-shadow 0.4s;
  margin: 0rem 0rem 0.5rem 0rem;

  &:first-child {
    margin: 0rem 0rem 0.5rem 0rem !important;
  }

  &:hover {
    cursor: pointer;
    box-shadow: 3px 3px 3px -1.5px #ced4da;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 1rem 0.75rem 1rem 0.75rem;
`;

export const RankContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin: 0rem 0rem 0rem -0.2rem;
`;

export const ProfileImage = styled.div`
  border-radius: 50%;
  border: none;
  width: 3.55rem;
  height: 3.55rem;
  margin: 0rem 1rem 0rem 0rem;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.profile_image_url});
  background-repeat: no-repeat;
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
`;

export const Name = styled.div`
  color: ${black};
  font-family: ${name_font};
  font-size: 1.3rem;
  letter-spacing: 0.25px;
  height: fit-content;
  line-height: 100%;
  margin: 0.25rem 0rem 0.3rem 0rem;
  text-transform: capitalize;
`;

export const NameLink = styled.div`
  font-family: ${name_link_font};
  font-size: 0.6rem;
  font-weight: 500;
  letter-spacing: 1px;
  margin: -0.25rem 0rem 0rem 0rem;
  color: ${grey};
`;

export const MiddleContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0rem 0.35rem 0.85rem 0.35rem;
`;

export const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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

export const Subscribers = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: ${open_sans};
  font-size: 0.7rem;
  color: ${grey};
  letter-spacing: 0.5px;
  font-weight: 500;
  height: fit-content;
`;
