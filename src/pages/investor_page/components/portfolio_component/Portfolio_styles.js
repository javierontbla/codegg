import styled, { css } from "styled-components";

import { colors } from "../../../../colors/colors";
import { fonts } from "../../../../fonts/fonts";

const { white, background } = colors;
const { roboto } = fonts;

const BoxStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 14.285%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 24.5rem);
  min-height: 100vh;
`;

export const Indexes = styled.div`
  display: flex;
  flex-direction: row;
  background: ${white};
  font-family: ${roboto};
  font-weight: 600;
  font-size: 0.9rem;
  border-radius: 0.15rem;
  height: fit-content;
  padding: 0.5rem 0rem 0.5rem 0rem;
  margin: 0.75rem 0rem 0.25rem 0rem;
`;

export const Index = styled.div`
  ${BoxStyles};
`;

export const Table = styled.div`
  width: 100%;
  height: fit-content;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 2.15rem;
  font-family: ${roboto};
  font-size: 0.9rem;
  margin: 0rem 0rem 0.15rem 0rem;
  background: ${white};
  border-radius: 0.15rem;
`;

export const Column = styled.div`
  ${BoxStyles};
  border-right: ${(props) =>
    props.last_child ? "none" : `1px solid ${background}`};
`;

export const Totals = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  height: 2.15rem;
  font-family: ${roboto};
  font-size: 0.9rem;
  margin: 0rem 0rem 0rem 0rem;
`;

export const Total = styled.div`
  ${BoxStyles};
  background: ${white};
  margin: ${(props) =>
    props.first_child ? "0rem 28.57% 0rem 0rem" : "0rem 0rem 0rem 0rem"};
  border-right: ${(props) =>
    props.middle_child ? `0.25px solid ${background}` : "none"};
  border-top-left-radius: ${(props) => (props.last_child ? "none" : "0.15rem")};
  border-bottom-left-radius: ${(props) =>
    props.last_child ? "none" : "0.15rem"};
  border-top-right-radius: ${(props) =>
    props.middle_child ? "none" : "0.15rem"};
  border-bottom-right-radius: ${(props) =>
    props.middle_child ? "none" : "0.15rem"};
`;
