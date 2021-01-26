import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors } from "../../../../colors/colors";
import { fonts } from "../../../../fonts/fonts";

const {} = fonts;

const { grey_2, black } = colors;

export const Container = styled.div`
  padding: 0rem 0rem 0rem 0rem;
  margin: 0rem 0rem 0rem 0rem;
  min-height: 100vh;
`;

export const ArticlesPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TopContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const LinkContainer = styled(Link)`
  &:hover {
    text-decoration: none;
  }
`;

export const ActionButtonContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 0.5px solid ${grey_2};
  height: fit-content;
  padding: 0rem 0rem 0.75rem 0rem;
  margin: 0rem 0rem 0.75rem 0rem;
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LeftContainer = styled.div`
  width: 18rem;
`;

export const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  background: ${black};
  width: 100%;
  height: fit-content;
  justify-content: left;
  padding: 0.5rem 0rem 1rem 1rem;
  margin: 0rem 0rem 0rem 0rem;
  border-radius: 15px;

  @media (max-width: 500px) {
  }
`;

export const RightContainer = styled.div`
  width: calc(100% - 18rem);
  padding: 0rem 0rem 0rem 1.25rem;
`;

export const ActiveCategoryContainer = styled.div`
  display: ${(props) => (props.length > 0 ? "flex" : "none")};
  flex-direction: row;
  padding: 0rem 0rem 0.5rem 0rem;
  margin: -0.25rem 0rem 0rem -0.25rem;
  width: 100%;
  height: fit-content;
`;

export const MasonryContainer = styled.div``;
