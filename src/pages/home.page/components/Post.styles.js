import styled from "styled-components";

export const Title = styled.div`
  color: black;
  font-size: 4rem;
  text-transform: uppercase;
  font-family: "Abril Fatface", cursive;
  text-align: center;
  margin-top: 2vh;
`;

export const AuthorContainer = styled.div`
  margin-top: 1vh;
  width: 100%;
  padding-left: 0.4rem;
  border-left: 0.5rem solid black;
  letter-spacing: 0.5px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding-left: 0.9rem;
  margin-top: 0.8vh;
  justify-content: flex-start;
  letter-spacing: 0.5px;
`;

export const Author = styled.div`
  font-size: 1.2rem;
  font-family: "Roboto", sans-serif;
`;
export const Date = styled.div`
  font-family: "Abril Fatface", cursive;
  font-size: 1.1rem;
`;

export const ReadTime = styled.div`
  font-family: "Abril Fatface", cursive;
  font-size: 1.1rem;
  margin-left: 1.6vw;
`;

export const Body = styled.div`
  background: transparent;
  padding: 1.7rem;
  font-family: "Roboto", sans-serif;
  font-size: 1.7rem;
  letter-spacing: 0.5px;
  text-align: justify;
  margin-top: 1vh;
`;
