import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import ProfileDashboardContainer from "./profile_dashboard_container_component/ProfileDashboardContainer";
import { Container } from "./ProfilePage_styles";

const ProfilePage = () => {
  const { path } = useRouteMatch();
  return (
    <>
      <Container className="container">
        <Switch>
          <Route path={`${path}/:user_id`}>
            <ProfileDashboardContainer />
          </Route>
        </Switch>
      </Container>
    </>
  );
};

export default ProfilePage;
