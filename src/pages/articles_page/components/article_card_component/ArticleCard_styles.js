import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors } from "../../../../colors/colors";
import { fonts } from "../../../../fonts/fonts";

const { roboto, montserrat, open_sans } = fonts;
const { grey, grey_2, black, white } = colors;

export const Container = styled.div`
  width: 100%;
  border-radius: 15px;
  background: ${black} !important;
`;

export const HyperLink = styled(Link)`
  color: ${white};
  &:hover {
    color: ${white};
    text-decoration: none;
  }
`;

export const ArticleImage = styled.div`
  width: 100%;
  height: 16rem;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.article_image});
  background-repeat: no-repeat;
`;

export const TopContainer = styled.div`
  height: fit-content;
  padding: 0rem 0rem 0rem 0rem;
  margin: 0rem 0rem 0rem 0rem;
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0rem 0rem 0rem 0rem;
  padding: 0.5rem 1.25rem 0rem 1.25rem;
  height: fit-content;
`;

export const Title = styled.div`
  font-family: ${montserrat};
  font-size: 1.6rem;
  color: ${white};
  letter-spacing: 0.5px;
  line-height: 110%;
  margin: 0rem 0rem 0rem 0rem;
  padding: 0.5rem 1.25rem 0rem 1.25rem;

  @media (max-width: 500px) {
  }
`;

export const Description = styled.div`
  font-size: 1rem;
  font-family: ${roboto};
  color: ${white};
  line-height: 120%;
  margin: 0rem 0rem 0rem 0rem;
  padding: 0.75rem 1.25rem 1.25rem 1.25rem;

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0rem 0rem 0rem 0rem;
  padding: 0rem 1.25rem 1.25rem 1.25rem;
  height: fit-content;
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: fit-content;
  margin: 0rem 0rem 0rem 0rem;
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
