import styled from "styled-components";

import { colors } from "../../colors/colors";

const { grey } = colors;

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
  width: 26.5rem !important;
  height: 100%;
  margin: 0rem 2rem 0rem 0rem;
`;

export const ProfileCardContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const ProfileReviewsContainer = styled.div`
  width: 100%;
  height: 2rem;
`;

export const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 26.5rem);
  height: 100%;
  padding: 0rem 0.5rem 0rem 0.5rem;
  margin: -0.5rem 0rem 0rem 0rem;
`;

export const CallsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 12rem !important;
`;

export const PostsContainer = styled.div`
  width: 100%;
  height: 100%;
`;
