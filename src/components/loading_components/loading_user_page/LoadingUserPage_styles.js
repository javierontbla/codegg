import styled from "styled-components";

import { colors } from "../../../colors/colors";

const { black } = colors;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 100vh;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50vh;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TopContainer = styled.div`
  width: 100%;
  height: 20vh;
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const PostsContainer = styled.div`
  width: calc(100% - 15rem);
  height: 40vh;
  background: ${black};
`;

export const ArticlesContainer = styled.div`
  width: 15rem;
  height: 50vh;
  background: ${black};
`;
