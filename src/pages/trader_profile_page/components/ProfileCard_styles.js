import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { colors } from "../../../colors/colors";
import { fonts } from "../../../fonts/fonts";

const { white, grey, black } = colors;
const { name_font, name_link_font, description_font, button_font } = fonts;

export const ProfileCardContainer = styled.div`
  width: 100%;
  height: fit-content;
  border: 1px solid ${grey};
  border-radius: 0.5rem;
  background: ${white};
`;

export const TopContainer = styled.div`
  height: fit-content;
`;

export const CoverPhoto = styled.div`
  width: 100%;
  height: 15rem;
  width: 100%;
  height: 12rem;
  background-size: cover;
  background-position: center;
  background-image: url(https://images.unsplash.com/photo-1607453813894-21f7b5cf201a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80);
  background-repeat: no-repeat;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
`;

export const ProfileImage = styled.div`
  z-index: 1;
  width: 8.75rem;
  height: 8.75rem;
  border-radius: 50%;
  border: 2.5px solid ${white};
  margin: -6.5rem 0rem 0rem 1.8rem;
  background-size: cover;
  background-position: center;
  background-image: url(https://images.unsplash.com/photo-1508908324153-d1a219719814?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80);
  background-repeat: no-repeat;
`;

export const BadgesContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0.75rem 0rem 0rem -0.25rem;
`;

export const Name = styled.div`
  display: flex;
  align-items: center;
  font-family: ${name_font};
  font-size: 2.2rem;
  color: ${black};
  padding: 0rem 0rem 0rem 0rem;
  line-height: 100%;
  margin: 0.35rem 0rem 0.35rem 0rem;
`;

export const NameLink = styled.div`
  font-family: ${name_link_font};
  font-size: 0.8rem;
  color: ${grey};
  font-weight: 600;
  margin: -0.25rem 0rem 0rem 0rem;
  letter-spacing: 1px;
`;

export const MiddleContainer = styled.div`
  height: fit-content;
  padding: 0rem 1rem 0rem 1rem;
`;

export const Description = styled.div`
  font-size: ${description_font};
  font-size: 1rem;
  color: ${black};
  line-height: 125%;
  margin: 1rem 0rem 1rem 0rem;
`;

export const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.6rem 0.6rem 1.6rem 0rem;
  margin: 0rem 0rem 0rem -0.4rem;
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: fit-content;
  padding: 0.55rem 1rem 0.55rem 1rem;
  border-top: 0.5px solid ${grey};
`;

export const SocialMediaContainer = styled.div`
  width: fit-content;
  height: fit-content;
  margin: 0rem 0rem 0rem -0.65rem;
`;

export const SocialMediaIcon = styled(FontAwesomeIcon)`
  color: ${black};
  margin: 0rem 0.65rem 0rem 0.65rem;
  font-size: 1.1rem;
`;

export const SubscribeButton = styled.div`
  display: flex;
  align-items: center;
  height: 2rem;
  width: fit-content;
  background: rgb(33, 33, 32);
  background: linear-gradient(
    90deg,
    rgba(33, 33, 32, 1) 5%,
    rgba(25, 25, 24, 1) 80%
  );
  color: ${white};
  padding: 0rem 0.65rem 0rem 0.65rem;
  border-radius: 0.15rem;
  font-family: ${button_font};
  font-size: 0.8rem;
  letter-spacing: 1px;
  font-weight: 600;

  &:hover {
    cursor: pointer;
    opacity: 0.95;
  }
`;
