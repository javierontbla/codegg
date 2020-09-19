import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { colors } from "../../colors/colors";

const { darkBlack, white, darkBlue } = colors;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: left;

  @media (max-width: 768px) {
    align-items: flex-start;
  }
`;

export const ContactBlock = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  height: fit-content;
  background: transparent;
  z-index: 1;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0.1rem;
  }
`;

export const Title = styled.div`
  font-family: "VT323", monospace;
  color: ${white};
  font-size: 4.5rem;
  letter-spacing: 0.5px;
  height: fit-content;
  width: 100%;
  margin-top: 2vh;
  margin-bottom: 6vh;
  text-align: center;

  @media (max-width: 500px) {
    font-size: 3.5rem;
    text-align: left;
    margin-bottom: 3vh;
  }
`;

export const Subtitle = styled.div`
  height: fit-content;
  color: ${white};
  font-family: "VT323", monospace;
  font-size: 2.8rem;
  letter-spacing: 0.5px;
  margin-bottom: 1vh;

  @media (max-width: 500px) {
    font-size: 2.3rem;
  }
`;

export const Input = styled.input`
  height: 3.5rem;
  width: 100%;
  font-size: 1.5rem;
  background: ${darkBlack};
  border: none;
  border-radius: 0.2rem;
  padding: 0.4rem;
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  color: ${white};
  overflow: hidden;
  font-family: "Roboto", sans-serif;
  letter-spacing: 0.5px;
  margin-bottom: 4vh;

  &:focus {
    outline: 0 none;
    letter-spacing: 0.5px;
  }

  @media (max-width: 500px) {
    font-size: 1.2rem;
    height: 3rem;
    padding-left: 0.6rem;
    padding-right: 0.6rem;
  }
`;

export const Comment = styled.textarea`
  height: 200px;
  width: 100%;
  border-radius: 0.2rem;
  border: none;
  background: ${darkBlack};
  padding: 0.4rem;
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  resize: none;
  color: ${white};
  font-family: "Roboto", sans-serif;
  font-size: 1.5rem;
  letter-spacing: 0.5px;
  margin-bottom: 4vh;

  &:focus {
    outline: none;
  }

  @media (max-width: 500px) {
    font-size: 1.2rem;
    padding-left: 0.6rem;
    padding-right: 0.6rem;
  }
`;

export const Button = styled.div`
  display: flex;
  width: 100%;
  height: 3.5rem;
  align-items: center;
  justify-content: center;
  position: relative;
  border: none;
  background: ${darkBlue};
  font-family: "VT323", monospace;
  font-size: 2.8rem;
  color: ${darkBlack};
  letter-spacing: 0.5px;
  border-radius: 0.2rem;
  text-align: center;
  transition: background 0.25s;
  margin-bottom: 2vh;

  &:focus {
    outline: none;
  }

  &:hover {
    text-decoration: none;
    color: ${darkBlack};
    cursor: pointer;
    background: ${darkBlack};
    color: ${darkBlue};
  }

  @media (max-width: 500px) {
    margin-bottom: 1vh;
    font-size: 2.3rem;
    height: 3rem;
  }
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: fit-content;
  margin-bottom: 30vh;
`;

export const Alert = styled.div`
  display: flex;
  font-size: 2rem;
  color: ${white};
  width: 100%;
  justify-content: center;
  transition: opacity 0.5s linear;
  letter-spacing: 0.5px;
  font-family: "VT323", monospace;

  @media (max-width: 500px) {
    font-size: 1.7rem;
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: 1.2rem;
  color: ${white};
  margin-right: 0.5rem;
`;

export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
`;
