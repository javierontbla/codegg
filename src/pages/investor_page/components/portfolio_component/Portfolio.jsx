import React from "react";

import ActionButton from "../../../../components/action_button_component/ActionButton";
import {
  Container,
  ActionButtonContainer,
  Indexes,
  Index,
  Table,
  Row,
  Column,
  Totals,
  Total,
} from "./Portfolio_styles";

const Portfolio = ({ handle_display_portfolio }) => {
  return (
    <>
      <Container>
        <ActionButtonContainer onClick={() => handle_display_portfolio()}>
          <ActionButton action={"Return"} />
        </ActionButtonContainer>
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
            <Column>Microsoft</Column>
            <Column>MSFT</Column>
            <Column>58</Column>
            <Column>$187</Column>
            <Column>$205</Column>
            <Column>$10,846</Column>
            <Column last_child={"true"}>$11,890</Column>
          </Row>
          <Row>
            <Column>Facebook</Column>
            <Column>FB</Column>
            <Column>12</Column>
            <Column>$94</Column>
            <Column>$156</Column>
            <Column>$1,024</Column>
            <Column last_child={"true"}>$1,365</Column>
          </Row>
        </Table>
        <Totals>
          <Total first_child={"true"}>58</Total>
          <Total middle_child={"true"}>$10,846</Total>
          <Total last_child={"true"}>$11,890</Total>
        </Totals>
      </Container>
    </>
  );
};

export default Portfolio;
