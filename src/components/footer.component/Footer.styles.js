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
  letter-spacing: 0.5px;
  padding: 0.4rem;
`;

export const CompanyName = styled.div`
  margin-top: 1vh;
  letter-spacing: 0.5px;
`;

export const Buttons = styled.div`
  width: 29%;
  margin-top: 1vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const PrivacyPolicy = styled.div`
  letter-spacing: 0.5px;
`;

export const TermsUse = styled.div`
  letter-spacing: 0.5px;
`;

export const Data = styled.div`
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 2px solid ${grey};
  color: ${grey};
`;
