import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors } from "../../colors/colors";
import { fonts } from "../../fonts/fonts";

const { white, blue, grey } = colors;
const { montserrat, roboto } = fonts;

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 0rem 0rem 0rem 0rem;
  margin: 2rem 0rem 0rem 0rem;

  @media (max-width: 500px) {
    padding: 0rem 1.25rem 0rem 1.25rem;
  }
`;

export const HyperLink = styled(Link)`
  color: ${white};
  &:hover {
    color: ${white};
    text-decoration: none;
  }
`;

export const Contact = styled.div`
  width: 100%;
  height: fit-content;
  color: ${white};
  font-family: ${montserrat};
  font-size: 1.25rem;
  margin: 0rem 0rem 4rem 0rem;
`;

export const Bold = styled.span`
  color: ${blue};
`;

export const QuestionContainer = styled.div`
  width: 100%;
`;

export const Question = styled.div`
  font-family: ${montserrat};
  font-size: 1.65rem;
  color: ${grey};
  margin: 0rem 0rem 0.25rem 0rem;
  letter-spacing: 1px;
`;

export const Answer = styled.div`
  font-family: ${roboto};
  font-size: 1rem;
  color: ${white};
  letter-spacing: 0.25px;
  color: ${white};
  margin: 0rem 0rem 4rem 0rem;
`;
