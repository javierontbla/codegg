import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors } from "../../colors/colors";
import { fonts } from "../../fonts/fonts";

const { white, green, yellow } = colors;
const { footer_font, slogan_font } = fonts;

export const FooterContainer = styled.footer`
  display: flex;
  width: 98%;
  position: relative;
  justify-content: space-between;
  align-items: flex-end;
  margin: 10rem 0rem 0rem 0rem;
  background-color: transparent;
  height: fit-content;
  border: none;
  font-family: ${footer_font};
  padding: 1rem 0rem 1rem 0rem;

  background: rgb(33, 33, 32);
  background: linear-gradient(
    90deg,
    rgba(33, 33, 32, 1) 5%,
    rgba(25, 25, 24, 1) 80%
  );

  border-top-right-radius: 4rem;
`;

export const CompanyName = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: fit-content;
  height: 100%;
  font-size: 0.9rem;
  margin: 0rem 2rem 0rem 0rem;
  padding: 0rem 0rem 0rem 0rem;
  color: ${white};
  letter-spacing: 1px;
`;

export const Slogan = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${slogan_font};
  letter-spacing: 1px;
  justify-content: flex-end;
`;

export const SloganTitle = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  color: ${green};
  margin: 0rem 0rem 0rem 2rem;
  font-size: 3rem;
`;
export const SloganSubtitle = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  color: ${yellow};
  margin: 0rem 0rem 0rem 4rem;
  opacity: 0.95;
  height: 100%;
  font-size: 1.85rem;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  height: fit-content;
  margin: 8rem 0rem 0rem 2rem;
  padding: 0rem 0rem 0rem 0rem;

  @media (max-width: 500px) {
  }
`;

export const Option = styled.div`
  background: transparent !important;
  width: fit-content;
  padding: 0rem 0rem 0rem 0rem;
  height: fit-content;
  letter-spacing: 1px;
`;

export const Division = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: fit-content;
  margin: 0rem 1rem 0rem 1rem;
  color: ${white};
`;

export const LinkContainer = styled(Link)`
  &&& {
    font-family: ${footer_font};
    color: ${white};
    font-size: 0.9rem;
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
