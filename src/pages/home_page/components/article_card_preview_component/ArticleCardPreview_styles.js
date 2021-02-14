import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors } from "../../../../colors/colors";
import { fonts } from "../../../../fonts/fonts";

const { grey_2, grey, white, black } = colors;
const { source_sans_pro, open_sans } = fonts;

export const ArticlePreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  background: ${black};
  margin: 0rem 0rem 1.25rem 0rem;
  border-radius: 20px;
`;

export const HyperLink = styled(Link)`
  &:hover {
    text-decoration: none;
    opacity: 0.95;
  }
`;

export const ImageContainer = styled.div`
  height: 9rem;
  width: 100%;
  border: none;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.article_preview_image});
  background-repeat: no-repeat;
  padding: 0rem 0rem 0rem 0rem !important;
  overflow: hidden;
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.div`
  font-family: ${source_sans_pro};
  font-size: 1.2rem;
  color: ${white};
  font-weight: 500;
  letter-spacing: 0.5px;
  line-height: 115%;
  width: 100%;
  height: fit-content;
  padding: 0rem 1rem 0rem 1rem;
  margin: 1rem 0rem 0rem 0rem;
`;

export const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: fit-content;
  padding: 1.25rem 1rem 1.5rem 1rem;
  margin: 0rem 0rem 0rem 0rem;
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: fit-content;
  margin: 0rem 0rem 0rem 0rem;
  padding: 0.2rem 1rem 0.2rem 1rem;
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
