import styled, { css } from "styled-components";

import { colors } from "../../../colors/colors";
import { fonts } from "../../../fonts/fonts";

const { black, white, grey } = colors;
const { source_sans_pro, roboto } = fonts;

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

export const Title = styled.div`
  font-family: ${source_sans_pro};
  font-size: 2.5rem;
  line-height: 100%;
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
  padding: 0.75rem 0.75rem 0.75rem 0.75rem;
`;

export const Description = styled.div`
  font-size: 0.9rem;
  line-height: 130%;
  font-family: ${roboto};
  margin: 0.75rem 0rem 0rem 0rem;
`;

export const CategoriesContainer = styled.div`
  ${ContainerStyles};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0.75rem 0rem 0rem 0rem;
  padding: 0.5rem 0.45rem 0.5rem 0.45rem;
`;
