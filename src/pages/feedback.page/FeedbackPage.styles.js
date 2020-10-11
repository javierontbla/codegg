import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { colors } from "../../colors/colors";

const { darkBlack, white, yellow } = colors;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;

  @media (max-width: 500px) {
    align-items: flex-start;
    padding: 0.2rem;
  }
`;

export const ContactBlock = styled.div`
  display: flex;
  width: 65%;
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
  color: ${white};
  font-size: 3.5rem;
  font-family: "Space Mono", monospace;
  letter-spacing: 0.5px;
  height: fit-content;
  width: 100%;
  margin-top: 1.5rem;
  margin-bottom: 3rem;
  text-align: center;

  @media (max-width: 500px) {
    font-size: 2.2rem;
    text-align: left;
  }
`;

export const Subtitle = styled.div`
  height: fit-content;
  color: ${white};
  font-size: 2rem;
  font-family: "Space Mono", monospace;
  letter-spacing: 0.5px;
  margin-bottom: 1rem;

  @media (max-width: 500px) {
    font-size: 1.6rem;
  }
`;

export const Input = styled.input`
  height: 3rem;
  width: 100%;
  font-size: 1.3rem;
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
    font-size: 1rem;
    height: 3rem;
    padding-left: 0.6rem;
    padding-right: 0.6rem;
  }
`;

export const Comment = styled.textarea`
  height: 12rem;
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
  font-size: 1.3rem;
  letter-spacing: 0.5px;
  margin-bottom: 4vh;

  &:focus {
    outline: none;
  }

  @media (max-width: 500px) {
    font-size: 1rem;
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
  background: ${yellow};
  font-family: "Space Mono", monospace;
  font-size: 2rem;
  color: ${darkBlack};
  letter-spacing: 0.5px;
  border-radius: 0.2rem;
  text-align: center;
  transition: background 0.25s;

  &:focus {
    outline: none;
  }

  &:hover {
    text-decoration: none;
    color: ${darkBlack};
    cursor: pointer;
    background: ${darkBlack};
    color: ${yellow};
  }

  @media (max-width: 500px) {
    margin-bottom: 1vh;
    font-size: 1.6rem;
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
  font-size: 1.2rem;
  color: ${white};
  width: 100%;
  justify-content: center;
  transition: opacity 0.5s linear;
  letter-spacing: 0.5px;
  font-family: "Space Mono", monospace;

  @media (max-width: 500px) {
    font-size: 1.1rem;
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: 1rem;
  color: ${white};
  margin-right: 0.5rem;

  @media (max-width: 500px) {
    margin-top: 0.2rem;
  }
`;

export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
  margin-top: 1rem;
`;
