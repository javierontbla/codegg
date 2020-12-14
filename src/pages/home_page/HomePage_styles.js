import styled, { css } from "styled-components";

import { colors } from "../../colors/colors";
import { fonts } from "../../fonts/fonts";

const { black, white, grey } = colors;
const { open_sans } = fonts;

const ButtonClass = css`
  display: flex;
  align-items: center;
  height: 2rem;
  padding: 0rem 0.65rem 0rem 0.65rem;
  font-family: ${open_sans};
  font-size: 0.9rem;
  border-radius: 0.15rem;
  font-weight: 600;
  letter-spacing: 0.5px;

  &:hover {
    cursor: pointer;
  }
`;

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

export const PublicButton = styled.div`
  ${ButtonClass};
  background: rgb(219, 223, 227);
  background: linear-gradient(
    45deg,
    rgba(219, 223, 227, 1) 5%,
    rgba(201, 203, 205, 1) 95%
  );
  color: ${black};
`;

export const PrivateButton = styled.div`
  ${ButtonClass};
  background: rgb(33, 33, 32);
  background: linear-gradient(
    90deg,
    rgba(33, 33, 32, 1) 5%,
    rgba(25, 25, 24, 1) 80%
  );
  color: ${white};
  margin: 0rem 0rem 0rem 0.75rem;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0.75rem 0rem 0rem 0rem;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 35rem;
`;

export const TradesContainer = styled.div`
  display: grid;
  overflow-x: hidden;
  overflow-y: scroll;
  grid-gap: 0;
  grid-auto-flow: row;
  grid-template-columns: auto;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  margin: -0.5rem 0rem 0rem 0rem;

  &::-webkit-scrollbar {
    display: none !important;
  }
`;

export const MiddleContainer = styled.div`
  width: 100%;
  margin: 0rem 1rem 0rem 1rem;
`;

export const UploadDashboardContainer = styled.div`
  width: 100%;
  height: fit-content;
`;

export const RightContainer = styled.div`
  width: 28rem;
  margin: -1rem 0rem 0rem 0rem;
`;
