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
  font-family: "Bebas Neue", cursive;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 2px solid ${darkBlack};
  color: ${white};
  padding: 0.2rem;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding-left: 0.1rem;
    padding-right: 0.1rem;
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
  color: ${white};
  opacity: 0.9;

  &&& {
    font-size: 1.2rem;
    &::after {
      background-color: transparent;
      content: " ";
      height: 40%;
      position: absolute;
      left: 0;
      top: 65%;
      width: calc(100%);
      z-index: -1;
    }

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  &:hover {
    opacity: 0.8 !important;
    text-decoration: none !important;
    cursor: pointer !important;
    color: ${white} !important;
  }
`;
