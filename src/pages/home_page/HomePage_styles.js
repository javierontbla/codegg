import styled, { css } from "styled-components";

import { colors } from "../../colors/colors";
import { fonts } from "../../fonts/fonts";

const { grey, grey_2 } = colors;

export const HomePageContainer = styled.div`
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
  width: 100%;
  margin: 0rem 0rem 0rem 0rem;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 38rem;
  height: 100vh;
`;

export const TradesContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  align-items: center;
  width: 100%;
  margin: 0rem 0rem 0rem 0rem;

  &::-webkit-scrollbar {
    display: none !important;
  }
`;

export const MiddleContainer = styled.div`
  width: 100%;
  margin: 0rem 1.5rem 0rem 1.5rem;
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
  width: 36rem;
  height: 100vh;
  margin: 0rem 0rem 0rem 0rem;
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
