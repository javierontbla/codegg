import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { colors } from "../../colors/colors";
import { fonts } from "../../fonts/fonts";

const { black, blue, white } = colors;
const { montserrat, open_sans } = fonts;

export const Container = styled.div`
  display: ${(props) => (props.modal ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  z-index: 1;

  @media (max-width: 500px) {
    display: ${(props) => (props.modal ? "flex" : "none")};
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0rem 1rem 0rem 1rem;
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  margin-top: 10vh;
  margin-left: auto;
  margin-right: auto;
  width: 25rem;
  height: 20rem;
  background: ${black};
  border-radius: 15px;
  padding: 2.5rem 2rem 2rem 2rem;

  @media (max-width: 500px) {
    position: relative;
    width: 100%;
    height: 20rem;
  }
`;

export const Title = styled.div`
  text-align: center;
  height: fit-content;
  width: 100%;
  font-size: 2.2rem;
  font-family: ${montserrat};
  color: ${white};
  margin: 0rem 0rem 4rem 0rem;
`;

export const LogIn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 80%;
  background: ${blue};
  height: fit-content;
  border-radius: 5px;
  padding: 1rem 1rem 1rem 1rem;
  color: ${white};
  font-family: ${open_sans};
  font-size: 1rem;
  letter-spacing: 1px;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 500px) {
    text-align: left;
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: 3rem;
  color: ${white};
  padding: 0rem 1rem 0rem 0rem;
`;

export const CloseButton = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  margin: 1rem 1rem 0rem 0rem;
  width: 1rem;

  &:hover {
    cursor: pointer;
  }
`;
