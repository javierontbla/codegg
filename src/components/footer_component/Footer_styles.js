import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors } from "../../colors/colors";
import { fonts } from "../../fonts/fonts";

const { white, background } = colors;
const { open_sans } = fonts;

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  width: 100%;
  position: relative;
  justify-content: space-between;
  align-items: flex-end;
  margin: 10rem 0rem 0rem 0rem;
  background-color: transparent;
  height: 15rem;
  border: none;
  font-family: ${open_sans};
  padding: 0rem 0rem 1rem 0rem;
  background: ${background};

  @media (max-width: 500px) {
    flex-direction: column;
    justify-content: flex-end;
  }
`;

export const CompanyName = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: fit-content;
  height: fit-content;
  font-size: 0.55rem;
  margin: 0rem 2rem 0rem 0rem;
  padding: 0rem 0rem 0rem 0rem;
  color: ${white};
  letter-spacing: 1px;

  @media (max-width: 500px) {
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 0rem 0rem 0rem 0rem;
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  width: fit-content;
  height: 100%;

  @media (max-width: 500px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: fit-content;
    margin: 0rem 0rem 0.75rem 0rem;
  }
`;

export const Options = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  height: fit-content;
  margin: 0rem 0rem 0rem 1rem;
  padding: 0rem 0rem 0rem 0rem;

  @media (max-width: 500px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 75%;
    margin: 0rem 0rem 0rem 0rem;
  }
`;

export const Option = styled.div`
  display: flex;
  align-items: flex-end;
  background: transparent !important;
  width: fit-content;
  padding: 0rem 1rem 0rem 1rem;
  height: fit-content;
  letter-spacing: 1px;

  @media (max-width: 500px) {
    padding: 0rem 0rem 0rem 0rem;
  }
`;

export const LinkContainer = styled(Link)`
  &&& {
    font-family: ${open_sans};
    color: ${white};
    font-size: 0.55rem;

    @media (max-width: 500px) {
    }

    &:hover {
      text-decoration: none !important;
      cursor: pointer !important;
    }
  }
`;
