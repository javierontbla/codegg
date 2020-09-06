import styled from "styled-components";
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
  padding-left: 0.2rem;
`;

export const Data = styled.div`
  font-family: "Abril Fatface", cursive;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 2px solid ${darkBlack};
  color: ${white};
  padding: 0.2rem;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

export const PrivacyPolicy = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  letter-spacing: 0.5px;
  color: ${white} !important;
  background: transparent !important;
  width: fit-content;
  padding-right: 0.2rem;
`;

export const Button = styled(Link)`
  color: ${white} !important;
  opacity: 0.9 !important;
  background: transparent !important;

  &:hover {
    opacity: 0.8 !important;
    text-decoration: none !important;
    cursor: pointer !important;
    color: ${white} !important;
  }
`;
