import styled from "styled-components";

import { colors } from "../../colors/colors";

const { darkBlack, yellow, white, grey, black } = colors;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.1rem;
  margin-bottom: 3rem;
`;
export const Title = styled.div`
  font-family: "Space Mono", monospace;
  font-size: 3.5rem;
  color: ${black};
  margin-top: 1.5rem;
  margin-bottom: 6rem;
  letter-spacing: 0.5px;
  text-align: center;
  width: 65%;
  line-height: 150%;
  align-self: center;

  @media (max-width: 500px) {
    font-size: 2.2rem;
    text-align: left;
    padding: 0.2rem;
    width: 100%;
    margin-bottom: 3rem;
    margin-top: 1.5rem;
  }
`;

export const Author = styled.div`
  margin-bottom: 2vh;
  width: fit-content;
  border: 2px solid ${darkBlack};
  border-radius: 0.2rem;
  padding-top: 0.4rem;
  padding-bottom: 0.6rem;
  padding-left: 0.6rem;
  padding-right: 0.6rem;
  box-shadow: 0.4rem 0.4rem ${darkBlack};
  letter-spacing: 0.5px;
  color: ${yellow};
  font-family: "Space Mono", monospace;
  font-size: 1.45rem;

  @media (max-width: 500px) {
    font-size: 1.4rem;
  }
`;

export const DateContainer = styled.div`
  font-family: "Space Mono", monospace;
  color: ${grey};
  font-size: 0.8rem;
  margin-bottom: 3rem;
  width: 100%;
  padding-left: 0.3rem;
  padding-top: 0.4rem;
`;

export const Subtitle = styled.div`
  font-family: "Space Mono", monospace;
  font-size: 1.6rem;
  color: ${white};
  letter-spacing: 0.5px;
  margin-bottom: 1vh;
  line-height: 150%;
  width: 65%;

  @media (max-width: 500px) {
    font-size: 1.4rem;
    width: 100%;
    padding: 0.2rem;
  }
`;

export const Content = styled.div`
  color: ${black};
  letter-spacing: 0.5px;
  margin-bottom: 3rem;
  font-family: "Roboto", sans-serif;
  font-size: 1.3rem;
  line-height: 180%;
  width: 65%;

  @media (max-width: 500px) {
    width: 100%;
    padding: 0.2rem;
  }
`;

export const Bold = styled.strong`
  font-size: 1.3rem;
`;
