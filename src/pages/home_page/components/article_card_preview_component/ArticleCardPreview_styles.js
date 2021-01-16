import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors } from "../../../../colors/colors";
import { fonts } from "../../../../fonts/fonts";

const { grey, white, black } = colors;
const { source_sans_pro, open_sans } = fonts;

export const ArticlePreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  background: ${white};
  border: 1px solid ${grey};
  margin: 0rem 0rem 0.75rem 0rem;
  border-radius: 0.15rem;
  box-shadow: 0px 1.5px 1.5px -1px #ced4da;
  transition: box-shadow 0.2s;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 3px 3px -1px #ced4da;
  }
`;

export const LinkContainer = styled(Link)`
  &:hover {
    text-decoration: none;
  }
`;

export const ImageContainer = styled.div`
  height: 8.75rem;
  width: 100%;
  border: none;
  border-top-left-radius: 0.1rem;
  border-top-right-radius: 0.1rem;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.article_preview_image});
  background-repeat: no-repeat;
  border-bottom: 0.5px solid ${grey};
  padding: 0rem 0rem 0rem 0rem !important;
  overflow: hidden;
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const PremiumContainer = styled.div`
  width: fit-content;
  height: fit-content;
  margin: 0.65rem 0rem 0rem 0.4rem;
`;

export const Title = styled.div`
  font-family: ${source_sans_pro};
  font-size: 1.2rem;
  color: ${black};
  font-weight: 500;
  letter-spacing: 0.5px;
  line-height: 115%;
  width: 100%;
  height: fit-content;
  padding: 0rem 0.65rem 0rem 0.65rem;
  margin: 0.5rem 0rem 0rem 0rem;
`;

export const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: fit-content;
  padding: 1.15rem 0.65rem 1rem 0.65rem;
  margin: 0rem 0rem 0rem 0rem;
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: fit-content;
  margin: 0rem 0rem 0rem 0rem;
  padding: 0.1rem 0.65rem 0.1rem 0.65rem;
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
