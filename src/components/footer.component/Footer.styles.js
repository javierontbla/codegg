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
  height: 4rem;
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
  font-size: 1rem;
  margin: 0rem 1rem 0rem 0rem;
  padding: 0rem 0rem 0.25rem 0rem;
  color: ${black};
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  margin: 0rem 0rem 0rem 1rem;
  padding: 0.25rem 0rem 0.25rem 0rem;

  @media (max-width: 500px) {
  }
`;

export const Option = styled.div`
  letter-spacing: 0.5px;
  background: transparent !important;
  width: fit-content;
`;

export const Button = styled(Link)`
  &&& {
    font-family: ${primary_font};
    color: ${black};
    font-size: 1rem;
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
