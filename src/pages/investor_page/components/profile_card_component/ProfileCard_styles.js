import styled from "styled-components";

import { colors } from "../../../../colors/colors";
import { fonts } from "../../../../fonts/fonts";

const { white, grey, grey_2, black } = colors;
const { source_sans_pro, open_sans, roboto } = fonts;

export const ProfileCardContainer = styled.div`
  width: 100%;
  height: fit-content;
  border: 1px solid ${grey};
  border-radius: 0.15rem;
  background: ${white};
  box-shadow: 0px 1.5px 1.5px -1px #ced4da;
`;

export const TopContainer = styled.div`
  height: fit-content;
`;

export const CoverImage = styled.div`
  width: 100%;
  height: 13.25rem;
  background-size: cover;
  background-position: center;
  background-image: url(https://images.unsplash.com/photo-1607453813894-21f7b5cf201a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80);
  background-repeat: no-repeat;
  border-top-left-radius: 0.1rem;
  border-top-right-radius: 0.1rem;
`;

export const ProfileImage = styled.div`
  z-index: 1;
  width: 8.75rem;
  height: 8.75rem;
  border-radius: 50%;
  border: 2.5px solid ${white};
  margin: -6.5rem 0rem 1rem 1rem;
  background-size: cover;
  background-position: center;
  background-image: url(https://images.unsplash.com/photo-1508908324153-d1a219719814?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80);
  background-repeat: no-repeat;
`;

export const RankContainer = styled.div`
  display: flex;
  width: 100;
  height: fit-content;
  margin: 0rem 0rem 0.5rem 0rem;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  font-family: ${source_sans_pro};
  font-size: 2rem;
  color: ${black};
  padding: 0rem 0rem 0rem 0rem;
  line-height: 100%;
  margin: 0rem 0rem 0.15rem 0rem;
`;

export const Username = styled.div`
  font-family: ${open_sans};
  font-size: 0.8rem;
  color: ${grey};
  font-weight: 500;
  margin: 0rem 0rem 1rem 0rem;
  line-height: 100%;
  letter-spacing: 1px;
`;

export const MiddleContainer = styled.div`
  height: fit-content;
  padding: 0rem 0.75rem 0rem 0.75rem;
`;

export const Description = styled.div`
  font-size: ${roboto};
  font-size: 0.9rem;
  color: ${black};
  line-height: 130%;
  margin: 0rem 0rem 1.25rem 0rem;
`;

export const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0rem 0rem 0rem 0rem;
  margin: 0rem 0rem 1.5rem -0.25rem;
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: fit-content;
  padding: 0.6rem 0.75rem 0.6rem 0.75rem;
  border-top: 0.5px solid ${grey};
`;

export const Subscribers = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-family: ${roboto};
  font-weight: 500;
  padding: 0.25rem 0.35rem 0.25rem 0.35rem;
  letter-spacing: 0.75px;
  margin: 0rem 0rem 0rem 0rem;
  height: fit-content;
  width: fit-content;
  border-radius: 0.15rem;
  line-height: 100%;
  background: ${grey_2};
  color: ${black};
`;
