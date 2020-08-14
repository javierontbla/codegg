import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { colors } from "../../colors/colors";

const { grey, black, darkGreen } = colors;

export const FooterContainer = styled.footer`
  position: relative;
  bottom: 0;
  width: 100%;
  height: 20vh;
  background-color: transparent;
`;

export const Content = styled.div`
  margin-top: 1vh;
  color: ${grey};
  font-family: "Abril Fatface", cursive;
  background-color: transparent;
  text-align: center;
  letter-spacing: 1px;
  padding: 0.4rem;
  font-size: 0.9rem;
`;

export const CompanyName = styled.div`
  margin-top: 1vh;
  letter-spacing: 0.5px;
  opacity: 0.9;
`;

export const Buttons = styled.div`
  width: 29%;
  margin-top: 1vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Icon = styled(FontAwesomeIcon)`
  color: ${black};
  margin-right: 5px;
`;

export const Button = styled.a`
  color: ${black};
  padding: 0.2rem;
  margin-left: ${(props) => (props.we ? "0.5rem" : "0.1rem")};

  &:hover {
    color: ${darkGreen};
    text-decoration: none;
    cursor: pointer;
  }

  &:hover ${Icon} {
    color: ${darkGreen};
  }
`;

export const PrivacyPolicy = styled.div`
  letter-spacing: 0.5px;
  opacity: 0.9;
  &:hover ${Icon} {
    cursor: pointer;
  }
`;

export const TermsUse = styled.div`
  letter-spacing: 0.5px;
  opacity: 0.9;
`;

export const Data = styled.div`
  font-family: "Abril Fatface", cursive;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 2px solid ${black};
  color: ${black};
  margin-top: 0.5vh;
  font-size: 1rem;
`;

export const Directory = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: "Abril Fatface", cursive;
  font-size: 1rem;
  color: ${black};
  width: 100%;
  margin-bottom: 0.5vh;
  letter-spacing: 0.5px;
`;
