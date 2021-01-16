import React from "react";

import ActionButton from "../../../../components/action_button_component/ActionButton";
import {
  Container,
  Indexes,
  Index,
  Table,
  Row,
  StockCompany,
  StockSymbol,
  Shares,
  InitialPrice,
  ActualPrice,
  InitialPortfolioValue,
  ActualPortfolioValue,
  Totals,
  Total,
} from "./Portfolio_styles";

const Portfolio = () => {
  return (
    <>
      <Container>
        <ActionButton action={"Create"} />
        <Indexes>
          <Index>Company</Index>
          <Index>Symbol</Index>
          <Index>Shares</Index>
          <Index>Initial Price</Index>
          <Index>Actual Price</Index>
          <Index>Portfolio Value (Initial)</Index>
          <Index>Portfolio Value (Actual)</Index>
        </Indexes>
        <Table>
          <Row>
            <StockCompany>Microsoft</StockCompany>
            <StockSymbol>MSFT</StockSymbol>
            <Shares>58</Shares>
            <InitialPrice>$187</InitialPrice>
            <ActualPrice>$205</ActualPrice>
            <InitialPortfolioValue>$10,846</InitialPortfolioValue>
            <ActualPortfolioValue>$11,890</ActualPortfolioValue>
          </Row>
        </Table>
        <Totals>
          <Total>58</Total>
          <Total>$10,846</Total>
          <Total>$11,890</Total>
        </Totals>
      </Container>
    </>
  );
};

export default Portfolio;
