import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors } from "../../colors/colors";
import { fonts } from "../../fonts/fonts";

const { grey, black } = colors;
const { primary_font } = fonts;

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  position: relative;
  bottom: 0;
  width: 100%;
  background-color: transparent;
  height: 90px;
  border-top: 0.5px solid ${grey};
  font-family: ${primary_font};
`;

export const CompanyName = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  letter-spacing: 0.5px;
  width: fit-content;
  height: 100%;
  font-size: 16px;
  margin: 0px 35px 0px 0px;
  padding: 0px 0px 15px 0px;
  color: ${black};
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: ${black};
  height: 100%;
  margin: 0px 0px 0px 35px;
  padding: 15px 0px 15px 0px;

  @media (max-width: 500px) {
  }
`;

export const Option = styled.div`
  letter-spacing: 0.5px;
  color: ${black} !important;
  background: transparent !important;
  width: fit-content;
`;

export const Button = styled(Link)`
  &&& {
    font-family: ${primary_font};
    color: ${black};
    font-size: 16px;
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

    @media (max-width: 500px) {
    }
  }

  &:hover {
    text-decoration: none !important;
    cursor: pointer !important;
  }
`;
