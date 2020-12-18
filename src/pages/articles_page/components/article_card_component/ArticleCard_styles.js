import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors } from "../../../../colors/colors";
import { fonts } from "../../../../fonts/fonts";

const { date_font, roboto, title_font } = fonts;
const { grey, dark_grey, black, white } = colors;

export const LinkArticle = styled(Link)`
  &:hover {
    text-decoration: none;
  }
`;

export const ArticleCardContainer = styled.div`
  width: 100%;
  border: 1px solid ${grey};
  border-radius: 0.25rem;
  transition: box-shadow 0.2s;
  box-shadow: 3px 3px 3px -1px #ced4da;
  background: ${white} !important;

  &:hover {
    cursor: pointer;
    box-shadow: 6.5px 6.5px 6.5px -3px #ced4da;
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 18.5rem;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.source});
  background-repeat: no-repeat;
  border-bottom: 0.5px solid ${grey};
`;

export const Date = styled.div`
  display: flex;
  align-items: center;
  color: ${dark_grey};
  font-size: 0.7rem;
  font-family: ${date_font};
  font-weight: 500;
  letter-spacing: 1px;
  padding: 0;
  margin: 0rem 0rem 0rem 0rem;
  height: fit-content;
  width: 100%;
  line-height: 100%;

  @media (max-width: 500px) {
  }
`;

export const DataContainer = styled.div`
  padding: 0.5rem 0.75rem 0rem 0.75rem;
  margin: 0rem 0rem 0rem 0rem;
`;

export const Title = styled.div`
  font-family: ${title_font};
  font-size: 1.6rem;
  color: ${black};
  font-weight: 600;
  letter-spacing: 0.5px;
  line-height: 110%;
  margin: 0.55rem 0rem 0.55rem 0rem;

  @media (max-width: 500px) {
  }
`;

export const Description = styled.div`
  font-family: ${roboto};
  font-size: 0.925rem;
  line-height: 118%;
  margin: 0rem 0rem 0rem 0rem;
  color: ${black};

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const Categories = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.6rem 0.35rem 0.35rem 0.35rem;
  margin: 0rem 0rem 0rem 0rem;

  @media (max-width: 500px) {
    padding-left: ${(props) => (props.post ? "0rem" : "")};
    margin-left: ${(props) => (props.post ? "-0.2rem" : "")};
    width: ${(props) => (props.post ? "100%" : "")};
  }
`;
