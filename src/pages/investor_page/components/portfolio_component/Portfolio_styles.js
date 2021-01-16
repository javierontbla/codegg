import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 24.5rem);
  height: 100vh;
  border: 1px solid orange;
`;

export const Indexes = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Index = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 1px solid orange;
  width: 14.285%;
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
  height: 2rem;
  border: 1px solid black;
`;

export const StockCompany = styled.div`
  height: 100%;
  border: 1px solid pink;
  width: 14.285%;
  text-align: center;
`;

export const StockSymbol = styled.div`
  height: 100%;
  border: 1px solid grey;
  width: 14.285%;
  text-align: center;
`;

export const Shares = styled.div`
  height: 100%;
  border: 1px solid yellow;
  width: 14.285%;
  text-align: center;
`;

export const InitialPrice = styled.div`
  height: 100%;
  border: 1px solid blue;
  width: 14.285%;
  text-align: center;
`;

export const ActualPrice = styled.div`
  height: 100%;
  border: 1px solid red;
  width: 14.285%;
  text-align: center;
`;

export const InitialPortfolioValue = styled.div`
  border: 1px solid green;
  width: 14.285%;
  text-align: center;
`;

export const ActualPortfolioValue = styled.div`
  border: 1px solid orange;
  width: 14.285%;
  text-align: center;
`;

export const Totals = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 2rem;
`;

export const Total = styled.div`
  border: 1px solid gold;
`;
