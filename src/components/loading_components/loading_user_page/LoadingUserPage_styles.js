import styled from "styled-components";

import { colors } from "../../../colors/colors";
import { LoadingStyles } from "../loading_styles";

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
  width: 24.5rem;
  height: 65vh;
  padding: 0rem 2rem 0rem 0rem;
`;

export const ProfileCard = styled.div`
  ${LoadingStyles};
  width: 100%;
  height: 100%;
  background: ${black};
  border-radius: 15px;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 24.5rem);
`;

export const TopContainer = styled.div`
  ${LoadingStyles};
  width: 100%;
  height: 27.5vh;
  background: ${black};
  border-radius: 15px;
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 1.5rem 0rem 0rem 0rem;
`;

export const PostsContainer = styled.div`
  ${LoadingStyles};
  width: calc(100% - 15rem);
  height: 100vh;
  background: ${black};
  border-radius: 15px;
  margin: 0rem 2rem 0rem 0rem;
`;

export const ArticlesContainer = styled.div`
  ${LoadingStyles};
  width: 15rem;
  height: 100vh;
  background: ${black};
  border-radius: 15px;
`;
