import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { colors } from "../../colors/colors";

const { white, darkBlack } = colors;

export const FooterContainer = styled.footer`
  position: ${(props) => (props.error ? "absolute" : "relative")};
  bottom: 0.2rem;
  width: 100%;
  height: fit-content;
  background-color: transparent;
`;

export const CompanyName = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  letter-spacing: 0.5px;
  opacity: 0.9;
  width: fit-content;
  padding: 0.4rem;
  padding-left: 0.4rem;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const Feedback = styled.div`
  display: flex;
  width: fit-content;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Icon = styled(FontAwesomeIcon)`
  color: ${white};
  margin-right: 6px;
  opacity: 0.9;
  font-size: 0.9rem;
`;

export const Button = styled(Link)`
  color: ${white} !important;
  padding: 0.2rem !important;
  opacity: 0.9 !important;
  background: transparent !important;
  font-size: 1rem;

  &:hover {
    opacity: 0.8 !important;
    text-decoration: none !important;
    cursor: pointer !important;
    color: ${white} !important;
  }

  &:hover ${Icon} {
    opacity: 0.8 !important;
  }

  @media (max-width: 768px) {
    margin-left: ${(props) => (props.we ? "6px" : "0px")} !important;
  }
`;

export const PrivacyPolicy = styled.div`
  display: flex !important;
  justify-content: flex-end !important;
  align-items: center !important;
  letter-spacing: 0.5px !important;
  color: ${white} !important;
  width: fit-content !important;
  background: transparent !important;
  margin-left: 1rem;

  &:hover ${Icon} {
    cursor: pointer !important;
  }
`;

export const Data = styled.div`
  font-family: "Abril Fatface", cursive;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 2px solid ${darkBlack};
  color: ${white};
`;

export const Directory = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-family: "Abril Fatface", cursive;
  color: ${darkBlack};
  width: fit-content;
  letter-spacing: 0.5px;
  height: fit-content;
  padding: 0.2rem;
  padding-right: 0.4rem;
`;
