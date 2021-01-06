import styled, { css } from "styled-components";

import { colors } from "../../../../colors/colors";
import { fonts } from "../../../../fonts/fonts";

const { black, white, grey } = colors;
const { source_sans_pro, roboto, open_sans } = fonts;

const ContainerStyles = css`
  width: 100%;
  height: fit-content;
  background: ${white};
  border: 1px solid ${grey};
  border-radius: 0.35rem;
  box-shadow: 1.5px 1.5px 1.5px -1px #ced4da;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 500px) {
  }
`;

export const LeftContainer = styled.div`
  ${ContainerStyles};
  margin: 0rem 1.5rem 0rem 0rem;
  padding: 0.75rem 1rem 0.75rem 1rem;
`;

export const TitleArticle = styled.div`
  font-family: ${source_sans_pro};
  font-size: 2.35rem;
  line-height: 100%;
  text-align: left;
`;

export const Body = styled.div`
  color: ${black};
  font-size: 1rem;
  line-height: 130%;
  font-family: ${roboto};
  margin: 1.5rem 0rem 0rem 0rem;
`;

export const RightContainer = styled.div`
  width: 25rem;
`;

export const AuthorContainer = styled.div`
  ${ContainerStyles};
  padding: 0rem 0rem 0rem 0rem;
  margin: 0rem 0rem 1.5rem 0rem;
`;

export const ProfileBoxContainer = styled.div`
  width: 100%;
  height: fit-content;
  padding: 0.65rem 0.65rem 0rem 0.65rem;
`;

export const TrendsContainer = styled.div`
  width: 100%;
  padding: 0.1rem 0.65rem 0.1rem 0.65rem;
  border-top: 0.5px solid ${grey};
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
  color: ${black};
  font-size: 0.65rem;
  margin: 0rem 0.25rem 0rem 0.35rem;
  font-family: ${open_sans};
  font-weight: 500;
  letter-spacing: 0.25px;
  opacity: 0.85;
`;

export const Description = styled.div`
  font-size: 0.9rem;
  line-height: 130%;
  font-family: ${roboto};
  padding: 1rem 0.65rem 0.65rem 0.65rem;
`;

export const CategoriesContainer = styled.div`
  ${ContainerStyles};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0rem 0rem 0rem 0rem;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
`;
