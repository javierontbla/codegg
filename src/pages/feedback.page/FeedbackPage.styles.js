import styled from "styled-components";

import { colors } from "../../colors/colors";

const { darkBlack, darkBlue, white, yellow } = colors;

export const Wrapper = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ParentContainer = styled.div`
  -webkit-transform: skewY(-7deg);
  -moz-transform: skewY(-7deg);
  -ms-transform: skewY(-7deg);
  -o-transform: skewY(-7deg);
  transform: skewY(-7deg);
  height: 40vh;
  background: ${darkBlack};
  width: 100%;
  border-top-left-radius: 0.2rem;
  border-top-right-radius: 0.2rem;
`;

export const ChildContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 20vh;
  background: ${darkBlack};
  width: 100%;
  margin-top: -10vh;
  margin-bottom: 0.9rem;
  border-bottom-right-radius: 0.2rem;
  border-bottom-left-radius: 0.2rem;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 32vh;
    margin-bottom: 0.6rem;
    align-items: flex-end;
    justify-content: center;
  }
`;

export const ContactBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 25vw;
  height: fit-content;
  border: 2px solid ${white};
  box-shadow: 0.4rem 0.4rem ${white};
  margin-top: 6vh;
  border-radius: 0.2rem;
  margin-bottom: -42vh;
  margin-left: 10vh;
  z-index: 1;
  background: ${darkBlack};

  @media (max-width: 768px) {
    width: 85%;
    margin-left: 0vh;
  }
`;

export const Title = styled.div`
  font-family: "Roboto", sans-serif;
  color: ${white};
  font-size: 2.2rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 1vh;
  margin-top: 0.5vh;
  font-weight: bold;

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
  padding-left: 0.1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Input = styled.input`
  width: 90%;
  margin-bottom: 2vh;
  background: transparent;
  border: none;
  border-bottom: 2px solid ${white};
  padding: 0.2rem;
  padding-bottom: 0.2rem;
  padding-left: 0.2rem;
  color: ${white};
  overflow: hidden;
  transition: border-bottom 1s;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  &:focus {
    outline: 0 none;
    border-bottom: 2px solid ${yellow};
  }
`;

export const Comment = styled.textarea`
  width: 90%;
  height: 200px;
  border-radius: 0.2rem;
  margin-bottom: 2vh;
  background: transparent;
  border: 2px solid ${white};
  padding: 0.2rem;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  resize: none;
  color: ${white};
  transition: border 1s;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;

  &:focus {
    outline: none;
    border: 2px solid ${yellow};
  }

  @media (max-width: 768px) {
    height: 150px;
  }
`;

export const Button = styled.button`
  height: fit-content;
  width: fit-content;
  margin-bottom: 2vh;
  align-self: flex-start;
  margin-left: 5%;
  border: 2px solid ${white};
  background: transparent;
  border-radius: 0.2rem;
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  color: ${white};
  text-transform: uppercase;
  transition: border 1s;

  &:focus {
    outline: none;
  }

  &:hover {
    border: 2px solid ${yellow};
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Img = styled.div`
  position: relative;
  width: 360px;
  height: 210px;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  z-index: 1;
  opacity: 0.9;

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
