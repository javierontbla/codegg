import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { colors } from "../../colors/colors";

const { darkBlack, white, lightBlack } = colors;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 86vh;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ContactBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 24vw;
  height: fit-content;
  border: 2px solid ${darkBlack};
  box-shadow: 0.4rem 0.4rem ${darkBlack};
  border-radius: 0.2rem;
  background: ${lightBlack};
  padding: 1.5rem;
  z-index: 1;

  @media (max-width: 768px) {
    width: 90%;
    padding: 1rem;
    margin-bottom: 4vh;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: fit-content;
  height: 60vh;
  @media (max-width: 768px) {
    height: fit-content;
  }
`;

export const Title = styled.div`
  font-family: "Abril Fatface", cursive;
  color: ${white};
  font-size: 2.3rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  height: fit-content;
  width: 100%;
  margin-bottom: 4vh;
  padding: 0;

  @media (max-width: 768px) {
    font-size: 1.7rem;
  }
`;

export const Subtitle = styled.div`
  height: fit-content;
  color: ${white};
  font-family: "Abril Fatface", cursive;
  font-size: 1.2rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Input = styled.input`
  background: transparent;
  border: none;
  border-bottom: 2px solid ${darkBlack};
  padding-bottom: 0.2rem;
  color: ${white};
  overflow: hidden;
  transition: border-bottom 0.5s;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  letter-spacing: 0.5px;
  margin-bottom: 4vh;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  &:focus {
    outline: 0 none;
    border-bottom: 2px solid ${white};
  }
`;

export const Comment = styled.textarea`
  height: 200px;
  border-radius: 0.2rem;
  background: transparent;
  border: 2px solid ${darkBlack};
  padding: 0.2rem;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  resize: none;
  color: ${white};
  transition: border 0.5s;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  letter-spacing: 0.5px;

  &:focus {
    outline: none;
    border: 2px solid ${white};
  }

  @media (max-width: 768px) {
    height: 150px;
    font-size: 0.8rem;
  }
`;

export const Button = styled.button`
  height: fit-content;
  width: fit-content;
  align-self: flex-start;
  border: none;
  border: 2px solid ${darkBlack};
  background: transparent;
  font-family: "Abril Fatface", cursive;
  font-size: 1.2rem;
  color: ${white};
  text-transform: uppercase;
  transition: border 0.5s;
  padding: 0.4rem;
  padding-bottom: 0.2rem;
  padding-top: 0.2rem;
  border-radius: 0.2rem;

  &:focus {
    outline: none;
  }

  &:hover {
    border: 2px solid ${white};
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Img = styled.div`
  width: 380px;
  height: 225px;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  opacity: 0.9;
  margin-left: -1vw;

  @media (max-width: 768px) {
    width: 280px;
    height: 130px;
    margin-left: 0;
  }
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: fit-content;
  margin-top: 4vh;
`;

export const Alert = styled.div`
  display: flex;
  font-size: 1rem;
  color: ${white};
  width: 100%;
  justify-content: center;
  transition: opacity 0.5s, opacity 0.5s linear;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: 0.9rem;
  color: ${white};
  margin-right: 0.3rem;
`;

export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
  margin: 0 auto;
`;
