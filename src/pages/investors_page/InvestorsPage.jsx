import React from "react";
import { Route, Switch } from "react-router-dom";

import InvestorsCollection from "./components/investors_collection/InvestorsCollection";
import InvestorPage from "../investor_page/InvestorPage";
import { Container } from "./InvestorsPage_styles";

const InvestorsPage = ({ match }) => {
  return (
    <>
      <Container className="container">
        <Switch>
          <Route exact path={`${match.path}`} component={InvestorsCollection} />
          <Route path={`${match.path}/:investor_id`} component={InvestorPage} />
        </Switch>
      </Container>
    </>
  );
};

export default InvestorsPage;
