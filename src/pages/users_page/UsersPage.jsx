import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import UserPage from "../user_page/UserPage";
import { Container } from "./UsersPage_styles";

const UsersPage = () => {
  const { path } = useRouteMatch();
  return (
    <>
      <Container className="container">
        <Switch>
          <Route path={`${path}/:user_id`} component={UserPage} />
        </Switch>
      </Container>
    </>
  );
};

export default UsersPage;
