import styled from "styled-components";

import { colors } from "../../colors/colors";
import { fonts } from "../../fonts/fonts";

const { grey_2, white } = colors;
const { montserrat } = fonts;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 100vh;
  margin: 0rem 0rem 0rem 0rem;
  padding: 0rem 0rem 0rem 0rem !important;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 24.5rem !important;
  height: fit-content;
  margin: 0rem 0rem 0rem 0rem;
  padding: 0rem 2rem 0rem 0rem;
`;

export const ProfileCardContainer = styled.div`
  width: 100%;
  height: fit-content;
`;

export const RightContainer = styled.div`
  display: ${(props) => (props.display_portfolio ? "none" : "flex")};
  flex-direction: column;
  width: calc(100% - 24.5rem);
  height: fit-content;
  padding: 0rem 0rem 0rem 0rem;
  margin: 0rem 0rem 0rem 0rem;
`;

export const ActionButtonContainer = styled.div`
  margin: 0rem 0rem 0.75rem 0rem;
`;

export const TopContainer = styled.div`
  width: 100%;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  height: fit-content;
  background: transparent;
  border-bottom: 0.5px solid ${grey_2};
  font-family: ${montserrat};
  font-size: 1.65rem;
  letter-spacing: 1px;
  padding: 0rem 0rem 0.45rem 0rem;
  line-height: 100%;
  margin: 0rem 0rem 0.75rem 0rem;
  text-transform: uppercase;
  color: ${white};
`;

export const RecommendedContainer = styled.div`
  margin: 0rem 0rem 0rem 0rem;
  padding: 0rem 0rem 0.75rem 0rem;
  width: 100%;
  display: grid;
  overflow-x: scroll;
  overflow-y: hidden;
  grid-gap: 0;
  grid-auto-flow: column;
  grid-template-columns: minmax(min-content, max-content);
  align-items: flex-start;

  &::-webkit-scrollbar {
    display: none !important;
  }
`;

export const Division = styled.div`
  border-top: 0.5px solid ${grey_2};
  height: 0.75rem;
  width: calc(100%);
  margin: 0rem 0rem 0rem 0rem;
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: fit-content;
`;

export const PostsContainer = styled.div`
  width: calc(100% - 15rem);
  height: 100%;
  padding: 0rem 2rem 0rem 0rem;
`;

export const ArticlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: scroll;
  height: 100vh;
  width: 15rem;
  margin: 0rem 0rem 0rem 0rem;

  &::-webkit-scrollbar {
    display: none !important;
  }
`;
