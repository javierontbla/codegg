import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import ProfileDashboard from "./profile_dashboard_component/ProfileDashboard";
import { Container } from "./ProfilePage_styles";

const ProfilePage = () => {
  const { path } = useRouteMatch();
  return (
    <>
      <Container className="container">
        <Switch>
          <Route path={`${path}/:user_id`}>
            <ProfileDashboard />
          </Route>
        </Switch>
      </Container>
    </>
  );
};

export default ProfilePage;
