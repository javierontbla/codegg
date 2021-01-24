import styled, { css } from "styled-components";

import { colors } from "../../../../colors/colors";
import { fonts } from "../../../../fonts/fonts";

const { black, white, grey, grey_2 } = colors;
const { source_sans_pro, roboto, open_sans } = fonts;

const ContainerStyles = css`
  width: 100%;
  height: fit-content;
  background: ${black};
  border-radius: 15px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 500px) {
  }
`;

export const LeftContainer = styled.div`
  ${ContainerStyles};
  margin: 0rem 2rem 0rem 0rem;
  padding: 2rem 2rem 2rem 2rem;
  width: calc(100% - 18.5rem);
`;

export const TitleArticle = styled.div`
  font-family: ${source_sans_pro};
  font-size: 2.35rem;
  line-height: 100%;
  text-align: left;
  color: ${white};
`;

export const Body = styled.div`
  font-size: 1rem;
  line-height: 120%;
  font-family: ${roboto};
  margin: 4rem 0rem 0rem 0rem;
`;

export const RightContainer = styled.div`
  width: 18.5rem;
`;

export const AuthorContainer = styled.div`
  ${ContainerStyles};
  padding: 0rem 0rem 0rem 0rem;
  margin: 0rem 0rem 1rem 0rem;
`;

export const ProfileBoxContainer = styled.div`
  width: 100%;
  height: fit-content;
  padding: 1.25rem 1.25rem 1.25rem 1.25rem;
`;

export const TrendsContainer = styled.div`
  width: 100%;
  padding: 0.2rem 1rem 0.2rem 1rem;
  border-top: 0.5px solid ${grey_2};
`;

export const Trends = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled.img`
  width: 1.85rem;
  height: 1.85rem;
  margin: 0rem 0rem 0rem 0rem;
`;

export const Votes = styled.div`
  width: fit-content;
  color: ${grey};
  font-size: 0.65rem;
  margin: 0rem 0.4rem 0rem 0.5rem;
  font-family: ${open_sans};
  font-weight: 500;
  letter-spacing: 0.25px;
  opacity: 0.85;
`;

export const Description = styled.div`
  font-size: 1rem;
  line-height: 120%;
  font-family: ${roboto};
  padding: 0rem 1.25rem 1.5rem 1.25rem;
  color: ${white};
  text-align: left;
`;

export const CategoriesContainer = styled.div`
  ${ContainerStyles};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0rem 0rem 0rem 0rem;
  padding: 0.5rem 0rem 0.5rem 1rem;
`;
