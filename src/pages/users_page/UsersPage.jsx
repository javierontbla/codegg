import React from "react";
import { Route, Switch } from "react-router-dom";

import UserPage from "../user_page/UserPage";
import { Container } from "./UsersPage_styles";

const UsersPage = ({ match }) => {
  return (
    <>
      <Container className="container">
        <Switch>
          <Route path={`${match.path}/:user_id`} component={UserPage} />
        </Switch>
      </Container>
    </>
  );
};

export default UsersPage;
