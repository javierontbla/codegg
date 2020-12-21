import styled from "styled-components";

// import { colors } from "../../colors/colors";

export const TraderProfilePageContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  margin: 2rem 0rem 0rem 0rem;
  padding: 0rem 0rem 0rem 0rem !important;
`;

export const ProfileInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 26.5rem !important;
  height: fit-content;
  margin: 0rem 0rem 0rem 0rem;
  padding: 0rem 2rem 0rem 0rem;
`;

export const ProfileCardContainer = styled.div`
  width: 100%;
  height: fit-content;
`;

export const ProfileOpinionsContainer = styled.div`
  width: 100%;
  height: 2.15rem;
  padding: 0rem 0rem 0rem 0rem;
`;

export const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 26.5rem);
  height: 100%;
  padding: 0rem 0.5rem 0rem 0.5rem;
  margin: 0rem 0rem 0rem -1rem;
`;

export const CallsContainer = styled.div`
  margin: 0rem 0rem 0rem 0rem;
  width: 100%;
  display: grid;
  height: 17.75rem;
  overflow-x: scroll;
  overflow-y: hidden;
  grid-gap: 0;
  grid-auto-flow: column;
  grid-template-columns: auto;
  align-items: center;

  &::-webkit-scrollbar {
    display: none !important;
  }
`;

export const PostsContainer = styled.div`
  width: 100%;
  height: 100%;
`;
