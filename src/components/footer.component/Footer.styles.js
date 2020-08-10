import styled from "styled-components";

import { colors } from "../../colors/colors";

const { grey } = colors;

export const FooterContainer = styled.footer`
  position: relative;
  bottom: 0;
  width: 100%;
  height: 20vh;
  background-color: transparent;
`;

export const Content = styled.div`
  margin-top: 1.5vh;
  color: ${grey};
  font-family: "Roboto", sans-serif;
  background-color: transparent;
  text-align: center;
`;

export const CompanyName = styled.div`
  margin-top: 2vh;
`;

export const Buttons = styled.div`
  width: 26.5%;
  margin-top: 2vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const PrivacyPolicy = styled.div``;

export const TermsUse = styled.div``;

export const Data = styled.div`
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
