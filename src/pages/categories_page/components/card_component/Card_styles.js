import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors } from "../../../../colors/colors";
import { fonts } from "../../../../fonts/fonts";

const { date_font, description_font, title_font } = fonts;
const { grey, dark_grey, black, white } = colors;

export const LinkStock = styled(Link)`
  &:hover {
    text-decoration: none;
  }
`;

export const Container = styled.div`
  width: 100%;
  border: 1px solid ${grey};
  border-radius: 0.15rem;
  transition: transform 0.15s;
  box-shadow: 3px 3px 3px -1px #ced4da;
  background: ${white} !important;

  &:hover {
    cursor: pointer;
    transform: translateY(-0.8%);
  }
`;

export const Img = styled.div`
  width: 100%;
  height: 18.5rem;
  border-top-left-radius: 0.15rem;
  border-top-right-radius: 0.15rem;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.source});
  background-repeat: no-repeat;
  border-bottom: 0.5px solid ${grey};
`;

export const Description = styled.div`
  padding: 1rem 1rem 1rem 1rem;
  margin: 0rem 0rem 0rem 0rem;
`;

export const LastUpdate = styled.div`
  display: flex;
  align-items: center;
  color: ${dark_grey};
  font-size: 0.75rem;
  font-family: ${date_font};
  letter-spacing: 1px;
  padding: 0;
  margin: 0rem 0rem 0.5rem 0rem;
  height: fit-content;
  width: 100%;

  @media (max-width: 500px) {
  }
`;

export const Title = styled.div`
  font-family: ${title_font};
  font-size: 1.8rem;
  color: ${black};
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 100%;

  @media (max-width: 500px) {
  }
`;

export const Author = styled.div`
  font-family: ${date_font};
  padding: 0;
  color: ${dark_grey};
  letter-spacing: 1px;
  font-size: 0.75rem;
  margin: 0.5rem 0rem 0rem 0rem;
`;

export const Preview = styled.div`
  font-family: ${description_font};
  font-size: 1rem;
  line-height: 140%;
  margin: 0.5rem 0rem 0rem 0rem;
  color: ${black};
  letter-spacing: 0.25px;
  opacity: 0.8;

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const Categories = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0rem 0.5rem 0rem 0.5rem;
  margin: 0px 0px 1rem 0rem;

  @media (max-width: 500px) {
    padding-left: ${(props) => (props.post ? "0rem" : "")};
    margin-left: ${(props) => (props.post ? "-0.2rem" : "")};
    width: ${(props) => (props.post ? "100%" : "")};
  }
`;
