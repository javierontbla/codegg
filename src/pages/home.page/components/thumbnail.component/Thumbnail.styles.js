import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors } from "../../../../colors/colors";
import { fonts } from "../../../../fonts/fonts";

const { primary_font, secondary_font } = fonts;
const { grey, dark_grey, black } = colors;

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
  font-family: ${primary_font};
  letter-spacing: 0.5px;
  text-align: left;
  padding: 0rem 1rem 0rem 1rem;
  margin: 1rem 0rem 1rem 0rem;
`;

export const LastUpdate = styled.div`
  display: flex;
  align-items: center;
  color: ${dark_grey};
  font-size: 12px;
  font-family: ${primary_font};
  letter-spacing: 0.5px;
  padding: 0;
  margin: 0;
  height: fit-content;
  width: 100%;

  @media (max-width: 500px) {
  }
`;

export const Stock = styled.div`
  font-family: "Space Mono", monospace;
  font-size: 2rem;
  letter-spacing: 0.5px;
  color: ${black};

  @media (max-width: 500px) {
  }
`;

export const Acronym = styled.div`
  font-family: ${secondary_font};
  margin: 0;
  padding: 0;
  color: ${dark_grey};
  letter-spacing: 0.5px;
  font-size: 1.25rem;

  margin: -0.5rem 0rem 0rem 0rem;
`;

export const Preview = styled.div`
  font-family: ${primary_font};
  font-size: 1rem;
  line-height: 150%;
  margin: 0.5rem 0rem 0rem 0rem;
  color: ${black};

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
