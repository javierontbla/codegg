import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors } from "../../../../colors/colors";
import { fonts } from "../../../../fonts/fonts";

const { roboto, source_sans_pro, open_sans } = fonts;
const { grey, black, white } = colors;

export const LinkArticle = styled(Link)`
  &:hover {
    text-decoration: none;
  }
`;

export const ArticleCardContainer = styled.div`
  width: 100%;
  border: 1px solid ${grey};
  border-radius: 0.5rem;
  background: ${white} !important;
  box-shadow: 0px 1.5px 1.5px -1px #ced4da;
  transition: box-shadow 0.2s;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 3px 3px -1px #ced4da;
  }
`;

export const ArticleImage = styled.div`
  width: 100%;
  height: 14.5rem;
  border-top-left-radius: 0.45rem;
  border-top-right-radius: 0.45rem;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.source});
  background-repeat: no-repeat;
`;

export const TopContainer = styled.div`
  height: fit-content;
  padding: 0rem 0rem 0rem 0rem;
  margin: 0rem 0rem 0rem 0rem;
`;

export const PremiumContainer = styled.div`
  padding: 0.75rem 0rem 0rem 0.5rem;
`;

export const Title = styled.div`
  font-family: ${source_sans_pro};
  font-size: 1.55rem;
  color: ${black};
  letter-spacing: 0.5px;
  line-height: 110%;
  margin: 0rem 0rem 0rem 0rem;
  padding: 0.5rem 0.75rem 0.75rem 0.75rem;

  @media (max-width: 500px) {
  }
`;

export const Description = styled.div`
  font-size: 0.9rem;
  font-family: ${roboto};
  color: ${black};
  line-height: 130%;
  margin: 0rem 0rem 0rem 0rem;
  padding: 0rem 0.75rem 0rem 0.75rem;

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0rem 0rem 0rem 0rem;
  padding: 1.25rem 0.75rem 0rem 0.75rem;
  height: fit-content;
`;

export const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0rem 0rem 0rem -0.25rem;
  padding: 1.25rem 0rem 1.25rem 0rem;
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: fit-content;
  margin: 0rem 0rem 0rem 0rem;
  padding: 0.1rem 0.7rem 0.1rem 0.7rem;
  border-top: 0.5px solid ${grey};
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
