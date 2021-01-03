import styled from "styled-components";

import { colors } from "../../colors/colors";
import { fonts } from "../../fonts/fonts";

const { source_sans_pro } = fonts;

const { grey, white } = colors;

export const Container = styled.div`
  padding: 0rem 0rem 0rem 0rem;
  margin: 2rem 0rem 0rem 0rem;
  min-height: 100vh;
`;

export const ArticlesPageContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LeftContainer = styled.div`
  width: 25rem;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  width: 100%;
  height: 2.85rem;
  background: ${white};
  border: 1px solid ${grey};
  font-family: ${source_sans_pro};
  font-size: 1.4rem;
  letter-spacing: 1px;
  padding: 0.65rem 0.55rem 0.65rem 0.55rem;
  line-height: 100%;
  border-radius: 0.35rem;
  box-shadow: 1.35px 1.35px 1.35px -1px #ced4da;
  margin: 0rem 0rem 0.75rem 0rem;
`;

export const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  background: ${white};
  width: 100%;
  height: fit-content;
  border: 1px solid ${grey};
  justify-content: left;
  padding: 0.8rem 0.3rem 0.8rem 0.3rem;
  margin: 0rem 0rem 0rem 0rem;
  border-radius: 0.35rem;
  box-shadow: 1.35px 1.35px 1.35px -1px #ced4da;

  @media (max-width: 500px) {
  }
`;

export const RightContainer = styled.div`
  width: 100%;
  margin: 0rem 0rem 0rem 1.5rem;
`;

export const ActiveCategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0rem 0rem 0.5rem 0rem;
  margin: -0.25rem 0rem 0rem -0.25rem;
  width: 100%;
  height: fit-content;
`;

export const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 0.5px solid ${grey};
  height: 2.85rem;
  margin: 0rem 0rem 0.75rem 0rem;
`;

export const MasonryContainer = styled.div``;
