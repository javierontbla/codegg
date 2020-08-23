import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { colors } from "../../colors/colors";

const { black, white } = colors;

export const FooterContainer = styled.footer`
  position: relative;
  bottom: 0;
  width: 100%;
  height: 10vh;
  background-color: transparent;
`;

export const CompanyName = styled.div`
  margin-top: 1vh;
  letter-spacing: 0.5px;
  opacity: 0.9;
  padding-left: 0.2rem;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

export const Buttons = styled.div`
  display: flex;
  width: 19%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    width: 50%;
    justify-content: left;
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  color: ${white};
  margin-right: 6px;
  opacity: 0.9;
`;

export const Button = styled.a`
  color: ${white};
  padding: 0.2rem;
  opacity: 0.9;

  &:hover {
    opacity: 0.8;
    text-decoration: none;
    cursor: pointer;
    color: ${white};
  }

  &:hover ${Icon} {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    margin-left: ${(props) => (props.we ? "6px" : "0px")};
  }
`;

export const PrivacyPolicy = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  letter-spacing: 0.5px;
  opacity: 0.9;
  padding-right: 0.2rem;
  color: ${white};
  width: 81%;

  &:hover ${Icon} {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 50%;
  }
`;

export const Data = styled.div`
  font-family: "Abril Fatface", cursive;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  border-top: 2px solid ${black};
  color: ${white};
  margin-top: 0.5vh;
  font-size: 1rem;
`;

export const Directory = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Abril Fatface", cursive;
  font-size: 1rem;
  color: ${black};
  width: 100%;
  margin-bottom: 0.5vh;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;
