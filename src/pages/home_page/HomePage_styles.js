import styled from "styled-components";

import { colors } from "../../colors/colors";

const { grey, grey_2 } = colors;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0rem 0rem 0rem;
  padding: 0rem 0rem 0rem 0rem;
  width: 100%;
`;

export const SelectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 0.5px solid ${grey};
  padding: 0rem 0rem 0.75rem 0rem;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0rem 0rem 0rem 0rem;
  width: 100%;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 18.75rem;
  height: 100vh;

  @media (max-width: 500px) {
    height: fit-content;
    width: 100%;
    padding: 0rem 1.25rem 0rem 1.25rem;
  }
`;

export const TradesContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  align-items: center;
  width: 100%;
  margin: 0rem 0rem 0rem 0rem;

  @media (max-width: 500px) {
    margin: 0rem 0rem 0rem 0rem;
    padding: 0rem 0rem 0rem 0rem;
    width: 100%;
    display: grid;
    overflow-x: scroll;
    overflow-y: hidden;
    grid-gap: 0;
    grid-auto-flow: column;
    grid-template-columns: minmax(min-content, max-content);
    align-items: flex-start;
  }

  &::-webkit-scrollbar {
    display: none !important;
  }
`;

export const MiddleContainer = styled.div`
  width: calc(100% - 37.5rem);
  margin: 0rem 2rem 0rem 2rem;

  @media (max-width: 500px) {
    width: 100%;
    margin: 2rem 0rem 0rem 0rem;
    padding: 0rem 1.25rem 0rem 1.25rem;
  }
`;

export const Division = styled.div`
  width: 100%;
  height: 0.75rem;
  border-bottom: 0.5px solid ${grey_2};
  margin: 0rem 0rem 0.75rem 0rem;
`;

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UploadDashboardContainer = styled.div`
  width: 100%;
  height: fit-content;
  margin: 0rem 0rem 0rem 0rem;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 18.75rem;
  height: 100vh;
  margin: 0rem 0rem 0rem 0rem;

  @media (max-width: 500px) {
    display: none;
  }
`;

export const ArticlesPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  margin: 0rem 0rem 0rem 0rem;

  &::-webkit-scrollbar {
    display: none !important;
  }
`;
