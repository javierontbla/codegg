import styled from "styled-components";

// import { colors } from "../../colors/colors";

export const TraderProfilePageContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  margin: 0rem 0rem 0rem 0rem;
  padding: 0rem 0rem 0rem 0rem !important;
`;

export const ProfileInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 24.5rem !important;
  height: fit-content;
  margin: 0rem 0rem 0rem 0rem;
  padding: 0rem 1rem 0rem 0rem;
`;

export const ProfileCardContainer = styled.div`
  width: 100%;
  height: fit-content;
`;

export const ProfileOpinionsContainer = styled.div`
  width: 100%;
  padding: 0rem 0rem 0rem 0rem;
`;

export const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 24.5rem);
  height: fit-content;
  padding: 0rem 0rem 0rem 0rem;
  margin: 0rem 0rem 0rem 0rem;
`;

export const TopContainer = styled.div`
  height: fit-content;
  height: 15.25rem;
`;

export const TradesContainer = styled.div`
  margin: 0rem 0rem 0rem 0rem;
  width: 100%;
  display: grid;
  height: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  grid-gap: 0;
  grid-auto-flow: column;
  grid-template-columns: auto;
  align-items: flex-start;

  &::-webkit-scrollbar {
    display: none !important;
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: fit-content;
`;
export const PostsContainer = styled.div`
  width: calc(100% - 15rem);
  height: 100%;
`;

export const ArticlesContainer = styled.div`
  height: 100vh;
  width: 15rem;
`;
