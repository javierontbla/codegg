import styled from "styled-components";

import { colors } from "../../colors/colors";

const { darkBlack, darkBlue, white, grey, lightBlack } = colors;

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
  align-items: center;
  width: 30vw;
  height: 60vh;
  border: 2px solid ${darkBlack};
  box-shadow: 0.4rem 0.4rem ${darkBlack};
  border-radius: 0.2rem;
  background: ${lightBlack};
  padding: 0.5rem;
  z-index: 1;

  @media (max-width: 768px) {
    width: 85%;
    margin-left: 0vh;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: fit-content;
  height: 60vh;
`;

export const Title = styled.div`
  font-family: "Abril Fatface", cursive;
  color: ${white};
  font-size: 2.2rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 4vh;
  margin-top: 1vh;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

export const Subtitle = styled.div`
  width: 90%;
  height: fit-content;
  color: ${white};
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Input = styled.input`
  width: 90%;
  margin-bottom: 4vh;
  background: transparent;
  border: none;
  border-bottom: 2px solid ${darkBlack};
  padding: 0.2rem;
  padding-bottom: 0.2rem;
  padding-left: 0.2rem;
  color: ${white};
  overflow: hidden;
  transition: border-bottom 0.5s;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  &:focus {
    outline: 0 none;
    border-bottom: 2px solid ${white};
  }
`;

export const Comment = styled.textarea`
  width: 90%;
  height: 200px;
  border-radius: 0.2rem;
  margin-bottom: 4vh;
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
  }
`;

export const Button = styled.button`
  height: fit-content;
  width: fit-content;
  align-self: flex-start;
  margin-left: 5%;
  border: none;
  border-bottom: 2px solid ${darkBlack};
  background: transparent;
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  color: ${white};
  text-transform: uppercase;
  transition: border 0.5s;

  &:focus {
    outline: none;
  }

  &:hover {
    border-bottom: 2px solid ${white};
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
  }
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  height: fit-content;
`;

export const Alert = styled.div`
  display: flex;
  font-size: 1rem;
  color: ${white};
  width: 100%;
  justify-content: center;
  opacity: ${(props) => (props.alert ? "1" : "0")};
  transition: opacity 0.5s, opacity 0.5s linear;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;
