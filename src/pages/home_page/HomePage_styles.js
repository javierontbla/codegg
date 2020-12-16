import styled, { css } from "styled-components";

import { colors } from "../../colors/colors";
import { fonts } from "../../fonts/fonts";

const { black, white, grey } = colors;
const { open_sans, source_sans_pro } = fonts;

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

const Titles = css`
  width: 100%;
  height: fit-content;
  background: ${white};
  border: 1px solid ${grey};
  font-family: ${source_sans_pro};
  font-size: 1.35rem;
  letter-spacing: 1px;
  padding: 0.65rem 0.55rem 0.65rem 0.55rem;
  line-height: 100%;
  border-radius: 0.25rem;
  box-shadow: 1.5px 1.5px 1.5px -1px #ced4da;
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
  height: 100vh;
`;

export const LeftTitle = styled.div`
  ${Titles};
  margin: 0rem 0rem 0.75rem 0rem;
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

export const UploadDashboardContainer = styled.div`
  width: 100%;
  height: fit-content;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 32rem;
  height: 100vh;
  margin: 0rem 0rem 0rem 0rem;
`;

export const RightTitle = styled.div`
  ${Titles};
`;

export const ArticlesPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  margin: 0.75rem 0rem 0rem 0rem;

  &::-webkit-scrollbar {
    display: none !important;
  }
`;
