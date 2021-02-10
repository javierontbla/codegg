import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import { colors } from "../../../../colors/colors";
import { fonts } from "../../../../fonts/fonts";

const { black, white, grey, grey_2 } = colors;
const { montserrat, roboto, open_sans } = fonts;

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
    flex-direction: column;
    margin: -2rem 0rem 0rem 0rem;
  }
`;

export const HyperLink = styled(Link)`
  color: ${grey};
  &:hover {
    color: ${grey};
    text-decoration: none;
  }
`;

export const LeftContainer = styled.div`
  ${ContainerStyles};
  margin: 0rem 2rem 0rem 0rem;
  padding: 0rem 0rem 0rem 0rem;
  width: calc(100% - 20rem);

  @media (max-width: 500px) {
    width: 100%;
    margin: 0rem 0rem 1rem 0rem;
    border-radius: 0;
  }
`;

export const ArticleImage = styled.div`
  width: 100%;
  height: 22.5rem;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.article_image});
  background-repeat: no-repeat;

  @media (max-width: 500px) {
    height: 15rem;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 2rem 2rem 0rem 2rem;

  @media (max-width: 500px) {
    padding: 1rem 1rem 0rem 1rem;
  }
`;

export const TitleArticle = styled.div`
  font-family: ${montserrat};
  font-size: 2.5rem;
  line-height: 110%;
  text-align: left;
  color: ${white};
  padding: 0rem 0rem 0rem 0rem;
  width: calc(100% - 6.75rem);

  @media (max-width: 500px) {
    font-size: 2.15rem;
  }
`;

export const Score = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${white};
  font-family: ${montserrat};
  height: 5.25rem;
  width: 5.25rem;
  margin: 0rem 0rem 0rem 1.5rem;
  padding: 0rem 0.25rem 0rem 0.25rem;
  font-size: 2.25rem;
  background: none;
  border: 0.5px solid ${grey_2};
  border-radius: 50%;

  @media (max-width: 500px) {
    font-size: 1.85rem;
  }
`;

export const Body = styled.div`
  margin: 4rem 0rem 0rem 0rem;
  padding: 0rem 2rem 1.25rem 2rem;
  height: fit-content;

  @media (max-width: 500px) {
    padding: 0rem 1rem 0rem 1rem;
  }
`;

export const RightContainer = styled.div`
  width: 20rem;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const AuthorContainer = styled.div`
  ${ContainerStyles};
  padding: 0rem 0rem 0rem 0rem;
  margin: 0rem 0rem 1rem 0rem;

  @media (max-width: 500px) {
    border-radius: 0;
  }
`;

export const ProfileBoxContainer = styled.div`
  width: 100%;
  height: fit-content;
  padding: 1.25rem 1.25rem 0rem 1.25rem;
`;

export const Description = styled.div`
  font-size: 1rem;
  line-height: 120%;
  font-family: ${roboto};
  padding: 1.25rem 1.25rem 1.5rem 1.25rem;
  color: ${white};
  text-align: left;
`;

export const BottomContainer = styled.div`
  width: 100%;
  padding: 0.2rem 1.25rem 0.2rem 1.25rem;
  border-top: 0.5px solid ${grey_2};
`;

export const Trends = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TrendIcon = styled.img`
  width: 1.85rem;
  height: 1.85rem;
  margin: 0rem 0rem 0rem 0rem;

  &:hover {
    cursor: pointer;
  }
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

export const TagsContainer = styled.div`
  ${ContainerStyles};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0rem 0rem 0rem 0rem;
  padding: 0.5rem 0rem 1.25rem 1.25rem;

  @media (max-width: 500px) {
    display: none;
  }
`;
